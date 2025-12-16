import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";
import SafetySection from "../components/SafetySection";



function About() {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section
        className="h-[80vh] w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1755201840/vicfalls5_p7iohx.jpg")`,
        }}
      ></section>
      <SafetySection />
      <section className="p-6 bg-[#ffffff] min-h-screen flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-100 space-y-4">
            <h2 className="text-2xl md:text-[2rem] font-semibold text-black">
              About Us
            </h2>
            <p className="text-base md:text-lg lg:text-xs">
              As Awande African Expeditions we desire to inspire you with a deep
              connection with nature by offering exceptional, immersive
              experiences that celebrate the rich biodiversity and cultural
              heritage of the African wilderness. We envision a world where
              every traveler leaves with unforgettable memories, a greater
              appreciation for wildlife conservation, and a commitment to
              protecting these magnificent landscapes for future generations
            </p>
          </div>

          <div className="w-full md:w-1/1 h-[250px] md:h-[600px]">
            <img
              src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754751729/IMG-20250809-WA0041_k04zlh.jpg"
              alt="about us"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="p-6 bg-[#c9c1c1] min-h-screen flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-1/3 h-[250px] md:h-[400px]">
            <img
              src="https://res.cloudinary.com/dmixvynoo/image/upload/v1755206425/bulisani_cnyrxj.jpg"
              alt="about us"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-[2.5rem] font-semibold text-black">
              Meet Your Guide - Bulisani Mathe
            </h2>

            <p className="text-base md:text-xs w-full">
              A wildlife photographer, story teller, nature enthusiasts and a
              smile that lights up a room. Bulisani Mathe (Buli) is a
              Professional Guide from Zimbabwe. Who has gone through the intense
              training of the highest standards of Guiding in Africa. Having led
              safaris in Tanzania, Botswana, Zambia, Namibia and of course
              Zimbabwe at large. He has had the opportunity to lead walking
              safaris of an epic manner the big areas of Zimbabwe, Hwange,
              Gonarezhou, Manapools national parks just to mention a few. It has
              always been his passion to understand nature, culture and share
              the information in Africa and beyond.
              {!isExpanded && <span className="text-gray-600">... </span>}
            </p>

            {isExpanded && (
              <p className="text-base md:text-xs">
                For almost two decades, he has indulged in research and
                presentation on nature oriented talks that landed him roles, in
                places like World Disneys Animal Kingdom Lodge as a Savanah
                Guide. He was taught all his knowledge from experience with the
                well known safari legends of Africa. Walking safari license are
                part of his qualifications which he takes pride in conducting,
                with the upmost details of ethics and enthusiasm. An interaction
                with him will expose you to African culture, have an impact of a
                life time and a deeper understanding of how nature's cycle
                works, perhaps you may become a dung-ologist. There is no better
                way to sum up any safari experience without the expertise of an
                all-round safari guide like him. Sources [1] Conservation in
                Zimbabwe: A Nat Hab Guide Story
                https://www.youtube.com/watch?v=gqhOcB2B5YI [2] Sustainable
                safari living at Mpala Jena
                https://www.travelweekly.com/Middle-East-Africa-Travel/Sustainable-safari-living-at-Mpala-Jena
                [3] Bulisani Mathe - Managing Director - Awande African ...
                https://zw.linkedin.com/in/bulisani-mathe-a9571677 [4] Bulisani
                Mathe https://www.facebook.com/bulisani.mathe/?locale=mt_MT [5]
                Bulisani Mathe Email & Phone Number | Natural Habitat ...
                https://rocketreach.co/bulisani-mathe-email_200701715 [6]
                Natural Habitat Adventures
                https://twitter.com/NatHab/status/1613190765449994242 [7]
                Bulisani Mathe (@bulisanimathe)
                https://www.instagram.com/bulisanimathe/ [8] Bulisani Mathe
                https://www.facebook.com/bulisani.mathe/?locale=cy_GB
              </p>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-red-600 hover:underline font-medium"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#93ae62] h-[90vh] flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="lg:text-[2.4em]">Gallery</h1>
        <p>
          Enjoy our collection of photos; wildlife images taken by Adam Jones.
        </p>
        <Link
          to="/gallery"
          className="text-white bg-[#2b3a0e] p-[9px] rounded-[9px] hover:underline"
        >
          Explore More Images
        </Link>
        <div className="w-full max-w-6xl mt-8">
          <ImageSlider />
        </div>
      </section>
    </>
  );
}

export default About;
