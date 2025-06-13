import { screen, waitFor } from "@testing-library/dom";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { drinksIcon } from "../assets";
import RecipeProvider from "../context/recipeProvider";
import { vi } from "vitest";

describe("Testando a página Drinks até os 90%", () => {
  test("Testando se o Header carrega o titulo, a imagem, e o botão search corretamente.", () => {
    renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      {
        route: "/drinks",
      }
    );

    const image = screen.getByAltText(/Drinks-icon/);
    const searchButton = screen.queryByAltText(/Search-icon/);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", drinksIcon);
    expect(screen.getByText("Drinks")).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("Testando se o botão de profile leva para a página profile.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      {
        route: "/drinks",
      }
    );

    const profileButton = screen.getByAltText("Profile-icon");

    expect(profileButton).toBeInTheDocument();

    await user.click(profileButton);

    expect(window.location.pathname).toBe("/profile");
  });

  test("Testando se o componente search fica visivel", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchButton = screen.getByAltText(/Search-icon/);

    expect(searchButton).toBeInTheDocument();

    await user.click(searchButton);

    expect(screen.getByPlaceholderText(/Pesquisar/)).toBeInTheDocument();
  });

  test("Testando se o componente de pesquisa, quando escolher first-letter, e digita mais de um caracter, devemos receber um alerta", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const firstLetterFilter = screen.getByTestId(/first-letter-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "two");
    await user.click(firstLetterFilter);
    await user.click(searchButton);

    expect(alertMock).toHaveBeenCalledWith(
      "Your search must have only 1 (one) character"
    );

    alertMock.mockReset();
  });

  test("Testando se no componente de pesquisar, se digitar um nome, e resultar em apenas uma receita, seremos redirecionado para a pagina de detalhes da receita específica.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const nameFilter = screen.getByTestId(/name-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Buccaneer");
    await user.click(nameFilter);
    await user.click(searchButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/drinks/17035");
    });
  });

  test("Testando se caso nenhuma bebida seja encontrada, recebemos um alerta.", async () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const nameFilter = screen.getByTestId(/name-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Xablau");
    await user.click(nameFilter);
    await user.click(searchButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        "Sorry, we haven't found any recipes for these filters."
      );
    });

    alertSpy.mockRestore();
  });

  test("Testando se mostra 12 bebidas na tela, caso seja encontrada mais de uma bebida.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const ingredientFilter = screen.getByTestId(/ingredient-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Vodka");
    await user.click(ingredientFilter);
    await user.click(searchButton);

    await waitFor(() => {
      expect(screen.getAllByAltText("drink-image")).toHaveLength(12);
    });
  });

  test("Testando se o scroll de uma recipe reseta, depois de 3 segundos.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/i);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/i);
    const ingredientFilter = screen.getByTestId(/ingredient-search-radio/);
    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Vodka");
    await user.click(ingredientFilter);
    await user.click(searchButton);

    const scrollable = await screen.findByTestId("2-recipe-card");

    scrollable.scrollTo = vi.fn();

    await user.hover(scrollable);
    await user.unhover(scrollable);

    // espera 3.1 segundos (acima dos 3000ms do setTimeout)
    await new Promise((resolve) => setTimeout(resolve, 3100));

    expect(scrollable.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  }, 10000); // timeout do teste

  test("Testando se o ícone de comida do footer redireciona para a página de meals.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const mealIcon = screen.getByTestId(/meals-bottom-btn/);

    await user.click(mealIcon);

    expect(window.location.pathname).toBe("/meals");
  });

  test("Testando se ao clicar em uma bebida, seremos redicionado a página de detalhes.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks" }
    );

    const cockatailCategoryFilter = await screen.findByTestId(
      "Cocktail-category-filter"
    );

    await user.click(cockatailCategoryFilter);

    const firstRecipeCard = await screen.findByTestId("0-recipe-card");

    await user.click(firstRecipeCard);

    expect(window.location.pathname).toBe("/drinks/15346");
  });
});
