import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import DashboardWrapper from "../components/wrappers/DashboardWrapper";

const DashboardRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps =>
        token ? (
          <DashboardWrapper path={rest.path}>
            <Component {...matchProps} />
          </DashboardWrapper>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: matchProps.location }
            }}
          />
        )
      }
    />
  );
};

export default withRouter(DashboardRoute);