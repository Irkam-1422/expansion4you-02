import React, { useEffect, useRef } from "react";

import "./Menu.scss";

const items = ["About", "Services", "Our Work", "What’s New", "Contact Us"];

export const Menu = ({ menu, setMenu }) => {
  const inputs = useRef([])

  useEffect(() => {
    if (inputs.current) {
      for (let i = 0; i < inputs.current.length; i++) {
        if (menu) {
          setTimeout(() => {
            inputs.current[i].classList.add('show')
          },i*150)
        } else {
          inputs.current[i].classList.remove('show')
        }
      }
    } 
  },[menu])

  return (
    <div
      className="menu-cont"
      style={menu ? { display: "flex" } : { display: "none" }}
    >
      <div className="menu-header">
        <img
          src={require("../../assets/home/logoBlack.png")}
          className="logo"
        />
        <img
          src={require("../../assets/home/cross.png")}
          className="cross"
          onClick={() => setMenu(false)}
        />
      </div>
      <ul>
        {items.map((item,i) => {
          return (
            <li ref={el => inputs.current[i] = el} >
              <div
                className="">
                {item}
              </div>
              <div className="circle"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
