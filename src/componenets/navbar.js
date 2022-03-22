import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <MenuIcon
            style={{ fontSize: "2rem", marginLeft: "8", marginTop: "3" }}
          />
        </div>
        <div className="right">
          <ShoppingCartOutlinedIcon
            style={{ fontSize: "2rem", marginRight: "8", marginTop: "3" }}
          />
          <NotificationsNoneOutlinedIcon
            style={{
              fontSize: "2rem",
              marginLeft: "4",
              marginRight: "4",
              marginTop: "3",
            }}
          />
        </div>
      </div>
    </>
  );
}
