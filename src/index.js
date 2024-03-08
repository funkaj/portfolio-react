import React from "react";
// import useState from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AppBar from "./components/nav";
import Contact from "./components/contactnav";
import Footer from "./components/footer";
import Gallery from "./components/pages/gallery";
import Illustration from "./components/pages/illustrations";
import Main from "./components/pages/main";
import ContactPage from "./components/pages/contact";
import NotFound from "./components/pages/404";
import "./index.css";

const routing = (
  // HashRouter to ensure correct routing with gh-pages
  <HashRouter basename="/">
    <AppBar />
    <Contact />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/index" component={Main} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/gallery/illustration" component={Illustration} />
      <Route path="/gallery/web-development" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// serviceWorker.register();
