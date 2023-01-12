import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';

describe('Wallet page tests', () => {
  it('If contains all the elements', () => {
    renderWithRouterAndRedux(<App />);

    const emailInsertion = screen.getByTestId(EMAIL_INPUT);
    const passwordInsertion = screen.getByTestId(PASSWORD_INPUT);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInsertion, 'example@example.com');
    userEvent.type(passwordInsertion, '123456');
    userEvent.click(loginButton);

    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');
    const valueInput = screen.getByTestId('value-input');
    const descripionInput = screen.getByTestId('description-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');

    expect(emailField.textContent).toBe('example@example.com');
    expect(totalField.textContent).toBe('0.00');
    expect(currencyField.textContent).toBe('BRL');
    expect(valueInput).toBeInTheDocument();
    expect(descripionInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });
});
