import React from 'react';

const ConverterTitle = ({ convertFrom, convertTo }) => {
  return (
    <div>
      <p>
        {convertFrom.symbol} to {convertTo.symbol} Conversion
      </p>
      <p>
        ({convertFrom.name} to {convertTo.name})
      </p>
    </div>
  );
};

export default ConverterTitle;
