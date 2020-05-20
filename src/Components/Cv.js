import React from "react";
import cv from "../img/CV_Anatol_Kerbs.pdf";

export default function About() {
  return (
    <div className="Cv-container">
      <img src={cv} alt="" className="Cv" />
    </div>
  );
}
