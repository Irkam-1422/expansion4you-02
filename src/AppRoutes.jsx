import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Menu } from "./components/layout/Menu";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  const [menu,setMenu] = useState(false)  
  return (
    <>
      <Header setMenu={setMenu}/>
      <Menu menu={menu} setMenu={setMenu}/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
