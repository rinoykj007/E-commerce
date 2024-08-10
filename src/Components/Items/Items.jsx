import React from "react";
import "./Items.css";

function Items(props) {
  return (
    <div className="items">
      <img
        src={props.image}
        alt={props.name}
        className="item-image"
        style={{ width: props.width, height: props.height }}
      />
      <div className="para">
        <p style={{ width: props.p_width }}>{props.name}</p>
      </div>

      <div className="item-price">
        <div className="item-price-new">{props.new_price}</div>
      </div>
      {props.old_price && (
        <div className="items-price-old">{props.old_price}</div>
      )}
    </div>
  );
}

export default Items;
