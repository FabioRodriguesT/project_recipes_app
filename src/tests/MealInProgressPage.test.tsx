import App from "../App";
import RecipeProvider from "../context/recipeProvider";
import { renderWithRouter } from "../utils/renderWithRouter";
import { mockMeal52771, mockMeal52771Nullable } from "./mocks/mealsMock";
import * as api from "../services/api";
import { act, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import favoriteRecipe from "../utils/favoriteRecipe";

describe("Testando a página de mealsInProgress até os 90%.", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    await act(async () => {
      vi.spyOn(api, "default").mockImplementation(
        (type, filter, searchTerm) => {
          if (
            type === "meals" &&
            filter === "details" &&
            searchTerm === "52771"
          ) {
            return Promise.resolve(mockMeal52771);
          }
          return Promise.resolve([]);
        }
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );

      vi.spyOn(Storage.prototype, "setItem");
      vi.spyOn(Storage.prototype, "getItem");
    });
  });

  test("Testando se imagem, título, categoria, share, like estão rendenrizados na tela.", () => {
    expect(screen.getByTestId("recipe-photo")).toHaveAttribute(
      "src",
      "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    );

    expect(screen.getByTestId("recipe-title")).toHaveTextContent(
      "Spicy Arrabiata Penne"
    );

    expect(screen.getByTestId("recipe-category")).toHaveTextContent(
      "Vegetarian"
    );

    expect(screen.getByTestId("share-btn")).toHaveAttribute(
      "src",
      "/src/assets/shareIcon.svg"
    );

    expect(screen.getByTestId("favorite-btn")).toHaveAttribute(
      "src",
      "/src/assets/whiteHeartIcon.svg"
    );
  });

  test("Testando os ingredientes da receita, e se a lista está renderizada corretamente.", () => {
    expect(screen.getByText("Ingredientes")).toBeInTheDocument();

    expect(screen.getByTestId("0-ingredient-step")).toHaveTextContent(
      "1 pound penne rigate"
    );

    expect(screen.getByTestId("1-ingredient-step")).toHaveTextContent(
      "1/4 cup olive oil"
    );
    expect(screen.getByTestId("2-ingredient-step")).toHaveTextContent(
      "3 cloves garlic"
    );
    expect(screen.getByTestId("3-ingredient-step")).toHaveTextContent(
      "1 tin chopped tomatoes"
    );
    expect(screen.getByTestId("4-ingredient-step")).toHaveTextContent(
      "1/2 teaspoon red chilli flakes"
    );
    expect(screen.getByTestId("5-ingredient-step")).toHaveTextContent(
      "1/2 teaspoon italian seasoning"
    );
    expect(screen.getByTestId("6-ingredient-step")).toHaveTextContent(
      "6 leaves basil"
    );
    expect(screen.getByTestId("7-ingredient-step")).toHaveTextContent(
      "sprinkling Parmigiano-Reggiano"
    );
  });

  test("Testando os ingredientes da receita se ao clicar em ingredientes é feito update no local storage inProgressRecipes.", async () => {
    const firstIngredient = screen.getByTestId("0-ingredient-step");
    const secondIngredient = screen.getByTestId("1-ingredient-step");

    await userEvent.click(firstIngredient);
    await userEvent.click(secondIngredient);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "inProgressRecipes",
      expect.stringContaining(
        JSON.stringify({
          meals: {
            52771: ["1 pound penne rigate", "1/4 cup olive oil"],
          },
        })
      )
    );

    await userEvent.click(firstIngredient);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "inProgressRecipes",
      expect.stringContaining(
        JSON.stringify({
          meals: {
            52771: ["1 pound penne rigate"],
          },
        })
      )
    );
  });

  test("Testando se o botão finish recipe está desabilitado.", () => {
    expect(screen.getByTestId("finish-recipe-btn")).toBeDisabled();
    expect(screen.getByTestId("finish-recipe-btn")).toHaveClass("disabled");
  });

  test("Testando se o botão finish recipe está habilitado", async () => {
    await act(async () => {
      cleanup();
      localStorage.setItem(
        "inProgressRecipes",
        JSON.stringify({
          drinks: {},
          meals: {
            52771: [
              "1 pound penne rigate",
              "1/4 cup olive oil",
              "3 cloves garlic",
              "1 tin  chopped tomatoes",
              "1/2 teaspoon red chilli flakes",
              "1/2 teaspoon italian seasoning",
              "6 leaves basil",
              "sprinkling Parmigiano-Reggiano",
            ],
          },
        })
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );
    });

    const finishButton = screen.getByTestId("finish-recipe-btn");

    expect(finishButton).toHaveClass("enabled");
    expect(finishButton).toBeEnabled();
  });

  test("Testando icone de favorito da página, quando a receita não está favoritada.", () => {
    expect(screen.getByTestId("favorite-btn")).toHaveAttribute(
      "src",
      "/src/assets/whiteHeartIcon.svg"
    );
  });

  test("Testa o clique no botão de compartilhar", async () => {
    await userEvent.click(screen.getByTestId("share-btn"));
    expect(screen.getByText(/Link copied!/i)).toBeInTheDocument();
  });

  test("Testando o icone de favorito da página, quando a receita está favoritada.", async () => {
    await act(async () => {
      cleanup();
      localStorage.setItem(
        "favoriteRecipes",
        JSON.stringify([
          {
            id: "52771",
            type: "meal",
            nationality: "Italian",
            category: "Vegetarian",
            alcoholicOrNot: "",
            name: "Spicy Arrabiata Penne",
            image:
              "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
          },
        ])
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );
    });

    expect(screen.getByTestId("favorite-btn")).toHaveAttribute(
      "src",
      "/src/assets/blackHeartIcon.svg"
    );
  });

  test("Testando o click do botão de favorito.", async () => {
    await act(async () => {
      cleanup();
      vi.mock("../utils/favoriteRecipe", () => ({
        default: vi.fn(),
      }));

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );
    });

    await userEvent.click(screen.getByTestId("favorite-btn"));

    expect(favoriteRecipe).toHaveBeenCalled();
  });

  test("Testando se cair no catch e lançar erro.", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.spyOn(api, "default").mockRejectedValue(new Error("Mock error"));

    await renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: "/meals/52771/in-progress" }
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(new Error("Mock error"));
    });

    consoleSpy.mockRestore();
  });

  test("Testando se o botão finish button, salva a receita no local storage e navega para a a proxima página.", async () => {
    const mockDate = new Date("2025-05-13T12:00:00.000Z");

    await act(async () => {
      vi.setSystemTime(mockDate);

      cleanup();
      localStorage.setItem(
        "inProgressRecipes",
        JSON.stringify({
          drinks: {},
          meals: {
            52771: [
              "1 pound penne rigate",
              "1/4 cup olive oil",
              "3 cloves garlic",
              "1 tin  chopped tomatoes",
              "1/2 teaspoon red chilli flakes",
              "1/2 teaspoon italian seasoning",
              "6 leaves basil",
              "sprinkling Parmigiano-Reggiano",
            ],
          },
        })
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );
    });

    await userEvent.click(screen.getByTestId("finish-recipe-btn"));

    const calls = (localStorage.setItem as jest.Mock).mock.calls;

    const doneRecipesCall = calls.find(([key]) => key === "doneRecipes");

    expect(doneRecipesCall).toEqual([
      "doneRecipes",
      JSON.stringify([
        {
          id: "52771",
          type: "meal",
          nationality: "Italian",
          category: "Vegetarian",
          alcoholicOrNot: "",
          name: "Spicy Arrabiata Penne",
          image:
            "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
          doneDate: mockDate.toLocaleDateString("pt-BR"),
          tags: ["Pasta", "Curry"],
        },
      ]),
    ]);

    expect(window.location.href).toBe("http://localhost:3000/done-recipes");

    vi.restoreAllMocks();
  });

  test("Testando se o botão finish button, salva a receita no local storage e navega para a a proxima página, usando um receita com diversos valores null.", async () => {
    const mockDate = new Date("2025-05-13T12:00:00.000Z");

    await act(async () => {
      vi.setSystemTime(mockDate);

      cleanup();
      localStorage.setItem(
        "inProgressRecipes",
        JSON.stringify({
          drinks: {},
          meals: {
            52771: [
              "1 pound penne rigate",
              "1/4 cup olive oil",
              "3 cloves garlic",
              "1 tin  chopped tomatoes",
              "1/2 teaspoon red chilli flakes",
              "1/2 teaspoon italian seasoning",
              "6 leaves basil",
              "sprinkling Parmigiano-Reggiano",
            ],
          },
        })
      );

      vi.spyOn(api, "default").mockImplementation(
        (type, filter, searchTerm) => {
          if (
            type === "meals" &&
            filter === "details" &&
            searchTerm === "52771"
          ) {
            return Promise.resolve(mockMeal52771Nullable);
          }
          return Promise.resolve([]);
        }
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        { route: "/meals/52771/in-progress" }
      );
    });

    await userEvent.click(screen.getByTestId("finish-recipe-btn"));

    const calls = (localStorage.setItem as jest.Mock).mock.calls;

    const doneRecipesCall = calls.find(([key]) => key === "doneRecipes");

    expect(doneRecipesCall).toEqual([
      "doneRecipes",
      JSON.stringify([
        {
          id: "52771",
          type: "meal",
          nationality: "",
          category: "",
          alcoholicOrNot: "",
          name: "Spicy Arrabiata Penne",
          image:
            "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
          doneDate: mockDate.toLocaleDateString("pt-BR"),
          tags: [],
        },
      ]),
    ]);

    expect(window.location.href).toBe("http://localhost:3000/done-recipes");

    vi.restoreAllMocks();
  });
});
