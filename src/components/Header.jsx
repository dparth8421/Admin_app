import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "rgba(25, 118, 210, 0.8)" }}>
      <Toolbar>
        <div style={{ flexGrow: 1, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "flex", alignItems: "center"}}>
            <SearchIcon style={{ marginRight: 8, }} />
            <InputBase
              placeholder="Search..."
              inputProps={{ style: { color: "white" } }}
            />
          </div>
        </div>
        <div>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
