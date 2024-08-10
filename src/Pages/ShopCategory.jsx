import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../Context/shopContext";
import Items from "../Items/Items";
import "./Css/shopCategory.css";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shopCategory">
      <img className="shopCategory_banner" src={banner} alt="" />
      <div className="shopeCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopCategory-short">
          sort by <img src={"/path_to_dropdown_icon"} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_product.map((item, index) => {
          if (category === item.category) {
            return (
              <Link key={index} to={`/category/${category}/product/${item.id}`}>
                <Items
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.new_price}
                  oldPrice={item.old_price}
                />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-lodeMore">
        <p>Explore More</p>
      </div>
    </div>
  );
};

export default ShopCategory;
