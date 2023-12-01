import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";

import "./SelectedWork.scss";

const articles = [
  { title: "Selected Work", img: "article1.png" },
  { title: "Selected Work", img: "article2.png" },
  { title: "Selected Work", img: "article3.png" },
];

export const SelectedWork = () => {
  const sworkCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (sworkCont.current) {
      observer("#F0F3FA", bgEl).observe(sworkCont.current);
    }
  }, []);
  return (
    <div className="swork-cont" ref={sworkCont}>
      <div className="sw-top">
        <p>
          We empower local and global businesses to establish an impactful and
          influential online presence. Through strategic digital solutions, we
          ensure our clients not only navigate the vast digital landscape
          successfully but also thrive, engaging their target audiences
          effectively. Our mission is to elevate brands, enhance visibility, and
          drive sustainable growth in the ever-evolving online sphere.
        </p>
        <h1>Selected Work</h1>
      </div>
      <div className="sw-bottom">
        {articles.map((a, i) => {
          return (
            <div className="" style={{width: '25%'}}>
              <div className="" style={{width: '100%'}}>
                <img src={require(`../../assets/home/${a.img}`)} alt="" />
              </div>
              <h3>{a.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
