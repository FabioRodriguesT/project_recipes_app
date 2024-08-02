import React, { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import App from '../App';
import RecipeProvider from '../context/recipeProvider';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testando o compoenent Header', () => {
  let profileIcon:HTMLImageElement;
  let searchIcon:HTMLImageElement;
  let searchInput:HTMLInputElement;
  let user:UserEvent;

  const renderHtmlTags = () => {
    profileIcon = screen.getByTestId('profile-top-btn');
    searchIcon = screen.getByTestId('search-top-btn');
  };

  beforeEach(() => {
    vi.clearAllMocks();

    user = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: '/meals' },
    ).user;

    renderHtmlTags();
  });

  test('Testa se os icone de profile leva para a página de profile', async () => {
    expect(profileIcon).toBeInTheDocument();
    expect(window.location.href).toEqual('http://localhost:3000/meals');
    await user.click(profileIcon);
    expect(window.location.href).toEqual('http://localhost:3000/profile');
  });

  test('Testa se os icone de profile leva para a página de profile', async () => {
    expect(searchIcon).toBeInTheDocument();
    await user.click(searchIcon);
    searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    await user.click(searchIcon);
    expect(searchInput).not.toBeInTheDocument();
  });

  // test('Testa o disable/enable do element button', async () => {
  //   const email = 'jabuticaba@email.com';
  //   const password = '1234567';

  //   expect(loginButton).toBeDisabled();

  //   await user.type(emailInput, email);
  //   await user.type(passwordInput, password);

  //   expect(emailInput).toHaveValue(email);
  //   expect(passwordInput).toHaveValue(password);

  //   expect(loginButton).toBeEnabled();
  // });

  // test('Testando o localStorage e se navega para a página meals', async () => {
  //   const email = 'jabuticaba@email.com';
  //   const password = '1234567';

  //   await user.type(emailInput, email);
  //   await user.type(passwordInput, password);

  //   await user.click(loginButton);

  //   const getEmail = () => JSON.parse(localStorage.getItem('user') || 'Email not Found');

  //   expect(window.location.pathname).toBe('/meals');
  //   expect(getEmail().email).toEqual(email);
  // });
});
