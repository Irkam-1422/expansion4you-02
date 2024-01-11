import React from "react";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div>
      <div className="service-footer-cont">
        <h3>
          Scedule your <br /> appointment today!
        </h3>
        <div className="button">
          Contact Us
          {/* <img src={require("../../assets/services/arrow.png")} alt="" /> */}
        </div>
      </div>
    </div>
  );
};
