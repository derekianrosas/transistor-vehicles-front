import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function VehicleCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.item>
        <img
          className="vehicle-image"
          src="https://icdn2.digitaltrends.com/image/digitaltrends/20191017_01_01.jpg"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>First slide test for carousel</p>
        </Carousel.Caption>
      </Carousel.item>
    </Carousel>
  );
}
