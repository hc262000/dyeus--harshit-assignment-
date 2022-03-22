import React from "react";
import "../App.css";
import image from "../assets/page5.png";

export default function Body5() {
  return (
    <>
      <div className="page5">
        <div>
          <h1 className="products">Track your period</h1>
        </div>
        <div className="para3">
          Stay in the know with reliable AI-based and science-backed period,
          ovulation, and PMS predictions. The intuitive design makes tracking
          your cycle effortless and helps you stay on top of your monthly data.
        </div>
        <div className="flex items-baseline justify-between">
          <button className="button3">Track you period on the app</button>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", marginBottom: "0" }}
          src={image}
          alt="page5"
        />
      </div>
    </>
  );
}
