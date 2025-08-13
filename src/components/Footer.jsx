import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001d00] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Awande African Expeditions </h2>
          <p className="text-sm text-gray-300">
            Experience the breathtaking beauty of Victoria Falls with guided
            tours, cultural insights, and unforgettable adventures.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/activities"
                className="hover:text-yellow-400 transition"
              >
                Activities
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Victoria Falls, Zimbabwe
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +263 77 123 4567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> res@awandeafricaexpeditions.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-950 py-4 lg:px-0 md:px-0 px-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Awande African Expedition Tours. All rights
        reserved.
      </div>
    </footer>
  );
}
