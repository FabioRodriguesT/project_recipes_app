import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../utils/renderWithRouter";
import App from "../App";
import { profileIcon2 } from "../assets";
import { act } from "react-dom/test-utils";
import RecipeProvider from "../context/recipeProvider";
import userEvent from "@testing-library/user-event";

describe("Testando a página Profile até os 90%", () => {
  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    await act(async () => {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: "jabuticaba@email.com" })
      );

      await renderWithRouter(
        <RecipeProvider>
          <App />
        </RecipeProvider>,
        {
          route: "/profile",
        }
      );

      vi.spyOn(Storage.prototype, "setItem");
      vi.spyOn(Storage.prototype, "getItem");
    });
  });

  test("Testando se o Header carrega o titulo, a imagem, e o botão search corretamente.", () => {
    const image = screen.getByAltText(/ProfilePage-icon/);
    const searchButton = screen.queryByAltText(/Search-icon/);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", profileIcon2);
    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });

  test("Testando se renderiza o localStorage na chave email, se está renderizado corretamente na tela.", () => {
    expect(screen.getByTestId("profile-email")).toHaveTextContent(
      "jabuticaba@email.com"
    );
  });

  test("Tesntando o botão de Done Recipes, se te envia para a rota corretamente.", async () => {
    const doneRecipesButton = screen.getByTestId("profile-done-btn");

    await userEvent.click(doneRecipesButton);

    expect(window.location.pathname).toEqual("/done-recipes");
  });

  test("Tesntando o botão de Favorite Recipes, se te envia para a rota corretamente.", async () => {
    const favoriteRecipesButton = screen.getByTestId("profile-favorite-btn");

    await userEvent.click(favoriteRecipesButton);

    expect(window.location.pathname).toEqual("/favorite-recipes");
  });

  test("Tesntando o botão de Logout, se remove os itens do localStorage e te manda para a rota Login.", async () => {
    const LogoutButton = screen.getByTestId("profile-logout-btn");

    await userEvent.click(LogoutButton);

    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("doneRecipes")).toBeNull();
    expect(localStorage.getItem("favoriteRecipes")).toBeNull();
    expect(localStorage.getItem("inProgressRecipes")).toBeNull();

    expect(window.location.pathname).toEqual("/");
  });
});
