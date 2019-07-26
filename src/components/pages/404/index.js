import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../layout";
import "./styles.css";

// Custom 404 page
class NotFound extends Component {
  render() {
    return (
      <div>
        <Layout />
        <div class="FoFWrapper">
          <div id="FourOFour">
            <p>404</p>
            <p id="FoFText">Sorry we can't find that page.</p>

            <button id="return-button">
              <NavLink to="/">Return Home</NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
