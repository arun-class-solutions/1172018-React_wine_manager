import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import WineList from "./WineList";

import "./style.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/wines" component={WineList} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
