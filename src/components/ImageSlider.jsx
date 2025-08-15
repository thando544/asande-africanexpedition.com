import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function ImageSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
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
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


  return (
    <div className="slider-container md:px-0 px-4">
      <Slider {...settings}>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754751729/IMG-20250809-WA0037_rbqgfp.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754751728/IMG-20250809-WA0029_swsnoi.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754751728/IMG-20250809-WA0032_uurmzb.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754750187/IMG-20250809-WA0242_bibaiu.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754750184/IMG-20250809-WA0240_rfbpnj.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754750184/IMG-20250809-WA0239_n3hoqx.jpg"
            alt=""
            className="w-[320px] h-[200px] object-cover object-center"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
