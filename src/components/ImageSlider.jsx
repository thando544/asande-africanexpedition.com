import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
     
        <div className="w-[320px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749958/IMG-20250809-WA0185_khqhsm.jpg"
            alt="first slide image"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-[320px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749958/IMG-20250809-WA0189_fakfte.jpg"
            alt="second slide image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[320px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749957/IMG-20250809-WA0184_kqilio.jpg"
            alt="third slide image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[320px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749956/IMG-20250809-WA0157_rvtw6y.jpg"
            alt="fourth slide image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[320px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749956/IMG-20250809-WA0183_kosn08.jpg"
            alt="fifth slide image"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
