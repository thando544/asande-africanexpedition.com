import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#001d00] flex justify-between items-center w-full px-[2rem] h-[14vh] ">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754755594/IMG-20250809-WA0269_mviipe-removebg-preview_uysk4f.png"
          alt="awande-african-logo"
          className="w-[120px]"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="text-white text-3xl bg-[#001d00] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu Links */}
      <ul
        className={`flex-col md:flex-row md:flex items-center justify-center space-x-0 md:space-x-4 text-white text-[1.2rem] font-semibold absolute md:static top-[80px] left-0 w-full md:w-auto bg-[#001d00] md:bg-[#001d00] z-90 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="p-2 md:p-0">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/activities">Activities</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
