import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../utils/data";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));
  const [isOpen, setIsOpen] = useState(false);

  if (!tour) {
    return <p className="p-6">Tour not found.</p>;
  }

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{tour.title}</h1>
        <p className="text-gray-600 mt-2">{tour.description}</p>
        <p className="text-xl font-semibold mt-4">{tour.price}</p>
        <button
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => setIsOpen(true)}
        >
          Book Now
        </button>
      </div>

      {/* Booking Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-red-600 hover:text-red-700 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Book Your Tour
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Number of People
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
