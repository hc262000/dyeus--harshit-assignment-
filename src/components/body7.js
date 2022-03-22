import React from "react";
import "../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import image from "../assets/page7img.png";
export default function Body7() {
  return (
    <>
      <div className="page7">
        <div className="body-material">
          <h1 className="heading3">Get your personalized period box</h1>
          <img src={image} alt="" />

          <p className="paragraph">
            Tailor your monthly box of organic period products without the
            organic price tag (no pink taxing here). Get it delivered to your
            doorstep in sustainable packaging and track your subscription on our
            app.
          </p>

          <Button
            style={{
              fontFamily: "Poppins",
              background: "#000000",
              borderRadius: "27px",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "14px",
              marginRight: "30px",
              width: "fit-content",
            }}
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            Create your box on the app
          </Button>
        </div>
      </div>
    </>
  );
}
