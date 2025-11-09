import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import VFilmsLogo from "../assets/VFilmsLogo.png"; // your VFilms logo
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#FFFCFC] shadow-sm relative">
      {/* Left Side (Logo placeholder or text) */}
      <div className="flex items-center space-x-2">
        <img src={VFilmsLogo} alt="VFilms Logo" className="h-8" />
        {/* Add brand name or logo here */}
      </div>

      {/* Center Menu Links */}
      <ul
        className={`flex-col md:flex-row md:flex space-y-6 md:space-y-0 md:space-x-10 text-gray-800 font-medium absolute md:static left-0 w-full md:w-auto bg-[#FFFCFC] md:bg-transparent text-center py-8 md:py-0 transition-all duration-300 ${
          menuOpen ? "flex top-16" : "hidden md:flex"
        }`}
      >
       <Link to="/services"><li className="hover:text-orange-500 cursor-pointer">Services</li></Link>
       
        <Link to="/about"><li className="hover:text-orange-500 cursor-pointer">About Us</li></Link>
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Let's Talk Button */}
       <Link to="/contact"><button className="hidden md:flex items-center space-x-2 bg-[#F15A29] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#e34d1c] transition-all">
          <span>Let’s Talk</span>
          <Mail size={18} />
        </button></Link>

        {/* Toggle Icon (changes between X and hamburger brush) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="w-8 h-8"
              fill="none"
            >
              <path
                d="M5 5 L45 45 M45 5 L5 45"
                stroke="#0E1F33"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Brush Hamburger Icon (two strokes)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="w-8 h-8"
              fill="none"
            >
              <path
                d="M5 15 H45"
                stroke="#0E1F33"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M5 35 H45"
                stroke="#0E1F33"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
