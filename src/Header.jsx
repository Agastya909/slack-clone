import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import { AccessTime } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { HelpRounded } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="Agastya Rajawat" src="" />
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
