import React from 'react';

const ConverterTitle = ({ convertFrom, convertTo }) => {
  return (
    <div className="content-container">
      <h1 className="header__title">
        {convertFrom.symbol} to {convertTo.symbol} Conversion
      </h1>
      <h2 className="header__sub-title">
        ({convertFrom.name} to {convertTo.name})
      </h2>
    </div>
  );
};

export default ConverterTitle;
