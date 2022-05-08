import { FiberManualRecord } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import db from "./firebase";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
    return () => {};
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Agastya Rajawat</h2>
          <h3>
            <FiberManualRecord />
            Krishna
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <SidebarOption title="youtube" />
      <SidebarOption Icon={KeyboardArrowUpIcon} title="Show less" />

      <hr />
      <SidebarOption Icon={KeyboardArrowDownIcon} title="Channel" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />

      {channels.map((channel) => {
        <SidebarOption title={channel.name} Icon={AddIcon} />;
      })}
    </div>
  );
};

export default Sidebar;
