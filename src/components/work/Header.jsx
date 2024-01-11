import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers.js";

import "./Header.scss";

const mission_vission = [
  {
    title: "Our Mission:",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum.",
  },
  {
    title: "Our Vision:",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum.",
  },
];

export const Header = () => {
  const p = useRef(null);
  const h2 = useRef(null);
  const mission = useRef(null);
  const vision = useRef(null);

  useEffect(() => {
    if (p.current) {
      p.current.style.transition = "all .7s";
      observer_op().observe(p.current);
    }
    if (h2.current) {
      h2.current.style.transition = "all .7s";
      observer_op().observe(h2.current);
    }
    if (mission.current) {
      mission.current.style.transition = "all .7s";
      observer_op().observe(mission.current);
    }
    if (vision.current) {
      vision.current.style.transition = "all .7s";
      observer_op().observe(vision.current);
    }
  }, []);

  return (
    <div className="work-header-cont">
      <h1>About Us</h1>
      <hr />
      <p ref={p} style={{transition: 'all .7s'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam
        dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam
        quas assumenda facere nulla tempora autem ex nisi nemo!
      </p>
      <hr />
      <div className="d-flex mission-cont">
        <h2 ref={h2} style={{transition: 'all .7s'}}>How do we work?</h2>

        <div className="mission-inner">
          {mission_vission.map((mv, i) => {
            return (
              <div
                className="mission"
                style={i === 0 ? { borderBottom: "2px solid", transition: 'all .7s' } : {transition: 'all .3s'}}
                ref={i === 0 ? mission : vision}
              >
                <h3>{mv.title}</h3>
                <p>{mv.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
