import React, { Component } from "react";
import Animation from "../../animation/stripes";
import AdvancedGridList from "../../grid";
import Layout from "../layout";
import "./styles.css";
import { illustrationData } from "../../data/illustrationData";
import { devData } from "../../data/devData";

// Layout for all components

class Gallery extends Component {
  state = {
    images: "",
    pageLink: "",
    hasWebP: false,
    load: false,
    data: "",
    value: 0,
    title: ""
  };
  componentDidMount() {
    const state = this.state;

    // to see if feature is availible in browser
    // eslint-disable-next-line no-unused-vars
    function checkImg() {
      let img = new Image();
      img.onload = function() {
        state.hasWebP = true;
      };
      img.onerror = function() {
        state.hasWebP = false;
      };
      img.src = "http://www.gstatic.com/webp/gallery/1.webp";
    }
    checkImg();

    function getRoute(e) {
      if (e === "/gallery/illustration") {
        state.load = false;
        state.data = illustrationData;
        state.pageLink = "illustration";
        state.title = "Illustration";
      } else if (e === "/gallery/web-development") {
        state.load = true;
        state.data = devData;
        state.pageLink = "web-development";
        state.title = "Web Development";
      }
    }
    getRoute(window.location.pathname);
  }

  handleLink = (event, value) => {
    this.setState({ value });
  };

  getRoute = e => {
    let route = window.location.pathname;
    if (route === "/gallery/illustration") {
      this.setState({ load: false });
      this.setState({ data: illustrationData });
      this.setState({ pageLink: "illustration" });
      this.setState({ title: "Illustration" });
    }
    if (route === "/gallery/web-development") {
      this.setState({ load: true });
      this.setState({ data: devData });
      this.setState({ pageLink: "web-development" });
      this.setState({ title: "Web Development" });
    }
  };
  // Component to build out the grid for the gallery

  render() {
    return (
      <div>
        <Layout getRoute={this.getRoute} />
        <div id="wrapper">
          <AdvancedGridList
            hasWebP={this.state.hasWebP}
            tileData={this.state}
            load={this.state.load}
            linkData={this.state.linkData}
          />
          <Animation />
        </div>
      </div>
    );
  }
}

export default Gallery;
