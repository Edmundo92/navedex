import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Form from "./Form";

import PrivateRoute from "../routes/PrivateRoute";

const Root = () => {
  let location = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/naver/:id">
        <Form />
      </PrivateRoute>
      <PrivateRoute path="/naver">
        <Form />
      </PrivateRoute>
    </Switch>
  );
};

export default Root;
