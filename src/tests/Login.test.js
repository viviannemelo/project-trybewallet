import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const emailUser = 'email-input';
const passwordUser = 'password-input';

describe('Login page tests', () => {
  it('If have Login input and button', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.findByTestId(emailUser);
    const passwordInput = screen.findByTestId(passwordUser);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it('If button is valid', () => {
    renderWithRouterAndRedux(<App />);

    const loginButton = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.findByTestId(emailUser);
    const passwordInput = screen.findByTestId(passwordUser);

    const regexEmail = /\S+@\S+\.\S+/;
    const minLengthPassword = 5;
    const validateEmail = emailInput.match(regexEmail);
    const validatePassword = passwordInput.length > minLengthPassword;
    const validateInput = validateEmail && validatePassword;

    expect(loginButton).toBeDisabled();
    if (validateInput) {
      expect(loginButton).not.toBeDisabled();
    }
  });
  it('Login button render Wallet page', () => {
    const loginButton = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(loginButton);
    const { history } = renderWithRouterAndRedux();

    expect(history.location.pathname).toBe('/carteira');
  });
});
