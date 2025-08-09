import React from "react";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
  };

  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749953/IMG-20250809-WA0172_mrrpzo.jpg",
      text: "Discover the Beauty of Africa",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dmixvynoo/image/upload/v1754751729/IMG-20250809-WA0035_fovzjr.jpg",
      text: "Experience Unique Adventures",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dmixvynoo/image/upload/v1754750187/IMG-20250809-WA0243_tupiy0.jpg",
      text: "Create Memories That Last Forever",
    },
  ];

  return (
    // Padding-top to push slides below navbar height (80px)
    <div className="relative w-full overflow-x-hidden pt-[96px]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="w-full h-[calc(100vh-96px)] bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-black/50 px-4 sm:px-6 py-2 sm:py-4 rounded text-center max-w-[90%]">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
