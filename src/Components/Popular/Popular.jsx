import { data_product } from "../../Assets/data";
import "./style.css";

function Popular() {
  return (
    <div className="products">
      <h1>Popular Products</h1>
      <div className="product-list">
        {data_product.map((product) => (
          <div key={product.id} className="product-item">
            <img
              style={{ width: "75%" }}
              src={product.image}
              alt={product.name}
            />
            <h4 style={{ width: "75%" }}>{product.name}</h4>
            <p>New Price: ${product.new_price.toFixed(2)}</p>
            <p>
              Old Price: <s>${product.old_price.toFixed(2)}</s>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
