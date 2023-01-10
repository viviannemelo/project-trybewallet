import fetchCurrencies from '../../services/walletApi';

export const EMAIL_USER = 'EMAIL_USER';
export const CURRENCIES = 'CURRENCIES';

export const userAction = (email) => ({
  type: EMAIL_USER,
  payload: email,
});

export const getCurrencies = () => async (dispatch) => {
  try {
    const response = await fetchCurrencies();
    const currencies = Object.keys(response);
    currencies.splice(currencies.indexOf('USDT'), 1);

    dispatch({
      type: CURRENCIES,
      payload: currencies,
    });
  } catch (error) {
    dispatch();
  }
};
