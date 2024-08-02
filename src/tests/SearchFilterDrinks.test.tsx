import React, { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import App from '../App';
import RecipeProvider from '../context/recipeProvider';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testando o search Filter na rota drinks', () => {
  let userDrinks:UserEvent;

  beforeEach(() => {
    vi.clearAllMocks();

    userDrinks = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: '/drinks' },
    ).user;
  });

  test('Verifica a busca por ingredientes em Meals, retorna um unico prato, e já entre direto na página de detalhes daquele prato.', async () => {
    const searchButton = screen.getByTestId('search-top-btn');
    expect(searchButton).toBeInTheDocument();

    await userDrinks.click(searchButton);

    const searchInput = screen.getByTestId('search-input');
    const filterIngredient = screen.getByTestId('name-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');

    await userDrinks.type(searchInput, 'Aquamarine');
    await userDrinks.click(filterIngredient);
    await userDrinks.click(buttonSearch);

    await waitFor(async () => {
      expect(window.location.pathname).toBe('/drinks/178319');
    });
  });
});
