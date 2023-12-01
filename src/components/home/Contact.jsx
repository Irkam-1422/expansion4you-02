import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";

import "./Contact.scss";

export const Contact = () => {
  const contactCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (contactCont.current) {
      observer("#D5DEEF", bgEl).observe(contactCont.current);
    }
  }, []);
  return (
    <div className="contact-cont" ref={contactCont}>
      <div className="contact-top">
        <h1>Get in touch!</h1>
        <p>
          +31 638 47 14 11 <br />info@expansion4you.nl
          <br />
          <br />
          Expansion4YOU, <br />Utrecht, the Netherlands
        </p>
        <div className="">
          <img src={require("../../assets/home/twitter.png")} alt="" />
          <img src={require("../../assets/home/linkedin.png")} alt="" />
          <img src={require("../../assets/home/facebook.png")} alt="" />
        </div>
      </div>
      <div className="contact-bottom">
        <p>
          Let’s Connect Over Coffee! We’re eager to understand your challenges.
          If you’re in search of an experienced digital marketing partner, let’s
          meet in person for a coffee and a chat.
        </p>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};
