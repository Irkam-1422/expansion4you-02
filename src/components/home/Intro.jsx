import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";

import "./Intro.scss";

export const Intro = () => {
  const introCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (introCont.current) {
      observer("#F0F3FA", bgEl).observe(introCont.current);
    }
  }, []);

  return (
    <div className="intro-cont" ref={introCont}>
      <div className="into-top">
        <h1>Let Expansion 4 YOU Make It Happen!</h1>
        <p>
          We believe that every Brand has its unique story, and we are here to
          help you tell yours. With our innovative digital marketing strategies,
          we transform ideas into impactful narratives, driving your brand’s
          success.
        </p>
      </div>
      <div className="into-bottom">
        <div className="ib-1">
          <a href="">See more About who we are.</a>
          <h2>Our <br /> Mission</h2>
          <p>
            is to unite two elements that may not naturally align: creativity
            and tangible results.
          </p>
        </div>
        <div className="ib-2">
          <p>
            At Expansion 4YOU our commitment to expansion centers on creating
            meaningful{" "}
          </p>
          <span>CONNECTIONS.</span>
          <p>
            We link products and services with people, connecting your brand to
            both new and existing audiences.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
