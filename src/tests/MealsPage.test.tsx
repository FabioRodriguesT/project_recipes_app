import { findByTestId, screen, waitFor } from "@testing-library/dom";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { mealsIcon } from "../assets";
import { vi } from "vitest";
import searchRecipes from "../services/api";
import RecipeProvider from "../context/recipeProvider";
import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testanto a página Meals até os 90%", () => {
  test("Testando se o Header carrega o titulo, a imagem, e o botão search corretamente.", () => {
    renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
    );

    const image = screen.getByAltText(/Meals-icon/);
    const searchButton = screen.queryByAltText(/Search-icon/);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mealsIcon);
    expect(screen.getByText("Meals")).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("Testando se o botão de profile leva para a página profile.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
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
      { route: "/meals" }
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
      { route: "/meals" }
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
      { route: "/meals" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const nameFilter = screen.getByTestId(/name-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Arrabiata");
    await user.click(nameFilter);
    await user.click(searchButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/meals/52771");
    });
  });

  test("Testando se caso nenhuma comida seja encontrada, recebemos um alerta.", async () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
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

  test("Testando se mostra 12 comidas na tela, caso seja encontrada mais de uma comida.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
    );

    const searchIcon = screen.getByAltText(/Search-icon/);
    await user.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/);
    const ingredientFilter = screen.getByTestId(/ingredient-search-radio/);

    const searchButton = screen.getByTestId(/exec-search-btn/);

    await user.type(searchInput, "Egg");
    await user.click(ingredientFilter);
    await user.click(searchButton);

    await waitFor(() => {
      expect(screen.getAllByAltText("food-image")).toHaveLength(12);
    });
  });

  test("Testando se o scroll de uma recipe reseta, depois de 3 segundos.", async () => {
    await act(() => {
      renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals" }
      );
    });

    const searchIcon = screen.getByAltText(/Search-icon/i);
    await userEvent.click(searchIcon);

    const searchInput = screen.getByPlaceholderText(/Pesquisar/i);
    const ingredientFilter = screen.getByTestId(/ingredient-search-radio/);
    const searchButton = screen.getByTestId(/exec-search-btn/);

    await userEvent.type(searchInput, "Egg");
    await userEvent.click(ingredientFilter);
    await userEvent.click(searchButton);

    const scrollable = await screen.findByTestId("7-recipe-card");

    scrollable.scrollTo = vi.fn();

    await userEvent.hover(scrollable);
    await userEvent.unhover(scrollable);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3100));
    });

    expect(scrollable.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  }, 10000); // timeout do teste

  test("Testando se o ícone de bebidas do footer redireciona para a página de drinks.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
    );

    const drinkIcon = screen.getByTestId(/drinks-bottom-btn/);

    await user.click(drinkIcon);

    expect(window.location.pathname).toBe("/drinks");
  });

  test("Testando o componente de categoria, se o botão Todos, retorna a comida esperada.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
    );

    const allCategoryFilter = await screen.findByTestId(/All-category-filter/);
    const beefCategoryFilter = await screen.findByTestId(
      /Beef-category-filter/
    );

    await user.click(beefCategoryFilter);
    await user.click(allCategoryFilter);
    await waitFor(() => {
      const firstImageCard = screen.getByTestId("0-card-img");
      const firstNameCard = screen.getByTestId("0-card-name");

      expect(firstImageCard).toHaveAttribute(
        "src",
        "https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg"
      );

      expect(firstNameCard).toHaveTextContent(/Migas/);
    });
  });

  test("Testando se ao clicar em uma comida, seremos redicionado a página de detalhes.", async () => {
    const { user } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals" }
    );
    const firstRecipeCard = await screen.findByTestId("0-recipe-card");

    await user.click(firstRecipeCard);

    expect(window.location.pathname).toBe("/meals/53086");
  });
});
