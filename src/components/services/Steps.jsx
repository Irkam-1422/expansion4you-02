import React from "react";

import "./Steps.scss"

const steps = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure, veniam quas assumenda facere nulla tempora autem ex nisi nemo!",
];

export const Steps = () => {
  return (
    <div className="service-steps-cont">
      <hr />
      <div className="inner-cont">
        {steps.map((step,i) => {
            return (
                <>
                <div className="step">
                    <h2>0{i+1}</h2>
                    <p>{step}</p>
                </div>
                {i !== 2 && <div className="vertical"></div> }
                </>
            )
        })}
      </div>
      <hr style={{borderBottom: '2px solid #9c27b0'}}/>
    </div>
  );
};
