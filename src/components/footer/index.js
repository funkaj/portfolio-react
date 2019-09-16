import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import MyIcon from "../icon/icons";
import "./styles.css";

// Declaring styles varible for Material UI classes varible
const styles = {};

function Footer(props) {
  const { classes } = props;
  const value = props.value;

  return (
    <BottomNavigation
      id="bottom-mobile-nav"
      value={value}
      onChange={props.handleLink}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Github"
        icon={<MyIcon id="bottomGithub" linkData={props.linkData[0]} />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<MyIcon id="bottomLinkedIn" linkData={props.linkData[1]} />}
      />
      <BottomNavigationAction
        label="Email"
        id="bottomContact"
        icon={
          <MyIcon
            id="bottomContact"
            linkData={props.linkData[2]}
            target="_top"
          />
        }
      />
      <BottomNavigationAction
        label="Resume"
        icon={
          <MyIcon id="bottomResume" linkData={props.linkData[3]}>
            <span className="icon-title">Resume</span>
          </MyIcon>
        }
      />
    </BottomNavigation>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
