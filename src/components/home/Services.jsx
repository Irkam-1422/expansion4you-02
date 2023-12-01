import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";

import "./Services.scss";

export const Services = () => {
  const serviceCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (serviceCont.current) {
      observer("#8AAEE0", bgEl).observe(serviceCont.current);
    }
  }, []);
  return (
    <div className="services-cont" ref={serviceCont}>
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
      <div className="">
        <h1>Services</h1>
        <a href="">See more about our services</a>
      </div>
    </div>
  );
};
