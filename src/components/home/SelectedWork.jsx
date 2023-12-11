import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";
import swork from "../../assets/home/swork.png";
import { observer_op } from "../../observers.js";

import "./SelectedWork.scss";
import { Accordion } from "react-bootstrap";

const articles = [
  { title: "Selected Work", img: "article1.png" },
  { title: "Selected Work", img: "article2.png" },
  { title: "Selected Work", img: "article3.png" },
];

export const SelectedWork = () => {
  const sworkCont = useRef(null);
  const cont = useRef(null);
  const a1 = useRef(null);
  const a2 = useRef(null);
  const a3 = useRef(null);

  useEffect(() => {
    console.log(a1.current);
    if (cont.current) {
      cont.current.style.transition = "all .7s";
      observer_op().observe(cont.current);
    }

    if (a1.current && a2.current && a3.current) {
      a1.current.style.transition = "all .7s";
      a2.current.style.transition = "all .7s";
      a3.current.style.transition = "all .7s";
      observer_op().observe(a1.current);
      observer_op().observe(a2.current);
      observer_op().observe(a3.current);
    }
  }, []);

  return (
    <div className="swork-cont" ref={sworkCont}>
      <div className="sw-top" ref={cont}>
        <h1>Selected Work</h1>
        <div className="vertical d-none d-md-block"></div>
        <p>
          We empower local and global businesses to establish an impactful and
          influential online presence. Through strategic digital solutions, we
          ensure our clients not only navigate the vast digital landscape
          successfully but also thrive, engaging their target audiences
          effectively. Our mission is to elevate brands, enhance visibility, and
          drive sustainable growth in the ever-evolving online sphere.
        </p>
      </div>
      <hr className="d-none d-md-block"/>
      <div className="sw-bottom d-none d-md-flex">
        {articles.map((a, i) => {
          return (
            <div className="inner" ref={i === 0 ? a1 : i === 1 ? a2 : a3}>
              <div className="" style={{ width: "100%" }}>
                <img src={require(`../../assets/home/${a.img}`)} alt="" />
              </div>
              <h3>{a.title}</h3>
            </div>
          );
        })}
      </div>
      <Accordion defaultActiveKey="0" flush className="d-md-none d-block">
        {articles.map((a, i) => {
          return (
            <Accordion.Item eventKey={i}>
              <Accordion.Header className={i===2 ? "bottom" : ""}>Some Article</Accordion.Header>
              <Accordion.Body>
                <div className="" style={{ width: "100%" }}>
                  <img src={require(`../../assets/home/${a.img}`)} alt="" />
                </div>
                <h3>{a.title}</h3>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <hr className="d-none d-md-block"/>
    </div>
  );
};
