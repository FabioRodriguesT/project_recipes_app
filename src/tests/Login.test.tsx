import React, { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import App from '../App';
import RecipeProvider from '../context/recipeProvider';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testando a página de Login', () => {
  let emailInput:HTMLInputElement;
  let passwordInput:HTMLInputElement;
  let loginButton:HTMLButtonElement;
  let user:UserEvent;

  const renderInputs = () => {
    emailInput = screen.getByTestId('email-input');
    passwordInput = screen.getByTestId('password-input');
    loginButton = screen.getByTestId('login-submit-btn');
  };

  beforeEach(() => {
    vi.clearAllMocks();

    user = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
      { route: '/' },
    ).user;

    renderInputs();
  });

  test('Testa se os elementos estão renderizados na tela', () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('Testa o disable/enable do element button', async () => {
    const email = 'jabuticaba@email.com';
    const password = '1234567';

    expect(loginButton).toBeDisabled();

    await user.type(emailInput, email);
    await user.type(passwordInput, password);

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);

    expect(loginButton).toBeEnabled();
  });

  test('Testando o localStorage e se navega para a página meals', async () => {
    const email = 'jabuticaba@email.com';
    const password = '1234567';

    await user.type(emailInput, email);
    await user.type(passwordInput, password);

    await user.click(loginButton);

    const getEmail = () => JSON.parse(localStorage.getItem('user') || 'Email not Found');

    expect(window.location.pathname).toBe('/meals');
    expect(getEmail().email).toEqual(email);
  });
});
