import React from 'react'
import {pictures} from "../utils/data1"

function Gallery() {
  return (
    <>
      <section
        className="h-[76vh] w-[100%] bg-center bg-cover"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1754749953/IMG-20250809-WA0174_xkc9bz.jpg")`,
        }}
      ></section>
      <div className=" flex flex-col text-center justify-center items-center pt-[4em] space-y-[2rem]">
        <h1 className="text-green-900 md:text-6xl lg:text-6xl text-3xl border-dotted border-b-4 w-[30%] pb-[1rem] ">Gallery</h1>
        <p>
          Enjoy our full collection of images. All wildlife shots taken by Adam
          Jones in Hwange National Park
        </p>
        <div className=" grid gap-2 sm:grid-cols-2 lg:grid-cols-3 p-[3em] ">
          {pictures.map((pictures) => (
            <div key={pictures.id}>
              <img
                src={pictures.image}
                alt="{picture.title}"
                className="h-[320px] w-[450px] object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery