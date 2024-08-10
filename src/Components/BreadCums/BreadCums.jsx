import React from "react";
import arrow_icon from "../../Assets/breadcrum_arrow.png";
import "./BreadCums.css";
const BreadCums = (props) => {
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" />
      {props.product.category}
      <img src={arrow_icon} alt="" />
      {props.product.name}
    </div>
  );
};

export default BreadCums;
