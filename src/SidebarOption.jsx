import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "./firebase";

const SidebarOption = (props) => {
  const { Icon, title, id, addChannelOption } = props;
  const navigate = useNavigate();

  const selectChannel = () => {
    console.log(`${id} - ${title}`);
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate(`/room/${title}`);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter a channel name : ");
    if (channelName) {
      db.collection("rooms")
        .add({
          name: channelName,
        })
        .then(() => {
          console.log(`data inserted successfully`);
        })
        .catch((err) => {
          console.log(`error is ${err}`);
        });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">
            # {title}
          </span>
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
