import React from "react";
import IconButton from "@material-ui/core/IconButton";

// icon component
function MyIcon(props) {
  const link = props.linkData;

  return (
    <div>
      <IconButton className="link-btn" href={link.link} target="blank">
        <i className={`${link.icon} ${link.name}`} />
      </IconButton>
    </div>
  );
}

export default MyIcon;
