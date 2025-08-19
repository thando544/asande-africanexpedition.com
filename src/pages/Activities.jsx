import { useState } from "react";
import { Link } from "react-router-dom";
const activities = [
  {
    id: 1,
    name: "Bungee Jumping",
    category: "Adventure",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614310/IMG-20250818-WA0038_j0ws4p.jpg",
  },
  {
    id: 2,
    name: "White-water Rafting",
    category: "Adventure",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614309/IMG-20250818-WA0039_kqqcfs.jpg",
  },
  {
    id: 3,
    name: "Helicopter Flight (Flight of Angels)",
    category: "Adventure",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614308/IMG-20250818-WA0040_t8frmu.jpg",
  },
  {
    id: 4,
    name: "Zambezi Sunset Cruise",
    category: "Water",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614307/IMG-20250818-WA0042_lkgfea.jpg",
  },
  {
    id: 5,
    name: "Canoeing on Upper Zambezi",
    category: "Water",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614307/IMG-20250818-WA0041_kax5pg.jpg",
  },
  {
    id: 6,
    name: "Game Drive (Zambezi National Park)",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614301/IMG-20250818-WA0049_llmtti.jpg",
  },
  {
    id: 7,
    name: "Walking Safari",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614306/IMG-20250818-WA0043_uizcsz.jpg",
  },
  {
    id: 8,
    name: "Chobe Day Trip (Botswana)",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614306/IMG-20250818-WA0045_rt8pqr.jpg",
  },
  {
    id: 9,
    name: "Village Cultural Tour",
    category: "Cultural",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614306/IMG-20250818-WA0045_rt8pqr.jpg",
  },
  {
    id: 10,
    name: "Zip Line",
    category: "Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614306/IMG-20250818-WA0044_lmfrfz.jpg",
  },
  {
    id: 11,
    name: "Gorge Swing",
    category: "Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1755614299/IMG-20250818-WA0054_odg1is.jpg",
  },
];

const categories = ["All", "Adventure", "Safari", "Water", "Cultural", "Falls"];

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredActivities =
    selectedCategory === "All"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  return (
    <section className="p-6 max-w-7xl mx-auto pt-[7rem]">
      <h1 className="text-3xl font-bold text-center mb-6">
        Victoria Falls Activities
      </h1>

    
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border font-medium ${
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{activity.name}</h2>
              <p className="text-sm text-gray-500">{activity.category}</p>
              <Link to={`/booking/${activity.id}`}>
                <button className="mt-3 px-4 py-2 bg-red-600 text-white text-sm  hover:bg-red-700">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
