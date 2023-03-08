import React, { Component } from "react";
import Slider from "react-slick";
import quotes from "../Data/quotes.json"


export default class SimpleSlider extends Component {
  render() {
    const ran = Math.floor(Math.random()*20)
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      dot: false,
      autoplaySpeed: 2000,
      arrows: true,
      cssEase: 'ease-in-out',
      touchThreshold: 100,
    };
    return (
      <div className="text-white">  
        <Slider {...settings}>
          <div>
            <h3 className="text-3xl">{quotes[ran].text}</h3>
            <h5 className="justify-end">~{quotes[ran].author}</h5>
          </div>
          <div>
            <h3 className="text-3xl">{quotes[ran+1].text}</h3>
            <h5 className="justify-end">~{quotes[ran+1].author}</h5>
          </div>
          <div>
            <h3 className="text-3xl">{quotes[ran+2].text}</h3>
            <h5 className="justify-end">~{quotes[ran+2].author}</h5>
          </div>
          <div>
            <h3 className="text-3xl">{quotes[ran+3].text}</h3>
            <h5 className="justify-end">~{quotes[ran+3].author}</h5>
          </div>
          <div>
            <h3 className="text-3xl">{quotes[ran+4].text}</h3>
            <h5 className="justify-end">~{quotes[ran+4].author}</h5>
          </div>
          <div>
            <h3 className="text-3xl">{quotes[ran+5].text}</h3>
            <h5 className="justify-end">~{quotes[ran+5].author}</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

