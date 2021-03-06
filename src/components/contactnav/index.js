import React from "react";
import MyIcon from "../icon/icons";
import "./styles.css";

// Side nav to Github, linkedin, and email
export default function contact(props) {
  return (
    <div id="icon-container">
      <MyIcon linkData={props.linkData[0]}></MyIcon>
      <MyIcon linkData={props.linkData[1]} />
      <MyIcon linkData={props.linkData[2]} target="_top" />
      <MyIcon linkData={props.linkData[3]} />
    </div>
  );
}
