import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./templates";

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"(/)?"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
