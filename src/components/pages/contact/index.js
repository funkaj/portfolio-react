import React, { Component } from "react";
import "./styles.css";
import { Helmet } from "react-helmet";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adam Funk Art: Contact</title>
          <meta
            name="keywords"
            content="adam, funk, frontend, illustration, art, contact, web development, magento, magento 2, react, nodejs"
          />
          <meta name="description" content="Contact Adam Funk." />
          <meta name="robots" content="NOFOLLOW/NOINDEX" />
        </Helmet>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
        </form>
      </div>
    );
  }
}

export default ContactPage;
