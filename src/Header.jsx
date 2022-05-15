import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import { AccessTime } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { HelpRounded } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user, profileURL }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt={user} src={profileURL} />
        <AccessTime />
      </div>
      <div className="header_search">
        <Search />
        <input type="text" placeholder="Enter text" />
      </div>
      <div className="header_right">
        <HelpRounded />
      </div>
    </div>
  );
};

export default Header;
