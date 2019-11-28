import React from 'react';
import Login from '../components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';
import DashboardRoutes from './DashboardRoutes';
import QuestionsContainer from '../containers/QuestionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

function Routes() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <DashboardRoutes exact path="/users" token={true} component={UsersContainer} />
          <DashboardRoutes exact path="/questions" token={true} component={QuestionsContainer} />
          <DashboardRoutes exact path="/categories" token={true} component={CategoriesContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
