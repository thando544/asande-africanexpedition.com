import React from 'react'
import {pictures} from "../utils/data1"
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <>
      <section
        className="h-[76vh] w-[100%] bg-center bg-cover"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1754749953/IMG-20250809-WA0174_xkc9bz.jpg")`,
        }}
      >
        <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center ">
          <h3 className="text-[5rem] text-white">Our Gallery</h3>
          <div className='flex justify-center items-center text-white text-lg'>
            <Link to="/">Home</Link>/Gallery
          </div>
        </div>
      </section>
      <div className=" flex flex-col text-center justify-center items-center pt-[4em] space-y-[2rem]">
        <h1 className="text-black md:text-6xl lg:text-6xl text-3xl border-dotted border-b-4 w-[50%] pb-[1rem] ">
         From Our Gallery
        </h1>
        <p>
          Enjoy our full collection of images. All wildlife shots taken by Adam
          Jones in Hwange National Park
        </p>
        <div className=" grid gap-2 sm:grid-cols-2 lg:grid-cols-3 md:p-[3em] p-[1rem] ">
          {pictures.map((pictures) => (
            <div key={pictures.id}>
              <img
                src={pictures.image}
                alt="{picture.title}"
                className="h-[320px] md:w-[450px] lg:w-[450px] w-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery