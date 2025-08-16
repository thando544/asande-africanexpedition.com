import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../utils/data";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  const [modalState, setModalState] = useState("closed"); 

  if (!tour) {
    return <p className="p-6">Tour not found.</p>;
  }

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto h-screen pt-[7rem]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-80 object-cover "
        />
        <h1 className="text-3xl font-bold mt-4">{tour.title}</h1>
        <p className="text-gray-600 mt-2">{tour.description}</p>
        <p className="text-xl font-semibold mt-4">{tour.price}</p>

        <button
          className="mt-6 px-6 py-3 bg-red-600 text-white  hover:bg-red-700"
          onClick={() => setModalState("open")}
        >
          Enquire Now
        </button>
      </div>


      {modalState === "open" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Book Your Tour</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Booking confirmed!");
                setModalState("closed");
              }}
            >
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-4"
                required
              />

              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 mb-4"
                required
              />

              <label className="block mb-2 font-semibold">Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 mb-4"
                required
              />

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setModalState("closed")}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
