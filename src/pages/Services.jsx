import React, { useEffect, useRef, useState } from "react";
import { Service } from "../components/services/Service";

import "./Services.scss";

const services = [
  "Social Media Advertising",
  "Digital Marketing Strategy",
  "Social Media Content",
  "Search Engine Advertising",
  "Search Engine Optimization",
  "Website Creation",
  "Marketing",
  "Branding",
];

export const Services = () => {
  const [index, setIndex] = useState(-1);
  const [animation, setAnimation] = useState(true);
  const entries = useRef([]);

  useEffect(() => {
    if (entries.current) {
      for (let i = 0; i < entries.current.length; i++) {
        setTimeout(() => {
          if (i === entries.current.length - 1) setAnimation(false);
          entries.current[i].classList.add("show");
          setTimeout(() => {
            entries.current[i].style.color = "#000";
          }, 300);
        }, i * 150);
      }
    }
  }, []);

  const handleClick = (e, i) => {
    if (i !== index) {
      setIndex(i);
    } else {
      setIndex(-1);
    }
  };

  return (
    <div className="serv-cont">
      {/* <hr /> */}
      <h1>Our Services</h1>
      {services.map((service, i) => {
        return (
          <>
            <div className="title" onClick={(e) => handleClick(e, i)} key={i}>
              {i === 0 ? (
                <hr
                  style={{
                    marginTop: "-20px",
                    marginBottom: "20px",
                    border: `1px solid ${index === i ? "#9c27b0" : "#000"}`,
                  }}
                />
              ) : (
                ""
              )}
              <h2
                className="title-h2"
                // animation
                style={
                  animation
                    ? {}
                    : index === i
                    ? { color: "#9c27b0" }
                    : { color: "#000" }
                }
                ref={(el) => (entries.current[i] = el)}
              >
                {service}
              </h2>
              <hr
                style={{
                  border: `1px solid ${index === i ? "#9c27b0" : "#000"}`,
                }}
              />
            </div>
            <Service
              service={service}
              open={index === i ? true : false}
              key={i}
            />
          </>
        );
      })}
    </div>
  );
};
