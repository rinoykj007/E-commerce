import hand_icon from "./Image/hand_icon.png";
import arrowIcon from "./Image/arrow.png";
import hero_image from "./Image/hero_image.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} style={{ width: "50px" }} alt="" />
          </div>
          <p>Collection</p>
          <p>For everyone</p>
          <div className="hero-latest-btn">
            Latest Collection
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} className="hero-image" alt="" />
      </div>
    </div>
  );
}

export default Hero;
