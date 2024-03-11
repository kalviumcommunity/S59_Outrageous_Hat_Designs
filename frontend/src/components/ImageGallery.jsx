import React from "react";
import Group from "../assets/images.png";
import Typewriter from "./TypeWriter";


export default function ImageGallery() {
  return (
    <div className="slider">
      <div>
       <p className="addText" id="textadd">A<Typewriter text='dd Your Own Designs' delay={100}/></p>
      <p className="addText">Timeless Elegance, Endless Inspiration</p>
      </div>
      <img src={Group} alt="hat1" style={{ height: "500px" }} />
    </div>
  );
}
