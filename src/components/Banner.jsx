import { button } from "framer-motion/client";
import React from "react";

import Slider from "react-slick";

const settings = {
  dots: false,
  Infinity: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, 
  fade: false,
  pauseOnHover: false,
};

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749957/IMG-20250809-WA0184_kqilio.jpg",
    text: "Discover Africa Like Never Before",
    button: "Explore More",
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1754750187/IMG-20250809-WA0243_tupiy0.jpg",
    text: "Discover unforgettable destinations, unique cultures, and breathtaking adventures.",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749953/IMG-20250809-WA0172_mrrpzo.jpg",
  },
];

function Banner() {
  return (
    <div className="w-full h-full ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="w-full h-[calc(100vh-96px)] bg-center bg-cover flex flex-col space-y-2 items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2 className="text-white text-xl sm:text-3xl md:text-3xl lg:text-3xl font-bold bg-black/50 px-4 sm:px-6 py-2 sm:py-4 rounded text-center max-w-[100%]">
                {slide.text}
              </h2>
              {slide.button && (
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
                  {slide.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
