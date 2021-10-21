import React from "react";
import { Route, useHistory, useLocation } from "react-router";
import { GlobalNav } from "./Components/GlobalNav/GlobalNav";

import './global.css';

// the place where global nav lives, and themes are aplenty.
export const PageRoute = ({ component: Component, changeTheme, ...rest }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Route {...rest}>
      <div className="wrapper">
        <GlobalNav changeTheme={changeTheme} />
        <Component location={location} history={history} />
      </div>
    </Route>
  );
};
