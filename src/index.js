import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch } from "react-router-dom";
import "./index.css";
import Main from "./components/pages/main";
import Gallery from "./components/pages/gallery";
import NotFound from "./components/pages/404";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <HashRouter basenam="/">
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
