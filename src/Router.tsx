import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./templates/Home";
import GlobalStyles from "./globalStyles/index";

// create route, combine path and component
const Router = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path={"(/)?"} component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
