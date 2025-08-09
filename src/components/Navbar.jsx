import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-transparent flex justify-between items-center w-full p-[2rem] absolute top-0">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dmixvynoo/image/upload/v1754755594/IMG-20250809-WA0269_mviipe-removebg-preview_uysk4f.png"
          alt="awande-african-logo"
          className='w-[120px]'
        />
      </Link>
      <ul className="flex items-center justify-center space-x-4 text-white text-[1.2rem] font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar