export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (email) => ({
  type: EMAIL_USER,
  payload: email,
});

export const walletAction = (currencies) => ({
  type: WALLET_ACTION,
  payload: currencies,
});
