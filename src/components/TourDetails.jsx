import React from "react";
import { useParams } from "react-router-dom";
import { tours } from "../utils/data";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <p className="p-6">Tour not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={tour.image} alt={tour.title} className="w-full h-80 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{tour.title}</h1>
      <p className="text-gray-600 mt-2">{tour.description}</p>
      <p className="text-xl font-semibold mt-4">{tour.price}</p>
      <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">
        Book Now
      </button>
    </div>
  );
}
