import React from "react";
// import useState from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Gallery from "./components/pages/gallery";
import Main from "./components/pages/main";
import NotFound from "./components/pages/404";
import "./index.css";

const routing = (
  // HashRouter to ensure correct routing with gh-pages
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/index" component={Main} />
      <Route path="/gallery/illustration" component={Gallery} />
      <Route path="/gallery/web-development" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
