import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/home/video2.mp4";
import { observer_op } from "../../observers.js";
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
  "#26D2FF",
  "#FE3BD6",
  "#FFDD2C",
  "#26D2FF",
  "#FE3BD6",
  "#FFDD2C",
];

export const Video = () => {
  const p = useRef(null);
  const videoRef = useRef(null);
  const [again, setAgain] = useState(false);
  const [word, setWord] = useState(words[0]);
  const [color, setColor] = useState(colors[0]);
  const videoCont = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.transition = "all .7s";
      observer_op().observe(videoRef.current);
    }
    if (p.current) {
      p.current.style.transition = "all .7s";
      observer_op().observe(p.current);
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
      <h1>
        Let Expansion 4 YOU <br /> Make It Happen!
      </h1>
      <hr />
      <div className="video-inner" ref={videoRef}>
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
      <p ref={p}>
        We believe that every Brand has its unique story, and we are here to
        help you tell yours. With our innovative digital marketing strategies,
        we transform ideas into impactful narratives, driving your brand’s
        success.
      </p>
      <hr />
    </div>
  );
};
