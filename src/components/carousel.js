import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ImageOne from "../../static/assets/1.jpg";
import ImageTwo from "../../static/assets/2.jpg";
import ImageThree from "../../static/assets/3.jpg";
import ImageFour from "../../static/assets/4.jpg";
import ImageFive from "../../static/assets/5.png";
import ImageSix from "../../static/assets/6.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    className="carousel-wrapper"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
  >
    <div data-src={ImageOne} />
    <div data-src={ImageTwo} />
    <div data-src={ImageThree} />
    <div data-src={ImageFour} />
    <div data-src={ImageFive} />
    <div data-src={ImageSix} />
  </AutoplaySlider>
);

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="body-wrapper">{slider}</div>;
  }
}
