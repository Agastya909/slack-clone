import React from "react";
import "./SidebarOption.css";
// import InsertCommentIcon from "@mui/icons-material/InsertComment";

const SidebarOption = (props) => {
  const { Icon, title } = props;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash"># {title}</span>
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
