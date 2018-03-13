import React from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/fontawesome-free-solid';
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
      <div className="content-container">
        <form className="form--actions">
          <span>From</span>
          <div className="input-group">
            <div className="input-group__item">
              <input
                className="text-input"
                type="number"
                value={convertFromAmount}
                onChange={handleConvertFromAmountChange}
              />
            </div>
            <div className="input-group__item">
              <SymbolPicker selected={convertFromSymbol} symbols={symbols} onChange={handleConvertFromSymbolChange} />
            </div>
          </div>
          <button className="button" onClick={handleSwitchCurrency}>
            <FontAwesomeIcon icon="exchange-alt" size="lg" transform={{ rotate: 90 }} />
          </button>
          <span>To</span>
          <div className="input-group">
            <div className="input-group__item">
              <input className="text-input" value={convertToAmount} readOnly />
            </div>
            <div className="input-group__item">
              <SymbolPicker selected={convertToSymbol} symbols={symbols} onChange={handleConvertToSymbolChange} />
            </div>
          </div>
          <span>Date</span>
          <SingleDatePicker
            date={date}
            onDateChange={handleOnDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
            numberOfMonths={1}
            block={true}
          />
        </form>
      </div>
    );
  }
}

export default ConverterForm;
