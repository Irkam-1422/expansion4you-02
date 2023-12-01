import React from "react";
import { Contact } from "../components/home/Contact";
import { Feedback } from "../components/home/Feedback";
import { Intro } from "../components/home/Intro";
import { PreFooter } from "../components/home/PreFooter";
import { SelectedWork } from "../components/home/SelectedWork";
import { Services } from "../components/home/Services";
import { Video } from "../components/home/Video";

import "./Home.scss"

export const Home = () => {
  return (
    <div id="bgEl" style={{transition: 'all 1s'}}>
      <Video />
      <Intro />
      <Services />
      <SelectedWork />
      <Feedback />
      <PreFooter />
      <Contact />
    </div>
  );
};
