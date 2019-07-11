import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

import Main from "./components/pages/main";

import Illustration from "./components/pages/Illustration";
import WebDev from "./components/pages/web-development";
import NotFound from "./components/pages/404";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/illustration/" component={Illustration} />
      <Route path="/web-development/" component={WebDev} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

console.log("routing");
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
