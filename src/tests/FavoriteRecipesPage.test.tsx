import { screen, waitFor } from "@testing-library/dom";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { favoritesIcon } from "../assets";
import { favoriteRecipesMock } from "./mocks/favoriteRecipesMock";
import RecipeProvider from "../context/recipeProvider";
import { act, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavoriteRecipeType } from "../types";

describe("Testando a página Favorite Recipes até os 90%", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    await act(async () => {
      vi.spyOn(Storage.prototype, "getItem").mockImplementationOnce((key) => {
        if (key === "favoriteRecipes") {
          return JSON.stringify(favoriteRecipesMock);
        }

        return null;
      });

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        {
          route: "/favorite-recipes",
        }
      );

      vi.spyOn(Storage.prototype, "setItem");
      vi.spyOn(Storage.prototype, "getItem");
    });
  });

  test("Testando se o Header carrega o titulo, a imagem, e o botão search corretamente.", () => {
    const image = screen.getByAltText(/FavoriteRecipes-icon/);
    const searchButton = screen.queryByAltText(/Search-icon/);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", favoritesIcon);
    expect(screen.getByText("Favorite Recipes")).toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });

  test("Testando se a lista de favoritos está renderizada na tela.", () => {
    expect(screen.getByTestId("0-horizontal-name")).toHaveTextContent(
      "Spicy Arrabiata Penne"
    );

    expect(screen.getByTestId("1-horizontal-name")).toHaveTextContent(
      "Aquamarine"
    );
  });

  test("Testando se ao clicar no imagem de uma receita, redireciona-se para a página de detalhes daquela receita.", async () => {
    const image = screen.getByTestId("1-horizontal-image");

    await userEvent.click(image);

    expect(window.location.href).toEqual("http://localhost:3000/drinks/178319");
  });

  test("Testando se ao clicar na título de uma receita, redireciona-se para a página de detalhes daquela receita.", async () => {
    const title = screen.getByTestId("0-horizontal-name");

    await userEvent.click(title);

    expect(window.location.href).toEqual("http://localhost:3000/meals/52771");
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
    const dishesFilter = screen.getByTestId("filter-by-drink-btn");

    await userEvent.click(dishesFilter);

    expect(screen.queryByText("Spicy Arrabiata Penne")).not.toBeInTheDocument();
    expect(screen.getByText("Aquamarine")).toBeInTheDocument();
  });

  test("Testando o filtro do Header, se ao clicar em all, mostra todos os tipos de receitas", async () => {
    const firstRecipeTitle = screen.getByText("Spicy Arrabiata Penne");
    const secondRecipeTitle = screen.getByText("Aquamarine");

    const dishesFilter = screen.getByTestId("filter-by-all-btn");

    await userEvent.click(dishesFilter);

    expect(firstRecipeTitle).toBeInTheDocument();
    expect(secondRecipeTitle).toBeInTheDocument();
  });

  test("Testando se ao clicar no botão de desfavoritar, remove a receita do localStorage.", async () => {
    const favoriteButton = screen.getByTestId("0-horizontal-favorite-btn");

    await userEvent.click(favoriteButton);

    const localStorageFavorite = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );

    const result = localStorageFavorite.some(
      (recipe: FavoriteRecipeType) => recipe.name === "Spicy Arrabiata Penne"
    );

    expect(result).toBeFalsy();
  });

  test("Testando se ao clicar no botão de compartilhamento, o link da receita foi copiado para o clipboard ", async () => {
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");

    const shareButton = screen.getByTestId("1-horizontal-share-btn");

    await userEvent.click(shareButton);

    expect(clipboardSpy).toHaveBeenCalledWith(
      "http://localhost:3000/drinks/178319"
    );
  });

  test("Testando quando o localStorage de favorite-recipes, está vazio, e não renderiza nenhuma receita.", async () => {
    vi.restoreAllMocks();
    cleanup();
    localStorage.removeItem("favoriteRecipes");

    await renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      {
        route: "/favorite-recipes",
      }
    );

    const response = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );

    expect(Array.isArray(response)).toBe(true);
    expect(response).toHaveLength(0);
  });
});
