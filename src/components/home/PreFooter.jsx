import React, { useEffect, useRef } from "react";
import { observer } from "../../observers.js";

import "./PreFooter.scss";

export const PreFooter = () => {
  const prefooterCont = useRef(null);

  useEffect(() => {
    const bgEl = document.getElementById("bgEl");
    if (prefooterCont.current) {
      observer("#628ECB", bgEl).observe(prefooterCont.current);
    }
  }, []);
  return (
    <div className="prefoot-cont" ref={prefooterCont}>
      <div className="prefoot-inner">
        <h1>Expansion <br />
             4YOU</h1>
        <p>Alongside our creative digital marketing agency, we offer the full spectrum
of agency services you need worldwide to establish a connected and
successful brand presence</p>
        <a href="">Go to our services</a>
      </div>
    </div>
  );
};
