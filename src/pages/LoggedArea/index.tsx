import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import Home from "../Home";
import Form from "../Form";

const LoggedArea = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/home">
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

export default LoggedArea;
