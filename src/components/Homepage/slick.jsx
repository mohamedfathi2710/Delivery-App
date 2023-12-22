import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import magdo from '../assets/logoMcDonalds.jpg'
import pizzahut from '../assets/pizzahut.jpg'
import salad from '../assets/saladbox.jpg'
import kfc from '../assets/kfc.jpg'
import starbucks from '../assets/starbucks.jpg'
import tacosmagic from '../assets/tacosmagic.avif'
import iraki from '../assets/iraki.jpeg'
import keshburger from '../assets/keshburger.jpg'
import dahab from '../assets/dahab.png'


const AutoPlay = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
  const containerStyle = {
    width: "1200px",
    margin: "auto", 
    height: '150px'
  };
  const slideStyle = {
    height: "100px", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  };
  const imgStyle = {
    height: "156px",
    width: "234px",
  };


  return (
    <div style={containerStyle}>
     
      <Slider {...settings}>
        <div style={slideStyle}>
          <img src={magdo} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={pizzahut} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={salad} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={kfc} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={starbucks} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={tacosmagic} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={iraki} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={keshburger} style={imgStyle} />
        </div>
        <div style={slideStyle}>
        <img src={dahab} style={imgStyle} />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
