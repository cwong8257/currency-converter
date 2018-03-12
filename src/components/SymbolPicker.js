import React from 'react';

const SymbolPicker = ({ symbols, selected, onChange }) => {
  return (
    <select value={selected} onChange={onChange}>
      {symbols.map(({ symbol, name }) => (
        <option key={symbol} value={symbol}>
          {symbol}
        </option>
      ))}
    </select>
  );
};

export default SymbolPicker;
