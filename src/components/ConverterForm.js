import React from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import SymbolPicker from './SymbolPicker';

class ConverterForm extends React.Component {
  state = {
    calendarFocused: false
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    const {
      date,
      symbols,
      convertFromAmount,
      convertToAmount,
      convertFromSymbol,
      convertToSymbol,
      handleConvertFromAmountChange,
      handleConvertFromSymbolChange,
      handleConvertToSymbolChange,
      handleOnDateChange,
      handleSwitchCurrency
    } = this.props;

    return (
      <form>
        <div>
          <input type="number" value={convertFromAmount} onChange={handleConvertFromAmountChange} />
          <SymbolPicker selected={convertFromSymbol} symbols={symbols} onChange={handleConvertFromSymbolChange} />
        </div>
        <div>
          <input value={convertToAmount} readOnly />
          <SymbolPicker selected={convertToSymbol} symbols={symbols} onChange={handleConvertToSymbolChange} />
        </div>
        <button onClick={handleSwitchCurrency}>Reverse</button>
        <SingleDatePicker
          date={date}
          onDateChange={handleOnDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        />
      </form>
    );
  }
}

export default ConverterForm;
