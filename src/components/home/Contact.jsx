import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers.js";

import "./Contact.scss";

export const Contact = () => {
  const contactCont = useRef(null);
  const contTop = useRef(null);
  const contBottom = useRef(null);

  useEffect(() => {
    if (contTop.current) {
      contTop.current.style.transition = "all .7s";
      observer_op().observe(contTop.current);
    }
    if (contBottom.current) {
      contBottom.current.style.transition = "all .7s";
      observer_op().observe(contBottom.current);
    }
  }, []);

  return (
    <div className="contact-cont" ref={contactCont}>
      <div className="contact-top" ref={contTop}>
        <div className="ct-inner">
          <p>
            +31 638 47 14 11 <br />
            info@expansion4you.nl
            <br />
            <br />
            Expansion4YOU, <br />
            Utrecht, the Netherlands
          </p>
          <div className="socials-cont">
            <img src={require("../../assets/home/twt.png")} alt="" />
            <img src={require("../../assets/home/lin.png")} alt="" />
            <img src={require("../../assets/home/fb.png")} alt="" />
          </div>
        </div>
        <h1>Get in touch!</h1>
      </div>
      <hr />
      <div className="contact-bottom" ref={contBottom}>
        <p>
          Let’s Connect Over Coffee!
          <br />
          <br /> We’re eager to understand your challenges. If you’re in search
          of an experienced digital marketing partner, let’s meet in person for
          a coffee and a chat.
        </p>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};
