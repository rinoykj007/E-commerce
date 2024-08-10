import React from "react";
import "./footer.css";
import footer_logo from "./Image/logo_big.png";
import insta from "./Image/instagram_icon.png";
import pintester from "./Image/pintester_icon.png";
import whatsapp from "./Image/whatsapp_icon.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <div className="footer-image">
          <img src={footer_logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Conatct</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-conatiner">
            <img src={insta} alt="" />
          </div>
          <div className="footer-icons-conatiner">
            <img src={pintester} alt="" />
          </div>
          <div className="footer-icons-conatiner">
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 -All Right Reserved.</p>
      </div>
    </div>
  );
};

export default footer;
