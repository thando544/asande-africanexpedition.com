import React from "react";
import { FaHiking, FaShip, FaCamera, FaUmbrellaBeach } from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "Guided Game Drive",
    description:
      "Experience the thrill of spotting Africa's Big Five with our expert guides.",
    icon: <FaHiking className="text-red-600 text-5xl" />,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755201875/vicfalls4_uyqvph.jpg",
  },
  {
    id: 2,
    title: "Sunset Boat Cruise",
    description:
      "Enjoy a serene evening on the river while watching the sun dip below the horizon.",
    icon: <FaShip className="text-red-600 text-5xl" />,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755201875/vicfalls_txpjwc.jpg",
  },
  {
    id: 3,
    title: "Cultural Village Tour",
    description:
      "Immerse yourself in local traditions, music, and storytelling.",
    icon: <FaCamera className="text-red-600 text-5xl" />,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755201840/vicfalls5_p7iohx.jpg",
  },
  {
    id: 4,
    title: "Beach Relaxation",
    description:
      "Unwind by the crystal-clear waters with refreshing drinks in hand.",
    icon: <FaUmbrellaBeach className="text-red-600 text-5xl" />,
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755201839/vicfalls3_jrgtfh.jpg",
  },
];

export default function Activities() {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Discover Our Activities
        </h1>
        <p className="text-gray-600 mt-3">
          Choose from a variety of exciting and relaxing adventures for your
          trip.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              {activity.icon}
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {activity.description}
              </p>
              <button className="mt-4 w-40 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
