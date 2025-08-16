import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "USA",
    text: "The tour was amazing! Our guide was knowledgeable and made the experience unforgettable. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Lee",
    location: "Canada",
    text: "Beautiful sights and well-organized tours. Everything went smoothly, and I learned so much about the culture.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Amina Chirwa",
    location: "Zimbabwe",
    text: "One of the best travel experiences I've ever had. The guide was friendly and very professional!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "David Smith",
    location: "UK",
    text: "Such a wonderful trip! The scenery was breathtaking and the guide really knew the hidden gems.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets/laptops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Travelers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real experiences from people who explored with us
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
              <FaQuoteLeft className="text-green-600 text-2xl mb-3" />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
