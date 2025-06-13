import { vi } from "vitest";
import { mockMeal53060, mockMealsRec } from "./mocks/mealsMock";
import RecipeProvider from "../context/recipeProvider";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { userEvent } from "@testing-library/user-event";
import { RecipeType, SearchRecipes } from "../types";
import * as api from "../services/api";
import { act, screen, waitFor } from "@testing-library/react";

vi.mock("../services/api");

describe("Testando a página de detalhes de bebidas até 90%", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    localStorage.clear();

    await act(async () => {
      vi.spyOn(api, "default").mockImplementation(
        (type, filter, searchTerm) => {
          if (
            type === "meals" &&
            filter === "details" &&
            searchTerm === "53060"
          ) {
            return Promise.resolve(mockMeal53060);
          }

          if (type === "drinks" && filter === "name" && searchTerm === "") {
            return Promise.resolve(mockMealsRec);
          }
          return Promise.resolve([]);
        }
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/53060" }
      );

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
      "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"
    );

    expect(await screen.findByTestId("recipe-title")).toHaveTextContent(
      "Burek"
    );

    expect(await screen.findByTestId("recipe-category")).toHaveTextContent(
      "Side"
    );

    const shareButton = await screen.findByTestId("share-btn");

    expect(shareButton).toHaveAttribute("src", "/src/assets/shareIcon.svg");

    await userEvent.click(shareButton);

    expect(clipboardSpy).toHaveBeenCalledWith(
      "http://localhost:3000/meals/53060"
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
            id: "53060",
            type: "meal",
            nationality: "Croatian",
            category: "Side",
            alcoholicOrNot: "",
            name: "Burek",
            image:
              "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
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

  test("Testando os ingredientes da receita, e se a lista está renderizada corretamente.", async () => {
    expect(await screen.findByText("Ingredientes")).toBeInTheDocument();
    expect(
      await screen.findByTestId("0-ingredient-name-and-measure")
    ).toHaveTextContent("1 Packet Filo Pastry");

    expect(
      await screen.findByTestId("1-ingredient-name-and-measure")
    ).toHaveTextContent("150g Minced Beef");

    expect(
      await screen.findByTestId("2-ingredient-name-and-measure")
    ).toHaveTextContent("150g Onion");

    expect(
      await screen.findByTestId("3-ingredient-name-and-measure")
    ).toHaveTextContent("40g Oil");

    expect(
      await screen.findByTestId("4-ingredient-name-and-measure")
    ).toHaveTextContent("Dash Salt");

    expect(
      await screen.findByTestId("5-ingredient-name-and-measure")
    ).toHaveTextContent("Pepper");
  });

  test("Testando as instruções da receita e se está renderizados corretamente.", async () => {
    expect(await screen.getByText("Instruções"));

    expect(await screen.getByTestId("instructions")).toHaveTextContent(
      "Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve."
    );
  });

  test("Testando o video da receita de comida, se está renderizado corretamente", async () => {
    expect(await screen.getByText("Vídeo")).toBeInTheDocument();

    expect(await screen.getByTestId("video")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/YsJXZwE5pdY"
    );
  });

  test("Testando as receitas recomendandos e se está renderizados corretamente.", async () => {
    expect(await screen.getByText("Recomendados")).toBeInTheDocument();

    expect(
      await screen.getByTestId("0-recommendation-title")
    ).toHaveTextContent("Adam Bomb");

    expect(
      await screen.getByTestId("1-recommendation-title")
    ).toHaveTextContent("747 Drink");

    await userEvent.click(await screen.getByTestId("1-recommendation-card"));

    expect(window.location.pathname).toBe("/drinks/178318");
  });

  test("Testando o botão Start Recipe, e se está renderizados corretamente", async () => {
    const startButton = screen.getByTestId("start-recipe-btn");

    expect(startButton).toHaveTextContent("Start Recipe");

    await userEvent.click(startButton);

    expect(startButton).toHaveTextContent("Continue Recipe");
  });

  test("Testando se cair no catch e lançar erro", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.spyOn(api, "default").mockRejectedValue(new Error("Mock error"));

    await renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals/53060" }
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(new Error("Mock error"));
    });

    consoleSpy.mockRestore();
  });
});
