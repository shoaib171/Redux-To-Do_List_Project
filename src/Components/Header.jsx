/** @format */

import React from "react";
import Logo from "../Images/ToDo.jpg";
const Header = (props) => {
  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "20px",
    marginTop: "40px",
  };
  return (
    <div>
      <img style={imageStyle} src={Logo} />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
