import React, { useEffect, useRef, useState } from "react";
import { observer } from "../../observers.js";

import "./Feedback.scss";

const feedbacks = [
  <div className="text">
    We are working with Expansion 4YOU on Digital Marketing Strategy, Google
    Ads, Social Media Advertising. During this time have built up a great
    relationship. <br />
    <br /> Creative ideas, efficient, easy to work with & very result oriented.
    We have had lots of support & tips with Marketing. Forever grateful and look
    forward to continuing working with Expansion 4YOU in the future. <br />
    <br /> Great service. Great communication. Love the results.
  </div>,
  <div className="text">
    Adaptable online marketing strategies for different market needs. Very
    knowledgeable and lot's of personal attention.
    <br />
    <br /> Jet Martens
  </div>,
  <div className="text">
    I worked with Anna and she always gives 100% to achieve the best results for
    her clients. Because of her extensive experience, analytical skills,
    creativity and passion she delivers a successful online marketing strategy
    every time. <br />
    Bas Uding
  </div>,
];

export const Feedback = () => {
  const feedbackCont = useRef(null);
  const wrap = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (feedbackCont.current) {
      observer("#8AAEE0", bgEl).observe(feedbackCont.current);
    }
  }, []);

  const handleNextClick = () => {
    console.log(count);
    if (count !== 2) {
      setCount(count+1);
    } else {
      setCount(0);
    }
  };

  const handlePrevClick = () => {
    console.log(count);
    if (count !== 0) {
      setCount(count-1);
    } else {
      setCount(2);
    }
  };

  return (
    <div className="feedback-cont" ref={feedbackCont}>
      <div className="">
        <div className="img-wrap">
          <img src={require("../../assets/home/logos.png")} alt="" />
        </div>
      </div>
      <div className="fb-bottom">
        <div className="">
          <h1>
            What our <br /> clients say
          </h1>
          <div className="arrows">
            <img
              src={require("../../assets/home/arrow-left.png")}
              onClick={handlePrevClick}
            />
            <img
              src={require("../../assets/home/arrow-right.png")}
              onClick={handleNextClick}
            />
          </div>
        </div>
        <div className="content">
          <div className="quote q1">“</div>
          <div className="text-wrap">
            <div className="text-wrap-inner" style={
                count === 0 ? {transform: 'none'} :
                count === 1 ? {transform: 'translateX(-485px)'} :
                count === 2 ? {transform: 'translateX(-970px)'} : 
                {}
            }>
              {feedbacks.map((e) => {
                return e;
              })}
            </div>
          </div>
          <div className="quote q2">”</div>
        </div>
      </div>
    </div>
  );
};
