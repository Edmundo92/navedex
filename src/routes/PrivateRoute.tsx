import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { storage } from "../helpers/storage";

type PrivateRouteProps = {
  path?: string | string[];
  exact?: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={(props: any) =>
      storage.isAuthenticated() ? (
        children
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
