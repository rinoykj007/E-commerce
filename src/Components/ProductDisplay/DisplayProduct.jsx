import React from "react";
import "./DisplayProduct.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";

export default function DisplayProduct(props) {
  return (
    <div>
      <div className="productDisplay">
        <div className="productDisplay-left">
          <div className="productDisplay-img-list">
            <img src={props.product.image} alt="" />
            <img src={props.product.image} alt="" />
            <img src={props.product.image} alt="" />
            <img src={props.product.image} alt="" />
          </div>
          <div className="productDisplay-img">
            <img
              className="productDisplay-main-img"
              src={props.product.image}
              alt=""
            />
          </div>
        </div>
        <div className="productDisplay-right">
          <h1>{props.product.name}</h1>
          <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="Display-right-price">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              <div className="classDisplay-right-price-old">
                ${props.product.old_price}
              </div>
              <div
                className="classDisplay-right-price-right"
                style={{ color: "red" }}
              >
                ${props.product.new_price}
              </div>
            </div>
            <div className="productDisplay-right-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              molestiae iure id quod, repellat nihil! Maiores facere vel alias.
              Ipsam pariatur et praesentium. Error, doloribus voluptates.
              Deserunt tempora est quidem.
            </div>
            <div className="productDisplay-size">
              <div>
                <h1>select Size</h1>
              </div>
              <div className="productDisplay-right-size">
                <div className="product-size">s</div>
                <div className="product-size">M</div>
                <div className="product-size">L</div>
                <div className="product-size">XL</div>
                <div className="product-size">XXL</div>
              </div>
            </div>
            <div className="productDisplay-Bottom">
              <p className="productDisplay-right-category">
                <span>category : {props.product.category}</span> T-Shirt, crop
                Top
              </p>
              <button>Add TO CART </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
