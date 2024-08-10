import React from "react";
import "./RelatedProduct.css";
import { data_product } from "../../Assets/data";
import Item from "../Items/Items";

export default function RelatedProduct() {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProduct-items">
        {data_product.map((item, i) => {
          return (
            <Item
              p_width="70%"
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
              width="15rem"
              height="15rem"
            />
          );
        })}
      </div>
    </div>
  );
}
