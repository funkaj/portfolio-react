import React, { Component } from "react";
import { linkData } from "../../data/links";
import Grid from "@material-ui/core/Grid";
import Contact from "../../contactnav";
import Footer from "../../footer";
import PrimarySearchAppBar from "../../nav";
import background from "./images/ninja1.png";
import "./styles.css";

// Shell layout for all pages
class Layout extends Component {
  // Create state for links to github, linkedin, email
  state = { linkData };

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <PrimarySearchAppBar handleSwitch={this.props.handleSwitch} />
          </Grid>
          <Grid item xs={12}>
            <Contact linkData={this.state.linkData} />
          </Grid>
          <Grid item xs={12}>
            <Footer
              handleLink={this.handleLink}
              linkData={this.state.linkData}
              value={this.state.value}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
