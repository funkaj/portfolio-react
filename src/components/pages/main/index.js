import React, { Component } from "react";
import ImageLoader from "../../animation/imageloader";
// import Layout from "../layout";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";
import "./styles.css";

// Splash page component
class Splash extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adam Funk Art</title>
          <meta
            name="keywords"
            content="adam, funk, art, illustration, frontend, web development, magento, magento 2, react, nodejs"
          />
          <meta
            name="description"
            content="Web develoment and illustration by Adam Funk."
          />
        </Helmet>
        {/* <Layout /> */}
        <div id="mainImg">
          <LazyLoad>
            <ImageLoader
              src={process.env.PUBLIC_URL + "/images/jpg/ninja1.jpg"}
              alt="Illustration of Ninja by Adam Funk"
            />
          </LazyLoad>
          <div id="brand">
            <div className="name">Adam</div>
            <div className="name">Funk</div>
            <div className="title">Illustrator / Web Development</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
