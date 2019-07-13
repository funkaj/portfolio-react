import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Main from "./components/pages/main";
import Gallery from "./components/pages/gallery";
import Illustration from "./components/pages/Illustration";
import WebDev from "./components/pages/web-development";
import NotFound from "./components/pages/404";
import * as serviceWorker from "./serviceWorker";

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/web-development/",
    component: WebDev
  },
  {
    path: "/gallery/",
    component: Gallery,
    routes: [
      {
        path: "/gallery/illustration/",
        component: Illustration
      },
      {
        path: "/gallery/web-development/",
        component: WebDev
      }
    ]
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routing = (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      {/* <Route exact path="/" component={Main} />
      <Route path="/gallery/" component={Gallery} />
      <Route path="/illustration/" component={Illustration} />
      <Route path="/web-development/" component={WebDev} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

console.log("routing");
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
