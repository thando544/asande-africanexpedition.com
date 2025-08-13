import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

function About() {
  return (
    <>
      <section
        className="h-[79vh] w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1754751728/IMG-20250809-WA0032_uurmzb.jpg")`,
        }}
      ></section>
      <section className="p-6 bg-[#c9c1c1] min-h-screen flex flex-col items-center">
        <h1 className="p-8 text-4xl md:text-6xl font-semibold text-green-900 border-b-4 border-dotted text-center">
          About Us
        </h1>

        <p className="w-full md:w-[70%] text-center text-green-700 mt-4 text-base md:text-sm">
          Awande is company based in Victoria Falls Zimbabwe onwed and run by a
          Fully licened Professional Guide of Zimbabwe. A member of the
          Professional Hunters and Guides Association (ZPGHA) of good standing
          and an association thats upholds ethics to a high standard.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-1/2 h-[250px] md:h-[400px]">
            <img
              src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749959/IMG-20250809-WA0199_xfqf6e.jpg"
              alt="about us"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-[2.5rem] font-semibold text-green-900">
              Meet Your Guide - Bulisani Mathe
            </h2>
            <p className="text-base md:text-xs">
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
            </p>
            <p className="text-base md:text-xs">
              For almost two decades, he has indulged in research and
              presentation on nature oriented talks that landed him roles, in
              places like World Disneys Animal Kingdom Lodge as a Savanah Guide.
              He was taught all his knowledge from experience with the well
              known safari legends of Africa. Walking safari license are part of
              his qualifications which he takes pride in conducting, with the
              upmost details of ethics and enthusiasm. An interaction with him
              will expose you to African culture, have an impact of a life time
              and a deeper understanding of how nature's cycle works, perhaps
              you may become a dung-ologist. There is no better way to sum up
              any safari experience without the expertise of an all-round safari
              guide like him.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 bg-[#c9c1c1] min-h-screen flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-100 space-y-4">
            <h2 className="text-2xl md:text-[2rem] font-semibold text-green-900">
              Meet Your Guide - Adam Jones
            </h2>
            <p className="text-base md:text-lg lg:text-xs">
              Born and raised in Victoria Falls, it was during weekends at his
              father’s camp on the Zambezi River and family camping trips in
              Hwange, that Adam’s fascination for wildlife and passion for the
              Zimbabwean bush began to grow. After ten years in the industry, he
              has built up an extensive knowledge base and gained invaluable
              experience within many of Zimbabwe’s National Parks. Inzila is an
              extension of Adam’s fervent passion, and it gives him great pride
              to share with you the hidden gems which he has discovered over the
              years working in Hwange National Park.
            </p>
          </div>

          <div className="w-full md:w-1/1 h-[250px] md:h-[600px]">
            <img
              src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754749959/IMG-20250809-WA0199_xfqf6e.jpg"
              alt="about us"
              className="w-full h-full object-cover shadow-lg"
            />
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
