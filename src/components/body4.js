import React from "react";
import "../App.css";
import image1 from "../assets/Rectangle 194.jpg";
import image2 from "../assets/Rectangle 197.png";
import image3 from "../assets/Rectangle 198.png";
import image4 from "../assets/Rectangle 193.png";

export default function Body4() {
  return (
    <>
      <div className="page4">
        <div>
          <h1 className="products">Track your mood</h1>
        </div>
        <div>
          <p className="para3">
            All days and all moods are not made equal. But we can only improve
            what we measure. Track your mood and vitals (including skin and hair
            health) so you can take better care of yourself every day.
          </p>
        </div>
        <div className="flex items-baseline justify-between">
          <button className="button1">Track you mood on the app</button>
        </div>
        <div className="Image">
          <div className="image">
            <img
              className="img"
              style={{ width: "100%", marginBottom: "0" }}
              src={image1}
              alt="girl1"
            />
            <img
              className="img"
              style={{ width: "100%", marginBottom: "0" }}
              src={image2}
              alt="girl2"
            />
          </div>
          <div className="image">
            <img
              className="img"
              style={{ width: "100%", marginBottom: "0" }}
              src={image3}
              alt="girl3"
            />
            <img
              className="img"
              style={{ width: "100%", marginBottom: "0" }}
              src={image4}
              alt="girl4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
