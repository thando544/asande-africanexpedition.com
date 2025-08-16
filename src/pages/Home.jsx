import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { tours } from "../utils/data";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Banner />

      <section className="bg-[#f0f0f0] flex flex-col justify-center items-center text-center py-10">
        <div className="w-full flex flex-col justify-center md:items-center lg:items-center items-start md:h-[50vh] lg:h-[50vh] h-[70vh] pb-[3rem] text-center px-[2em] space-y-[1em]">
          <h1 className="text-black text-[1.2rem] font-bold">About Us</h1>
          <p className="md:text-center lg:text-center text-left">
            Being a safari guide, for more than 17years of experience in
            conducting walking safaris gives me the confidence for ensuring a
            safe, knowledgeable, and unforgettable adventure. Here’s why you
            should consider me as your preferred choice:
          </p>
          <Link
            to="/about"
            className="bg-red-700 h-[45px] w-[130px] text-white flex justify-center items-center hover:underline transition duration-550"
          >
            ReadMore
          </Link>
        </div>
      </section>

      <section className="lg:h-[100vh] h-auto">
        <h1 className="pl-6 font-bold text-[1.2rem] pt-2">
          Our Recent Activities
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white  shadow-lg overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-48 w-full object-cover scale-90 hover:scale-100"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{tour.title}</h3>
                <p className="text-gray-600">{tour.description}</p>
                <Link
                  to={`/tour/${tour.id}`}
                  className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 hover:underline "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>
      <WhyChooseUs />
    <Testimonials />
    </>
  );
}

export default Home;
