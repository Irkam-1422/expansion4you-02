import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Menu } from "./components/layout/Menu";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";

export const AppRoutes = () => {
  const [menu,setMenu] = useState(false)  
  return (
    <>
      <Header setMenu={setMenu}/>
      <Menu menu={menu} setMenu={setMenu}/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/news" element={<News />} />
          <Route path="/contect" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};
