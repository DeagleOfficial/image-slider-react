import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

import one from './res/1.jpg';
import two from './res/2.jpg';
import three from './res/3.jpg';
import four from './res/4.jpg';
import five from './res/5.jpg';
import six from './res/6.jpg';
import seven from './res/7.jpg';
import eight from './res/8.jpg';

const App = () => {

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    };


  return (
    <div className="App">
      <div>
        <Slider {...settings} className="slider">
          <div>
            <img height = "300px" src = {one}></img>
          </div>
          <div>
            <img height = "300px" src = {two}></img>
          </div>
          <div>
            <img height = "300px" src = {three}></img>
          </div>
          <div>
            <img height = "300px" src = {four}></img>
          </div>
          <div>
            <img height = "300px" src = {five}></img>
          </div>
          <div>
            <img height = "300px" src = {six}></img>
          </div>
          <div>
            <img height = "300px" src = {seven}></img>
          </div>
          <div>
            <img height = "300px" src = {eight}></img>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default App