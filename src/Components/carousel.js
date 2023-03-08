import React, { Component } from "react";
import Slider from "react-slick";
import quotes from "../Data/quotes.json"


export default class SimpleSlider extends Component {
  render() {
    const ran = Math.floor(Math.random()*20)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>{quotes[ran].text}</h3>
          </div>
          <div>
            <h3>{quotes[ran+1].text}</h3>
          </div>
          <div>
            <h3>{quotes[ran+2].text}</h3>
          </div>
          <div>
            <h3>{quotes[ran+3].text}</h3>
          </div>
          <div>
            <h3>{quotes[ran+4].text}</h3>
          </div>
          <div>
            <h3>{quotes[ran+5].text}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

