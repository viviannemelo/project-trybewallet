const WALLET_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  const response = await fetch(WALLET_API);
  return response.json();
};

export default fetchCurrencies;
