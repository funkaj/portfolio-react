import React from "react";
import MyIcon from "../icon/icons";
import "./styles.css";

export default function contact(props) {
  return (
    <div id="icon-container">
      <MyIcon linkData={props.linkData[0]} />
      <MyIcon linkData={props.linkData[1]} />
      <MyIcon linkData={props.linkData[2]} target="_top" />
    </div>
  );
}
