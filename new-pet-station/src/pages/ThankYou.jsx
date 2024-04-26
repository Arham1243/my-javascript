import React, { useState } from "react";

const ThankYou = () => {
  return (
    <div className="page-content page-content--thankyou">
      <div className="section-content text-center">
        <lord-icon
          src="https://cdn.lordicon.com/lomfljuq.json"
          trigger="loop"
          delay="1000"
          state="morph-check-in-1"
          style={{ width: "100px", height: "100px" }}
        ></lord-icon>
        <div className="heading">Thank you for your request!</div>
      </div>
    </div>
  );
};

export default ThankYou;
