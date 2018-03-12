import React from 'react';

const ConverterResultList = ({ selectedRate, rates }) => {
  return (
    <div>
      {rates.map(({ symbol, amount }) => (
        <div key={symbol}>
          {symbol} - {amount}
        </div>
      ))}
    </div>
  );
};

export default ConverterResultList;
