import React from "react";
import "../App.css";
import image from "../assets/page3.png";

export default function Body3() {
  return (
    <>
      <div className="page3">
        <div>
          <h1 className="liberate">Liberate your everyday wellness</h1>
        </div>
        <div>
          <h2 className="products">Shop our self-care products</h2>
        </div>
        <div>
          <p className="para3">
            Gentle formulations thoughtfully engineered by specialist
            researchers and doctors to simplify your self-care and get results
            fast. And, we always list our ingredients - so what you see is what
            you get.
          </p>
        </div>
        <div className="flex items-baseline justify-between Center">
          <button className="button2">Upgrade your self core</button>
        </div>
        <div>
          <h2 className="comment">#NoNasties, we promise!</h2>
        </div>
        <div>
          <img
            style={{ width: "100%", marginBottom: "0" }}
            src={image}
            alt="page3"
          />
        </div>
      </div>
    </>
  );
}
