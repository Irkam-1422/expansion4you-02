import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers.js";

import "./Intro.scss";

export const Intro = () => {
  const mission = useRef(null);
  const blue = useRef(null);

  const introCont = useRef(null);
  useEffect(() => {
    if (mission.current) {
      mission.current.style.transition = "all .7s";
      observer_op().observe(mission.current);
    }
    if (blue.current) {
      blue.current.style.transition = "all .7s";
      observer_op().observe(blue.current);
    }
  }, []);

  return (
    <div className="intro-cont" ref={introCont}>
      <div className="mission" ref={mission}>
        <h1 className="d-none d-md-block">Our Mission</h1>
        <div className="d-md-none d-block">
          <h1>Our Mission</h1>
          <a href="">See more about who we are</a>
        </div>
        <div className="vertical"></div>
        <div className="text">
          <p className="d-none d-md-block">
            is to unite two elements that may not naturally align: <br />{" "}
            creativity and tangible results.
          </p>
          <p className="d-block d-md-none">
            is to unite two elements that may not naturally align:
            creativity and tangible results.
          </p>
          <a href="" className="d-none d-md-block">
            See more about who we are
          </a>
        </div>
      </div>
      <hr />
      <div className="content" ref={blue}>
        <div className="">
          At Expansion 4YOU our commitment to expansion centers on creating
          meaningful
        </div>
        <div className="">CONNECTIONS.</div>
        <div className="last">
          We link products and services with people, connecting your brand to
          both new and existing audiences.
        </div>
      </div>
      <hr style={{ margin: "0" }} />
    </div>
  );
};
