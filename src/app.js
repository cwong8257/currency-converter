import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import 'react-dates/initialize';
import 'react-select/dist/react-select.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LandingPage from './components/LandingPage';

ReactDOM.render(<LandingPage />, document.getElementById('app'));
