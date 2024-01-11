import React from "react";
import { Footer } from "../components/work/Footer";
import { Header } from "../components/work/Header";
import { Steps } from "../components/work/Steps";

import "./Work.scss"

export const Work = () => {
  return (
    <div className="work-cont" style={{marginTop: '100px'}}>
      <Header />
      <Steps />
      <Footer />
    </div>
  );
};
