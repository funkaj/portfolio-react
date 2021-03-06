import React, { Component } from "react";
import ImageLoader from "../../animation/imageloader";
import Layout from "../layout";
import LazyLoad from "react-lazy-load";
import "./styles.css";

// Splash page component
class Splash extends Component {
  render() {
    return (
      <div>
        <Layout />
        <div id="mainImg">
          <LazyLoad>
            <ImageLoader
              src="images/jpg/ninja1.jpg"
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
