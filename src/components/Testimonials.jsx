import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

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
];

export default function Testimonials() {
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <FaQuoteLeft className="text-black-600 text-2xl mb-3" />
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover  "
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
        ))}
      </div>
    </section>
  );
}
