import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Steps } from "./Steps";

export const Service = ({ service, open }) => {
  return (
    <div
      style={{
        // backgroundColor: "#9b27b02f",
        transition: "all .5s",
        maxHeight: open ? "2000px" : "0",
        overflow: "hidden",
      }}
    >
      <Header service={service} />
      <Steps />
      <Footer />
    </div>
  );
};
