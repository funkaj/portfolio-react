import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Main from "./components/pages/main";
import Gallery from "./components/pages/gallery";
import NotFound from "./components/pages/404";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Route exact path="/" component={Main} />
    <Route path="/gallery/illustration/" component={Gallery} />
    <Route path="/gallery/web-development/" component={Gallery} />
    <Route component={NotFound} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
