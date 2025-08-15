import React from "react";
import {
  FaMapMarkedAlt,
  FaUserTie,
  FaCameraRetro,
  FaUmbrellaBeach,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "Expert Local Guides",
      description:
        "Our experienced guides know every hidden gem of Victoria Falls, ensuring an unforgettable adventure.",
    },
    {
      icon: <FaCameraRetro className="text-yellow-400 text-5xl mb-4" />,
      title: "Scenic Adventures",
      description:
        "We take you to the most picturesque spots, perfect for breathtaking photos and lasting memories.",
    },
    {
      icon: <FaUserTie className="text-yellow-400 text-5xl mb-4" />,
      title: "Personalized Experience",
      description:
        "We tailor each tour to your interests, so you get the most out of your visit.",
    },
    {
      icon: <FaUmbrellaBeach className="text-yellow-400 text-5xl mb-4" />,
      title: "Comfort & Safety",
      description:
        "From pick-up to drop-off, we prioritize your comfort, safety, and enjoyment.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience Victoria Falls like never before. We combine local
          knowledge, safety, and passion to create unforgettable adventures.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 border border-white/20 rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
