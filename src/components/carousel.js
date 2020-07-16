import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import I2 from "../../static/assets/2.jpg";

import I4 from "../../static/assets/4.jpg";
import I5 from "../../static/assets/5.png";

import I7 from "../../static/assets/7.jpg";
import I8 from "../../static/assets/8.png";
import I9 from "../../static/assets/9.png";
import I10 from "../../static/assets/10.png";
import I11 from "../../static/assets/11.png";
import I12 from "../../static/assets/12.png";
import I13 from "../../static/assets/13.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    className="carousel-wrapper"
    play={true}
    cancelOnInteraction={false}
    interval={3000}
  >
    <div data-src={I2} />
    <div data-src={I4} />
    <div data-src={I5} />
    <div data-src={I7} />
    <div data-src={I8} />
    <div data-src={I9} />
    <div data-src={I10} />
    <div data-src={I11} />
    <div data-src={I12} />
    <div data-src={I13} />
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
