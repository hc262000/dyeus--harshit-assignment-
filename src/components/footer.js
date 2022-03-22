import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="socialmedia">
          <FacebookIcon
            style={{ fontSize: "40", color: "#E9F4FF", marginRight: "8" }}
          />
          <TwitterIcon
            style={{ fontSize: "40", color: "#E9F4FF", marginRight: "15" }}
          />
        </div>
        <div className="items">
          <span className="item">
            <a href="/">Products</a>
            <ArrowForwardIosIcon
              style={{
                fontSize: "15",
                marginTop: "7",
              }}
            />
          </span>
          <span className="item">
            <a href="/">Our Science</a>
            <ArrowForwardIosIcon
              style={{
                fontSize: "15",
                marginTop: "7",
              }}
            />
          </span>
          <span className="item">
            <a href="/">Vision & Mission</a>
            <ArrowForwardIosIcon
              style={{
                fontSize: "15",
                marginTop: "7",
              }}
            />
          </span>
          <span className="item">
            <a href="/">About Us</a>
            <ArrowForwardIosIcon
              style={{
                fontSize: "15",
                marginTop: "7",
              }}
            />
          </span>
        </div>
        <div className="line" style={{ border: " 1px solid white" }}></div>
        <p className="newsletter">Subscribe to our Newsletter</p>
        <form className="form">
          <div className="formbox">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
            />
          </div>
          <Button
            style={{
              background: "#D6F4FB",
              border: "1.2782px solid #E9F4FF",
              boxSizing: " border-box",
              borderRadius: "17.2556px",
              color: "black",
              marginBottom: "2",
              height: "27.48px",
              marginLeft: "10",
            }}
            type="submit"
            variant="contained"
            startIcon={<EmailOutlinedIcon />}
          >
            Activate
          </Button>
        </form>
      </div>
    </>
  );
}
