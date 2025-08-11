import React from "react";
import Slider from "react-slick";

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749960/IMG-20250809-WA0195_izxaqe.jpg",
    "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749959/IMG-20250809-WA0197_h3f4ll.jpg",
    "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749958/IMG-20250809-WA0191_kbsnsm.jpg",
    "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749959/IMG-20250809-WA0188_ksikob.jpg",
    "https://res.cloudinary.com/dmixvynoo/image/upload/v1754749958/IMG-20250809-WA0185_khqhsm.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[320px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
