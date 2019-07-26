import React, { Component } from "react";
import { linkData } from "../../data/links";

import Contact from "../../contactnav";
import Footer from "../../footer";
import PrimarySearchAppBar from "../../nav";
import "./styles.css";

// Shell layout for all pages
class Layout extends Component {
  // Create state for links to github, linkedin, email
  state = { linkData };

  render() {
    return (
      <div>
        <PrimarySearchAppBar handleSwitch={this.props.handleSwitch} />
        <Contact linkData={this.state.linkData} />
        <Footer
          handleLink={this.handleLink}
          linkData={this.state.linkData}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Layout;
