import React, { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { useLocation } from 'react-router-dom';
import App from '../App';
import RecipeProvider from '../context/recipeProvider';
import { renderWithRouter } from '../utils/renderWithRouter';
import mockMealsByIngredient from './mocks/mockByIngredient';
import SearchFilter from '../components/SearchBar';

describe('Testando componente Search Filter na rota meals.', () => {
  let user:UserEvent;
  let searchTopButton:HTMLButtonElement;
  let searchExecButton:HTMLButtonElement;
  let searchInput:HTMLInputElement;
  let filterIngredient:HTMLInputElement;
  let filterName:HTMLInputElement;
  let filterFirstLetter:HTMLInputElement;

  const renderInputs = () => {
    searchTopButton = screen.getByTestId('search-top-btn');
    searchInput = screen.getByTestId('search-input');
    filterIngredient = screen.getByTestId('ingredient-search-radio');
    filterName = screen.getByTestId('name-search-radio');
    filterFirstLetter = screen.getByTestId('first-letter-search-radio');
    searchExecButton = screen.getByTestId('exec-search-btn');
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    user = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: '/meals' },
    ).user;

    await user.click(screen.getByTestId('search-top-btn'));

    renderInputs();
  });

  test('Verificando se o Search Filter renderiza na tela.', async () => {
    expect(searchInput).toBeInTheDocument();
    expect(filterIngredient).toBeInTheDocument();
    expect(filterName).toBeInTheDocument();
    expect(filterFirstLetter).toBeInTheDocument();
  });

  test('Verifica a busca por ingredientes em Meals.', async () => {
    const MOCK_RESPONSE = {
      json: async () => mockMealsByIngredient,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);

    await user.type(searchInput, 'chicken');
    await user.click(filterIngredient);
    await user.click(searchExecButton);

    const chickenMeals = await screen.findAllByTestId(/card-name/i);
    expect(chickenMeals).toHaveLength(9);
  });

  test('Verificando se exibir um alerta, quando possuir mais de um caracter na busca.', async () => {
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});

    await user.type(searchInput, 'ch');
    await user.click(filterFirstLetter);
    await user.click(searchExecButton);

    expect(alert).toHaveBeenCalledWith('Your search must have only 1 (one) character');
  });

  test.skip('Verifica a busca por ingredientes em Meals, com o fetch null.', async () => {
    // Esse teste está duvidoso
    vi.clearAllMocks();
    const mockNullMeals = {
      meals: null,
    };

    const MOCK_RESPONSE = {
      json: async () => mockNullMeals,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);

    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});

    await user.type(searchInput, 'jabuticaba');
    await user.click(filterIngredient);
    await user.click(searchExecButton);
    // "Sorry, we haven't found any recipes for these filters."
    expect(alert).toHaveBeenCalledWith("Sorry, we haven't found any recipes for these filters.");
    vi.clearAllMocks();
  });

  test('Verifica a busca por ingredientes em Meals, retorna um unico prato, e já entre direto na página de detalhes daquele prato.', async () => {
    await user.type(searchInput, 'Arrabiata');
    await user.click(filterName);

    await user.click(searchExecButton);

    await waitFor(async () => {
      expect(window.location.pathname).toBe('/meals/52771');
    });
  });
});
