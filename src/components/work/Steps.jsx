import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers";

import "./Steps.scss";

const steps = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
];

const Step = ({ step, i }) => {
  return (
    <>
      <div className="step-cont">
        <h2>0{i + 1}</h2>
        <p>{step}</p>
      </div>
      <div className="img-wrap">
        <img src="" alt="" />
      </div>
    </>
  );
};

export const Steps = () => {
  const stepsEls = useRef([]);

  useEffect(() => {
    if (stepsEls.current) {
      for (let i = 0; i < stepsEls.current.length; i++) {
        stepsEls.current[i].style.transition = "all .7s";
        observer_op().observe(stepsEls.current[i]);
      }
    }
  }, []);

  return (
    <div>
      {steps.map((step, i) => {
        return (
          <div
            className={`work-steps-cont ${i % 2 !== 0 ? "reverse" : ""}`}
            ref={(el) => (stepsEls.current[i] = el)}
          >
            <Step step={step} i={i} />
          </div>
        );
      })}
      <hr className="pink" style={{ marginTop: "0" }} />
    </div>
  );
};
