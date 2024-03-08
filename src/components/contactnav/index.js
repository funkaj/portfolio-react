import React, { Component } from "react";
import MyIcon from "../icon/icons";
import { linkData } from "../data/links";
import "./styles.css";

// Side nav to Github, linkedin, and email
class Contact extends Component {
  state = { linkData };
  render() {
    return (
      <div id="icon-container">
        <MyIcon linkData={this.state.linkData[0]}></MyIcon>
        <MyIcon linkData={this.state.linkData[1]} />
        <MyIcon linkData={this.state.linkData[2]} target="_top" />
        <MyIcon linkData={this.state.linkData[3]} />
      </div>
    );
  }
}

export default Contact;
