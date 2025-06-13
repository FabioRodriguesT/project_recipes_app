import { renderWithRouter } from "../utils/renderWithRouter";
import Loading from "../pages/Loading";
import { screen } from "@testing-library/dom";

describe("Testan a página de Loading até os 90%", () => {
  test("Testando os componentes renderizados na tela", () => {
    renderWithRouter(<Loading />);

    expect(screen.getByAltText(/Logo/)).toBeInTheDocument();
    expect(screen.getByText(/Receitas/)).toBeInTheDocument();
    expect(screen.getByText(/App/)).toBeInTheDocument();
  });
});
