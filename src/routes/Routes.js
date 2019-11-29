import React from 'react';
import Login from '../components/Login';
import { Switch, Route, withRouter } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';
import DashboardRoutes from './DashboardRoutes';
import QuestionsContainer from '../containers/QuestionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import UserContainerHook from '../containers/UserContainerHooks';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <DashboardRoutes exact path="/users" token={true} component={UserContainerHook  } />
      <DashboardRoutes exact path="/questions" token={true} component={QuestionsContainer} />
      <DashboardRoutes exact path="/categories" token={true} component={CategoriesContainer} />
    </Switch>
  );
}

export default withRouter(Routes);
