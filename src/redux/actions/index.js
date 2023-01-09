export const EMAIL_USER = 'EMAIL_USER';
// export const WALLET_ACTION = 'WALLET_ACTION';
// export const ADD_EXPENSES = 'ADD_EXPENSES';

export const userAction = (email) => ({
  type: EMAIL_USER,
  payload: email,
});
