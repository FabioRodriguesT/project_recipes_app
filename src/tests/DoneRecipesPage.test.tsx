import { screen, waitFor } from "@testing-library/dom";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { doneRecipesIcon } from "../assets";
import RecipeProvider from "../context/recipeProvider";
import { act, cleanup } from "@testing-library/react";
import { doneRecipesMock } from "./mocks/doneRecipesMock";
import userEvent from "@testing-library/user-event";

describe("Testando a página Done Recipes até os 90%", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    await act(async () => {
      vi.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
        if (key === "doneRecipes") {
          return JSON.stringify(doneRecipesMock);
        }

        return null;
      });

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        {
          route: "/done-recipes",
        }
      );

      vi.spyOn(Storage.prototype, "setItem");
      vi.spyOn(Storage.prototype, "getItem");
    });
  });

  test("Testando se o Header carrega o titulo, a imagem, e o botão search corretamente.", async () => {
    const image = await screen.getByAltText("DoneRecipes-icon");
    const searchButton = screen.queryByAltText(/Search-icon/);
    const title = screen.getByTestId("page-title");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", doneRecipesIcon);
    expect(title).toHaveTextContent("Done Recipes");
    expect(searchButton).not.toBeInTheDocument();
  });

  test("Testando o filtro do Header, se ao clicar em dishes, mostra apenas os meals", async () => {
    const firstRecipeTitle = screen.getByText("Spicy Arrabiata Penne");
    const secondRecipeTitle = screen.getByText("Aquamarine");

    const dishesFilter = screen.getByTestId("filter-by-meal-btn");

    await userEvent.click(dishesFilter);

    expect(firstRecipeTitle).toBeInTheDocument();
    expect(secondRecipeTitle).not.toBeInTheDocument();
  });

  test("Testando o filtro do Header, se ao clicar em drinks, mostra apenas os drinks", async () => {
    const firstRecipeTitle = screen.getByText("Spicy Arrabiata Penne");
    const secondRecipeTitle = screen.getByText("Aquamarine");

    const dishesFilter = screen.getByTestId("filter-by-drink-btn");

    await userEvent.click(dishesFilter);

    expect(firstRecipeTitle).not.toBeInTheDocument();
    expect(secondRecipeTitle).toBeInTheDocument();
  });

  test("Testando o filtro do Header, se ao clicar em all, mostra todos os tipos de receitas", async () => {
    const firstRecipeTitle = screen.getByText("Spicy Arrabiata Penne");
    const secondRecipeTitle = screen.getByText("Aquamarine");

    const dishesFilter = screen.getByTestId("filter-by-all-btn");

    await userEvent.click(dishesFilter);

    expect(firstRecipeTitle).toBeInTheDocument();
    expect(secondRecipeTitle).toBeInTheDocument();
  });

  test("Testando se está renderizando os dados do localStorage done-recipes", () => {
    expect(screen.getByTestId("0-horizontal-name")).toHaveTextContent(
      "Spicy Arrabiata Penne"
    );

    expect(screen.getByTestId("1-horizontal-name")).toHaveTextContent(
      "Aquamarine"
    );
  });

  test("Testando se ao clicar no título de uma receita, redireciona-se para a página de detalhes daquela receita.", async () => {
    const title = screen.getByTestId("0-horizontal-name");

    await userEvent.click(title);

    expect(window.location.href).toEqual("http://localhost:3000/meals/52771");
  });

  test("Testando se ao clicar na imagem de uma receita, redireciona-se para a página de detalhes daquela receita.", async () => {
    const image = screen.getByTestId("1-horizontal-image");

    await userEvent.click(image);

    expect(window.location.href).toEqual("http://localhost:3000/drinks/178319");
  });

  test("Testando se ao clicar no botão de compartilhamento, o link da receita foi copiado para o clipboard ", async () => {
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");

    const shareButton = screen.getByTestId("0-horizontal-share-btn");

    await userEvent.click(shareButton);

    expect(clipboardSpy).toHaveBeenCalledWith(
      "http://localhost:3000/meals/52771"
    );
  });

  test("Testando quando o localStorage de done-recipes, está vazio, e não renderiza nenhuma receita.", async () => {
    vi.restoreAllMocks();
    cleanup();
    localStorage.removeItem("doneRecipes");

    await renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      {
        route: "/done-recipes",
      }
    );

    const response = JSON.parse(localStorage.getItem("doneRecipes") || "[]");

    expect(Array.isArray(response)).toBe(true);
    expect(response).toHaveLength(0);
  });
});
