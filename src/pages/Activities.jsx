import React from 'react'

import { Link } from 'react-router-dom'
import { activities } from '../utils/activities';
function Activities() {
  return (
    <div className="bg-[#f0f0f0] min-h-screen p-6">
      <h1 className="text-center text-2xl font-bold mb-6">Our Activities</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-48 w-full object-cover scale-90 hover:scale-100"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                  <p className="mt-2 text-lg font-semibold text-red-600">
                    {activity.price}
                  </p>
                  <Link
                    to={`/tour/${activity.id}`}
                    className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 hover:underline rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Activities