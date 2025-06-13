import { vi } from "vitest";
import { mockDrink16333, mockDrinksRec } from "./mocks/drinksMock";
import RecipeProvider from "../context/recipeProvider";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { userEvent } from "@testing-library/user-event";
import { RecipeType, SearchRecipes } from "../types";
import * as api from "../services/api";
import {
  act,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

vi.mock("../services/api");

describe("Testando a página de detalhes de bebidas até 90%", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.restoreAllMocks();
    // vi.resetAllMocks();
  });

  beforeEach(async () => {
    await act(async () => {
      vi.spyOn(api, "default").mockImplementation(
        (type, filter, searchTerm) => {
          if (
            type === "drinks" &&
            filter === "details" &&
            searchTerm === "16333"
          ) {
            return Promise.resolve(mockDrink16333);
          }

          if (type === "meals" && filter === "name" && searchTerm === "") {
            return Promise.resolve(mockDrinksRec);
          }
          return Promise.resolve([]);
        }
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/drinks/16333" }
      );

      localStorage.clear();

      vi.spyOn(Storage.prototype, "setItem");
      vi.spyOn(Storage.prototype, "getItem");
    });
  });

  test("Testando se a image, título, categoria, botão de share, botão de like.", async () => {
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");
    const timeoutMock = vi.fn(
      () => new Promise((resolve) => setTimeout(resolve, 3000))
    );

    expect(await screen.findByTestId("recipe-photo")).toHaveAttribute(
      "src",
      "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg"
    );

    expect(await screen.findByTestId("recipe-title")).toHaveTextContent(
      "Adam Bomb"
    );

    expect(await screen.findByTestId("recipe-category")).toHaveTextContent(
      "Alcoholic"
    );

    const shareButton = await screen.findByTestId("share-btn");

    expect(shareButton).toHaveAttribute("src", "/src/assets/shareIcon.svg");

    await userEvent.click(shareButton);

    expect(clipboardSpy).toHaveBeenCalledWith(
      "http://localhost:3000/drinks/16333"
    );

    const linkCopied = await screen.getByText("Link copied!");

    expect(linkCopied).toBeInTheDocument();

    await act(async () => {
      await timeoutMock();
    });

    expect(linkCopied).not.toBeInTheDocument();

    const favoriteButton = await screen.findByTestId("favorite-btn");

    expect(favoriteButton).toHaveAttribute(
      "src",
      "/src/assets/whiteHeartIcon.svg"
    );

    await userEvent.click(favoriteButton);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "favoriteRecipes",
      expect.stringContaining(
        JSON.stringify([
          {
            id: "16333",
            type: "drink",
            nationality: "",
            category: "Punch / Party Drink",
            alcoholicOrNot: "Alcoholic",
            name: "Adam Bomb",
            image:
              "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
          },
        ])
      )
    );

    expect(favoriteButton).toHaveAttribute(
      "src",
      "/src/assets/blackHeartIcon.svg"
    );

    await userEvent.click(favoriteButton);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "favoriteRecipes",
      expect.stringContaining(JSON.stringify([]))
    );
  });

  test("Testando se o catch ao tentar usar o share button.", async () => {
    const clipboardMock = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockRejectedValue(new Error("Falha de permissão"));

    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const shareButton = await screen.findByTestId("share-btn");

    await userEvent.click(shareButton);

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Erro ao copiar o link: ",
      expect.any(Error)
    );

    clipboardMock.mockRestore();
    consoleErrorMock.mockRestore();
  });

  test("Testando os ingrediente da receita, e se a lista está renderizada corretamente.", async () => {
    expect(await screen.findByText("Ingredientes")).toBeInTheDocument();
    expect(
      await screen.findByTestId("0-ingredient-name-and-measure")
    ).toHaveTextContent("1 part Rum");

    expect(
      await screen.findByTestId("1-ingredient-name-and-measure")
    ).toHaveTextContent("1 part Vodka");

    expect(
      await screen.findByTestId("2-ingredient-name-and-measure")
    ).toHaveTextContent("1 part Tequila");

    expect(
      await screen.findByTestId("3-ingredient-name-and-measure")
    ).toHaveTextContent("1/2 part Triple sec");

    expect(
      await screen.findByTestId("4-ingredient-name-and-measure")
    ).toHaveTextContent("Fruit");

    expect(
      await screen.findByTestId("5-ingredient-name-and-measure")
    ).toHaveTextContent("Ice");

    expect(
      await screen.findByTestId("6-ingredient-name-and-measure")
    ).toHaveTextContent("1-3 pint Salt");

    expect(
      await screen.findByTestId("7-ingredient-name-and-measure")
    ).toHaveTextContent("Fruit juice");
  });

  test("Testando as instruções da receita e se está renderizados corretamente.", async () => {
    expect(await screen.getByText("Instruções"));

    expect(await screen.getByTestId("instructions")).toHaveTextContent(
      "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice."
    );
  });

  test("Testando as receitas recomendandos e se está renderizados corretamente.", async () => {
    expect(await screen.getByText("Recomendados")).toBeInTheDocument();

    expect(
      await screen.getByTestId("0-recommendation-title")
    ).toHaveTextContent("Migas");

    expect(
      await screen.getByTestId("1-recommendation-title")
    ).toHaveTextContent("Sushi");

    await userEvent.click(await screen.getByTestId("1-recommendation-card"));

    expect(window.location.pathname).toBe("/meals/53065");
  });

  test("Testando o botão Start Recipe, e se está renderizados corretamente", async () => {
    const startButton = await screen.getByTestId("start-recipe-btn");

    expect(startButton).toHaveTextContent("Start Recipe");

    await userEvent.click(startButton);

    expect(startButton).toHaveTextContent("Continue Recipe");
  });

  test("deve cair no catch e lançar erro", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.spyOn(api, "default").mockRejectedValue(new Error("Mock error"));

    await renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/drinks/16333" }
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(new Error("Mock error"));
    });

    consoleSpy.mockRestore();
  });
});
