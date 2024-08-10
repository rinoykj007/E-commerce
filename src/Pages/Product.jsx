// Product.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/shopContext";
import BreadCums from "../Components/BreadCums/BreadCums";
import DisplayProduct from "../Components/ProductDisplay/DisplayProduct";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(shopContext);
  const { category, productId } = useParams();
  const product = all_product.find(
    (p) => p.id === parseInt(productId) && p.category === category
  );
  console.log(product);
  return (
    <div>
      <BreadCums product={product} />
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <DisplayProduct product={product} />
        </div>
      ) : (
        <p>Product not found</p>
      )}

      <RelatedProduct />
    </div>
  );
};

export default Product;
