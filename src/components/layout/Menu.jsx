import React from "react";

import "./Menu.scss";

const items = ["About", "Services", "Our Work", "What’s New", "Contact Us"];

export const Menu = ({menu, setMenu}) => {
  return (
    <div className="menu-cont" style={menu ? {display: 'flex'} : {display: 'none'}}>
      <div className="menu-header">
        <img
          src={require("../../assets/home/logoBlack.png")}
          className="logo"
        />
        <img src={require("../../assets/home/cross.png")} className="cross" onClick={() => setMenu(false)}/>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <div className="">{item}</div>
              <div className="circle"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
