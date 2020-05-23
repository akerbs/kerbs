import React from "react";
import banner from "../banner.jpg";

export default function Home() {
  return (
    <div className="Home-content">
      <div className="Home-img-container">
        <img src={banner} alt="" className="Home-img" />
      </div>
      <div class="Home-text-container">
        <span class="Home-text-highlight">
          Hi there! <br /> My name is Anatol Kerbs and I’m a Web Developer and
          Designer.
        </span>
        <br />
        <br />
        I live in Hamburg, Germany and I love all things about web development &
        design.
        <br />
        <br /> Feel free to contact with me!
      </div>
    </div>
  );
}
