import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
