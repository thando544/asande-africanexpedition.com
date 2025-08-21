import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex backdrop:blur-2xl bg-black/60 h-[13vh] justify-between items-center w-full px-[2rem] py-2 fixed  top-0 z-50 ">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754755594/IMG-20250809-WA0269_mviipe-removebg-preview_uysk4f.png"
          alt="awande-african-logo"
          className="w-[90px]"
        />
      </Link>

      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul
        className={`flex-col md:flex-row md:flex items-center justify-center md:bg-transparent lg:bg-transparent md:py-0 lg:py-0 py-3 bg-black/70 space-x-0 md:space-x-4 text-orange-400 text-[1.2rem] font-semibold absolute md:static top-[107px] left-0 w-full md:w-auto z-90 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="p-2 md:p-0">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/activities" onClick={() => setIsOpen(false)}>
            Activities
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
     
        <li className="p-2 md:p-0">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
