import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers.js";

import "./Services.scss";

export const Services = () => {
  const cont = useRef(null);

  useEffect(() => {
    if (cont.current) {
      cont.current.style.transition = "all .7s";
      observer_op().observe(cont.current);
    }
  }, []);

  return (
    <>
      <div className="services-cont" ref={cont}>
        <ul>
          <li>Social Media Advertising</li>
          <li>Digital Marketing Strategy</li>
          <li>Social Media Content </li>
          <li>Search Engine Advertising (Google Ads, Bing Ads)</li>
          <li>Search Engine Optimization</li>
          <li>Website Creation</li>
          <li>Marketing </li>
          <li>Branding</li>
        </ul>
        <div className="vertical"></div>
        <div className="sb-cont">
          <h1>Our Services</h1>
          <a href="">See more about our services</a>
        </div>
      </div>
      <hr />
    </>
  );
};
