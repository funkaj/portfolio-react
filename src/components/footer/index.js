import React, { Component } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { linkData } from "../data/links";
import MyIcon from "../icon/icons";
import "./styles.css";

// Declaring styles varible for Material UI classes varible
const styles = {};

class Footer extends Component {
  state = { linkData };

  render() {
    return (
      <div>
        <BottomNavigation
          id="bottom-mobile-nav"
          value={this.state.value}
          onChange={this.handleLink}
          showLabels
          // className={classes.root}
        >
          <BottomNavigationAction
            label="Github"
            icon={
              <MyIcon id="bottomGithub" linkData={this.state.linkData[0]} />
            }
          />
          <BottomNavigationAction
            label="LinkedIn"
            icon={
              <MyIcon id="bottomLinkedIn" linkData={this.state.linkData[1]} />
            }
          />
          <BottomNavigationAction
            component={Link}
            to={this.state.linkData[2].link}
            label="Email"
            id="bottomContact"
            icon={
              <MyIcon id="bottomContact" linkData={this.state.linkData[2]} />
            }
          />
          <BottomNavigationAction
            label="Resume"
            icon={
              <MyIcon id="bottomResume" linkData={this.state.linkData[3]}>
                <span className="icon-title">Resume</span>
              </MyIcon>
            }
          />
        </BottomNavigation>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
