
import React from "react";

export default function CustomArrow({ onClick, direction }) {
  return (
    <div
      onClick={onClick}
      className={`absolute top-[70%] -translate-y-1/2 z-10 
        text-white md:hover:bg-white hover:bg-black  md:hover:text-black  border border-white
        w-10 h-10 rounded-full flex items-center justify-center 
        cursor-pointer shadow-lg
        ${direction === "next" ? "right-2" : "left-2"}`}
    >
      {direction === "next" ? "→" : "←"}
    </div>
  );
}
