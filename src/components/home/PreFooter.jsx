import React, { useEffect, useRef } from "react";
import { observer_op } from "../../observers.js";

import "./PreFooter.scss";

export const PreFooter = () => {
  const cont = useRef(null);

  useEffect(() => {
    if (cont.current) {
      cont.current.style.transition = "all .7s";
      observer_op().observe(cont.current);
    }
  }, []);

  return (
    <>
      <hr />
      <div className="prefoot-cont" ref={cont}>
        <h1>
          Expansion <br />
          4YOU
        </h1>
        <div className="content">
          <a href="">Go to our services</a>
          <p>
            Alongside our creative digital marketing agency, we offer the full
            spectrum of agency services you need worldwide to establish a
            connected and successful brand presence
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};
