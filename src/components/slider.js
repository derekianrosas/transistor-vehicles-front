import React, { useState } from "react";
import ImgComp from "./imgComp";
import i1 from "../../static/assets/13.jpg";
import i2 from "../../static/assets/2.jpg";
import i3 from "../../static/assets/12.png";
import i4 from "../../static/assets/4.jpg";
import i5 from "../../static/assets/5.png";
import i6 from "../../static/assets/6.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}></button>
      <button id="goRight" onClick={goRight}></button>
    </div>
  );
}

export default Slider;
