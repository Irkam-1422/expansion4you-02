import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/home/video.mp4";
import { observer } from "../../observers.js";
import "./Video.scss";

const words = [
  "Brand",
  "Reach",
  "Customer Base",
  "Impact",
  "Opportunities",
  "Success",
];

const colors = [
  "#E58022",
  "#CF193F",
  "#1064E0",
  "#E58022",
  "#CF193F",
  "#1064E0",
];

export const Video = () => {
  const [again, setAgain] = useState(false);
  const [word, setWord] = useState(words[0]);
  const [color, setColor] = useState(colors[0]);
  const videoCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (videoCont.current) {
      console.log(videoCont.current, bgEl);
      observer("#F0F3FA", bgEl).observe(videoCont.current);
    }
  }, []);

  useEffect(() => {
    words.forEach((el, i) =>
      setTimeout(() => {
        setWord(el);
        setColor(colors[i]);
        if (i === words.length - 1) setAgain((prev) => !prev);
      }, 1000 * (i + 1))
    );
  }, [again]);

  return (
    <div className="video-outer" ref={videoCont}>
      <div className="video-inner">
        <video
          src={video}
          autoPlay={true}
          muted={true}
          loop={true}
          type="video/mp4"
        ></video>
        <div className="text">
          Expand Your <span style={{ color: color }}>{word}</span>
        </div>
      </div>
    </div>
  );
};
