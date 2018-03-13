import React from 'react';
import moment from 'moment';
import ConverterTitle from './ConverterTitle';
import ConverterForm from './ConverterForm';
import ConverterResultList from './ConverterResultList';
import { getSymbols, getRates } from '../actions/fixer';

class LandingPage extends React.Component {
  state = {
    convertFromAmount: 1,
    convertFromSymbol: 'USD',
    convertToSymbol: 'EUR',
    symbols: [],
    rates: [],
    date: moment()
  };

  handleConvertFromAmountChange = e => {
    const convertFromAmount = e.target.value;

    this.setState(() => ({
      convertFromAmount
    }));
  };

  handleConvertFromSymbolChange = selectedOption => {
    const convertFromSymbol = selectedOption.value;
    const rates = this.changeBaseRate(convertFromSymbol, this.state.rates);

    this.setState(() => ({
      convertFromSymbol,
      rates
    }));
  };

  handleConvertToSymbolChange = selectedOption => {
    const convertToSymbol = selectedOption.value;

    this.setState(() => ({
      convertToSymbol
    }));
  };

  handleSwitchCurrency = e => {
    e.preventDefault();

    const convertFromSymbol = this.state.convertToSymbol;
    const convertToSymbol = this.state.convertFromSymbol;
    const rates = this.changeBaseRate(convertFromSymbol, this.state.rates);

    this.setState(() => ({
      convertFromSymbol,
      convertToSymbol,
      rates
    }));
  };

  handleOnDateChange = date => {
    this.populateRates(date).then(() => {
      const newRates = this.changeBaseRate(this.state.convertFromSymbol, this.state.rates);

      this.setState(() => ({
        rates: newRates
      }));
    });
    this.setState({
      date
    });
  };

  populateSymbols = () => {
    return getSymbols().then(response => {
      const symbolsObject = response.symbols;
      const symbols = Object.keys(symbolsObject).map(symbol => ({
        symbol,
        name: symbolsObject[symbol]
      }));

      this.setState(() => ({
        symbols
      }));
    });
  };

  populateRates = date => {
    const formattedDate = date.format('Y-MM-DD');

    return getRates(formattedDate).then(response => {
      const ratesObject = response.rates;
      const rates = Object.keys(ratesObject).map(symbol => ({
        symbol,
        amount: ratesObject[symbol]
      }));

      this.setState(() => ({
        rates
      }));
    });
  };

  changeBaseRate = (baseSymbol, oldRates) => {
    const base = oldRates.find(({ symbol, amount }) => symbol === baseSymbol);
    // console.log(base);
    const newRates = oldRates.map(({ symbol, amount }) => ({
      symbol,
      amount: amount / base.amount
    }));
    return newRates;
  };

  calculateConvertToAmount = () => {
    const rate = this.state.rates.find(rate => rate.symbol === this.state.convertToSymbol);
    return this.state.convertFromAmount * rate.amount;
  };

  getSymbolObjectFromSymbol = lookupSymbol => {
    return this.state.symbols.find(symbol => symbol.symbol === lookupSymbol);
  };

  componentDidMount() {
    this.populateSymbols()
      .then(() => this.populateRates(moment()))
      .then(() => {
        const newRates = this.changeBaseRate(this.state.convertFromSymbol, this.state.rates);

        this.setState(() => ({
          rates: newRates
        }));
      });
  }

  render() {
    return (
      <div>
        {this.state.symbols.length > 0 &&
          this.state.rates.length > 0 && (
            <div>
              <div className="header">
                <ConverterTitle
                  convertFrom={this.getSymbolObjectFromSymbol(this.state.convertFromSymbol)}
                  convertTo={this.getSymbolObjectFromSymbol(this.state.convertToSymbol)}
                  convertFromAmount={this.state.convertFromAmount}
                  convertToAmount={this.calculateConvertToAmount()}
                />
              </div>
              <div className="form">
                <ConverterForm
                  date={this.state.date}
                  convertFromAmount={this.state.convertFromAmount}
                  convertToAmount={this.calculateConvertToAmount()}
                  convertFromSymbol={this.state.convertFromSymbol}
                  convertToSymbol={this.state.convertToSymbol}
                  handleConvertFromAmountChange={this.handleConvertFromAmountChange}
                  handleConvertFromSymbolChange={this.handleConvertFromSymbolChange}
                  handleConvertToSymbolChange={this.handleConvertToSymbolChange}
                  handleSwitchCurrency={this.handleSwitchCurrency}
                  handleOnDateChange={this.handleOnDateChange}
                  symbols={this.state.symbols}
                />
              </div>
            </div>
          )}
        {/*<ConverterResultList selectedRate={this.state.convertToSymbol} rates={this.state.rates} />*/}
      </div>
    );
  }
}

export default LandingPage;
