import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import Layout from "../layout";
import "./styles.css";
import { Helmet } from "react-helmet";

// Custom 404 page
class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adam Funk Art: 404</title>
          <meta
            name="keywords"
            content="adam, funk, frontend, illustration, art, contact, web development, magento, magento 2, react, nodejs, 404"
          />
          <meta
            name="description"
            content="Oops... lets get you back on track."
          />
        </Helmet>
        {/* <Layout /> */}
        <div class="FoFWrapper">
          <div id="FourOFour">
            <p>404</p>
            <p id="FoFText">Sorry we can't find that page.</p>
            <NavLink id="return-button" to="/">
              Return Home
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
