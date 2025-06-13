import { screen } from "@testing-library/dom";

import App from "../App";
import { renderWithRouter } from "../utils/renderWithRouter";

describe("Testando a página de Login até os 90%", () => {
  test("Testando se há alguma coisa renderizada na tela", () => {
    renderWithRouter(<App />);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  });

  test("Testando as funções do botão, habilitado, desabilitado e navegação para a próxima página", async () => {
    const { user } = renderWithRouter(<App />);

    const button = screen.getByRole("button", { name: "Entrar" });
    const email = screen.getByPlaceholderText(/E-mail/);
    const password = screen.getByPlaceholderText(/Password/);

    expect(button).toHaveAttribute("disabled");

    await user.type(email, "jabuticaba@email.com");
    await user.type(password, "12345678");

    expect(button).not.toHaveAttribute("disabled");

    await user.click(button);

    expect(window.location.pathname).toBe("/meals");
  });
});
