import React from 'react';

const ConverterTitle = ({ convertFrom, convertTo }) => {
  return (
    <div className="content-container">
      <h1 className="header__title">
        {convertFrom.symbol} to {convertTo.symbol} <span className="show-for-desktop">Conversion</span>
      </h1>
      <h2 className="header__sub-title">
        <span className="show-for-desktop">
          ({convertFrom.name} to {convertTo.name})
        </span>
      </h2>
    </div>
  );
};

export default ConverterTitle;
