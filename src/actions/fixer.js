const key = '16fd7f1da26d65c2055a00d53407d129';

export const getSymbols = () => {
  return fetch(`http://data.fixer.io/api/symbols?access_key=${key}`).then(response => {
    return response.json();
  });
};

export const getRates = () => {
  return fetch(`http://data.fixer.io/api/latest?access_key=${key}`).then(response => {
    return response.json();
  });
};
