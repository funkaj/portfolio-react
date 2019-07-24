import React, { Component } from "react";
import { linkData } from "../../data/links";
import PrimarySearchAppBar from "../../nav";
import Contact from "../../contactnav";
import Footer from "../../footer";
import "./styles.css";
class Layout extends Component {
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
