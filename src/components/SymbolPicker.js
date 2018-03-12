import React from 'react';
import Select from 'react-select';

const SymbolPicker = ({ symbols, selected, onChange }) => {
  const options = symbols.map(({ symbol, name }) => ({ value: symbol, label: `${symbol} - ${name}` }));

  return <Select value={selected} onChange={onChange} options={options} clearable={false} />;
};

export default SymbolPicker;
