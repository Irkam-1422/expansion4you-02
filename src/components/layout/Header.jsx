import React, { useEffect, useState } from "react";

import "./Header.scss";

export const Header = ({ setMenu }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div
        className="header-cont"
        style={visible ? {} : { transform: "translateY(-150%)" }}
      >
        <img
          src={require("../../assets/home/logoBlack.png")}
          className="logo"
        />
        <img
          src={require("../../assets/home/menuBlack.png")}
          onClick={() => setMenu(true)}
          className="menu"
        />
      </div>
    </>
  );
};
