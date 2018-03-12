import React from 'react';
import SymbolPicker from './SymbolPicker';

class ConverterForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input
            type="number"
            value={this.props.convertFromAmount}
            onChange={this.props.handleConvertFromAmountChange}
          />
          <SymbolPicker
            selected={this.props.convertFromSymbol}
            symbols={this.props.symbols}
            onChange={this.props.handleConvertFromSymbolChange}
          />
        </div>
        <div>
          <input value={this.props.convertToAmount} readOnly />
          <SymbolPicker
            selected={this.props.convertToSymbol}
            symbols={this.props.symbols}
            onChange={this.props.handleConvertToSymbolChange}
          />
        </div>
        <button onClick={this.props.handleSwitchCurrency}>Reverse</button>
      </form>
    );
  }
}

export default ConverterForm;
