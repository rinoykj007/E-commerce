import exclusive from "./Image/exclusive_image.png";
import "./Offers.css";
function Offers() {
  return (
    <div>
      <div className="offer">
        <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>Offer for you</h1>
          <p>Only on Best Sellers Products</p>
          <button>Check Now </button>
        </div>
        <div className="offer-right">
          <img style={{ width: "85%" }} src={exclusive} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
