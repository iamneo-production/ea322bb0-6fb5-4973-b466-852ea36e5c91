import React from "react";
import "../Styles/Menu.css";
function MenuItem({ image, title, description }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {title} </h1>
      <p> {description} </p>
    </div>
  );
}

export default MenuItem;