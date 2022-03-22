import React from "react";
import "../App.css";
import image from "../assets/page6.png";

export default function Body6() {
  return (
    <>
      <div className="page6">
        <div>
          <h1 className="products">Consult with wellness experts</h1>
        </div>
        <div className="para3">
          Set up health consultations with experienced doctors and therapists on
          our app. Simply select a service, answer a few questions, and we’ll
          connect you to someone who is the right-fit for you.
        </div>
        <div className="flex items-baseline justify-between">
          <button className="button4">Get a consultation</button>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", marginBottom: "0" }}
          src={image}
          alt="page6"
        />
      </div>
    </>
  );
}
