import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our Newslettes and stay updated</p>
      <div className="but-NewsLetter">
        <input type="email" placeholder="your Email id " />
        <button className="NewsLetter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
