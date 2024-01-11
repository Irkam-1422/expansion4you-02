import React from "react";

import "./Header.scss"

export const Header = ({service}) => {
  return (
    <div className="service-header-cont">
      <div className="img-wrap">
        <img src={require(`../../assets/services/${service}.png`)} alt="" />
      </div>
      <div className="content-wrap">
        <div className="title-cont">
          <h2>Lorem Ibsum Dolor Sit!</h2>
          <a href="">Contact Us</a>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            veniam dolorem et cum, officia neque eveniet minus illum fuga. Iure,
            veniam quas assumenda facere nulla tempora autem ex nisi nemo!
          </p>
          <p>
            Omnis vero eos obcaecati est? Dolorem, facilis, reiciendis saepe
            commodi beatae a tempore ea cupiditate quod quo nisi corrupti ipsam
            sit. Voluptates nostrum eius suscipit est reprehenderit quasi rerum
            excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};
