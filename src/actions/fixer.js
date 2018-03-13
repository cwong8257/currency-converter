const key = process.env.FIXER_API_KEY;

export const getSymbols = () => {
  return fetch(`http://data.fixer.io/api/symbols?access_key=${key}`).then(response => {
    return response.json();
  });
};

export const getRates = date => {
  return fetch(`http://data.fixer.io/api/${date}?access_key=${key}`).then(response => {
    return response.json();
  });
};
