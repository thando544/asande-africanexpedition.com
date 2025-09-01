import { useState } from "react";
import { Link } from "react-router-dom";
const activities = [
  {
    id: 2,
    name: "Devil's Pool",
    category: "Victoria Falls",
    image:
      "https://i.pinimg.com/736x/54/4d/f1/544df1ef2bcd37e068f06d3511661c28.jpg",
  },

  {
    id: 3,
    name: "Game Drive",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756422072/Unforgettable_Encounters__Exclusive_Luxury_Safari_Adventure_wefpoa.jpg",
  },

  {
    id: "4",
    name: "Sunrise cruise",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756423178/Float_down_the_Zambezi_on_a_sundowner_cruise___Timbuktu_Travel_rjzjx6.jpg",
  },

  {
    id: "5",
    name: "Dinner cruise",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1756239845/This_One_Tip_Will_Instantly_Upgrade_Your_Ibiza_Night_Out_Party_Like_a_VIP_Tonight_ckfki1.jpg",
  },

  {
    id: "6",
    name: "Bush dinner",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1756239352/Bush_dinner_at_the_Masai_Mara_Game_Reserve_ucze26.jpg",
  },
  {
    id: "7",
    name: "Bungee jump",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1756239352/Bungee_in_Victoria_Falls_cjj4ki.jpg",
  },

  {
    id: "8",
    name: "Whitewater rafting",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1756239372/Victoria_Falls_White_Water_Rafting_beqhxm.jpg",
  },
  {
    id: "9",
    name: "canoing",
    category: "Victoria Falls",
    image:
      "https://res.cloudinary.com/dmixvynoo/image/upload/v1756247952/download_wtvip3.jpg",
  },
  //safari
  {
    id: "10",
    name: "Walking safari",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756422729/Chikoko_Trails_-_Walking_in_South_Luangwa_zwol0l.jpg",
  },

  {
    id: "11",
    name: "Bird watching",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756422730/Birdwatching_in_Zimbabwe_qvwwcu.jpg",
  },

  {
    id: "12",
    name: "Night drive",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756422730/Late_night_safari_drives_a1d2im.jpg",
  },

  {
    id: "13",
    name: "Cultural tour",
    category: "Safari",
    image:
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1756422885/Safari_in_Tanzania_ffmxlk.jpg",
  },
];

const categories = ["All", "Safari",  "Victoria Falls"];

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
            className="bg-white shadow-md h-[480px]  overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-[320px] object-cover"
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
