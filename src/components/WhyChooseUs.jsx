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
    <section
      className="relative bg-fixed bg-center bg-cover py-16 px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605225227357-9cc6a273f8f4?auto=format&fit=crop&w=1470&q=80')", // Replace with your scenic image
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-200">
          At Victoria Falls Tours, we go beyond sightseeing — we give you an
          authentic, safe, and unforgettable journey into the heart of Africa’s
          natural wonder.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-10 border border-white/20 rounded-lg shadow hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
