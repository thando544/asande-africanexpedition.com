import { useParams } from "react-router-dom";
import { useState } from "react";
import.meta.env.VITE_API_URL;

const activities = [
  { id: 2, name: "Devil's Pool" },
  { id: 3, name: "Game Drive" },
  { id: 4, name: "Sunrise cruise" },
  { id: 5, name: "Dinner cruise" },
  { id: 6, name: "Bush dinner" },
  { id: 7, name: "Helicopter Flight" },
  { id: 8, name: "Walking Safari" },
  { id: 9, name: "Chobe Day Trip" },
  { id: 10, name: "Walking safari" },
  { id: 11, name: "Bird Watching" },
  { id: 12, name: "Night Drive" },
  { id: 13, name: "Cultural Tour" },
];

export default function BookingForm() {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    people: 1,
  });

  const [confirmed, setConfirmed] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activityId: activity.id,
          activityName: activity.name,
          ...form,
          people: Number(form.people),
        }),
      });


      const data = await res.json();

      if (res.ok) {
        setConfirmed(data.booking);
      } else {
        alert("Booking failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  if (confirmed) {
    return (
      <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-xl mx-auto p-6 h-[50vh] text-white justify-center bg-black items-center flex flex-col  text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Booking Confirmed
            </h2>
            <p>
              Thank you <b>{form.name}</b>! Your booking for{" "}
              <b>{activity?.name}</b> on <b>{form.date}</b> has been confirmed.
            </p>
            <p className="mt-2">Number of People: {form.people}</p>
            <p className="mt-2 text-gray-600">
              Reference: <b>{confirmed.reference}</b>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center w-full">
        <div className="max-w-xl mx-auto  p-6 bg-white shadow-lg shadow-black rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Book: {activity?.name || "Activity"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="number"
              name="people"
              min="1"
              max="20"
              value={form.people}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
