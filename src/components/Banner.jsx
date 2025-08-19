import { button, nav } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";

const settings = {
  dots: false,
  Infinity: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  navigation: true,
  arrows: true,
  pauseOnHover: false,
  nextArrow: <CustomArrow direction="next" />,
  prevArrow: <CustomArrow direction="prev" />,
};

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755285396/lion-1.4a2c3415_uvcjn4.webp",
    text: "Discover Africa Like Never Before",
    button: "explore more"
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755282904/shearwater-heli-2.d28936d5_jfmt37.webp",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749953/IMG-20250809-WA0172_mrrpzo.jpg",
  },
];

function Banner() {
  return (
    <div className="w-full md:h-screen lg:h-screen h-[80vh] relative ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="w-full md:h-screen lg:h-screen h-[80vh] bg-center bg-cover flex flex-col space-y-2 items-center    justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2 className="text-white text-xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-4 rounded text-center max-w-[100%]">
                {slide.text}
              </h2>
              {slide.button && (
                <Link to="/gallery" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
                  {slide.button}
                </Link>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
