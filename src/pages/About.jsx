import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

function About() {
  return (
    <>
      <section
        className="h-[60vh] w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1755201840/vicfalls5_p7iohx.jpg")`,
        }}
      ></section>

      <section className="p-6 bg-[#ffffff] min-h-screen flex flex-col items-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-white shadow-lg p-6 text-center text-black font-bold">
            <h1 className="text-2xl mb-2">Safety First</h1>
            <p className="text-sm font-normal">
              Every journey is guided with unwavering commitment to the safety
              and comfort of our guests.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 text-center text-black font-bold">
            <h1 className="text-2xl mb-2">Safety First</h1>
            <p className="text-sm font-normal">
              Every journey is guided with unwavering commitment to the safety
              and comfort of our guests.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 text-center text-black font-bold">
            <h1 className="text-2xl mb-2">Safety First</h1>
            <p className="text-sm font-normal">
              Every journey is guided with unwavering commitment to the safety
              and comfort of our guests.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-100 space-y-4">
            <h2 className="text-2xl md:text-[2rem] font-semibold text-black">
              About Us
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

      <section className="p-6 bg-[#c9c1c1] min-h-screen flex flex-col items-center">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-6xl mt-8 gap-6 md:gap-8">
          <div className="w-full md:w-1/2 h-[250px] md:h-[400px]">
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
            <p className="text-base md:text-xs">
              At the heart of Awande Africa Expeditions is Bulisani “Buli ”
              Mathe—a man whose smile can light up a room and whose passion for
              the wild runs as deep as Africa’s rivers. A professional guide of
              the highest calibre, Buli has undergone some of the most rigorous
              and respected safari training on the continent. Over the years, he
              has led unforgettable expeditions across Tanzania, Botswana,
              Zambia, Namibia, and, most prominently, the vast and diverse
              landscapes of Zimbabwe. With nearly two decades of guiding
              experience, Bulisani has walked the great wildernesses of Hwange,
              Gonarezhou, and Mana Pools National Parks, sharing close
              encounters with Africa’s iconic wildlife while ensuring safety,
              respect, and ethical conduct at every step. His expertise is
              rooted in years of learning from some of Africa’s legendary
              guides, blending technical skill with an innate ability to read
              the land and its rhythms.
            </p>
            <p className="text-base md:text-xs">
              Beyond guiding, Bulisan is a wildlife photographer, storyteller,
              and cultural ambassador. His time as a Savannah Guide at Disney’s
              Animal Kingdom Lodge in the USA gave him a global platform to
              share Africa’s wonders, fostering curiosity and appreciation among
              audiences from around the world. Whether on foot, in a vehicle, or
              around a campfire, his stories bring the African bush to life
              ;rich with knowledge, humour, and insight. To walk with Buli is to
              see Africa through the eyes of someone who not only knows its
              secrets but loves them deeply. You may leave with rare wildlife
              sightings, a deeper cultural understanding, or even a newfound
              appreciation for the humble yet fascinating art of “dung-ology.”
              With him, every safari is more than a trip it’s a
              life-shaping journey.
            </p>
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
