import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4";
import placeholderImage1 from "../assets/img.webp"; // Pehli image
import placeholderImage2 from "../assets/img2.webp"; // Doosri image

import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [currentStage, setCurrentStage] = useState(0); // 0: Image1, 1: Image2, 2: Video
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu for small screens

  useEffect(() => {
    let timer;

    if (currentStage === 0) {
      timer = setTimeout(() => setCurrentStage(1), 3000); // 3 seconds for Image1
    } else if (currentStage === 1) {
      timer = setTimeout(() => setCurrentStage(2), 3000); // 3 seconds for Image2
    } else if (currentStage === 2) {
      timer = setTimeout(() => setCurrentStage(0), 12000); // 12 seconds for Video
    }

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [currentStage]);

  return (
    <div className="relative h-screen w-full">
      {/* Conditional Rendering based on the currentStage */}
      {currentStage === 0 && (
        <img
          src={placeholderImage1}
          alt="First Placeholder"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {currentStage === 1 && (
        <img
          src={placeholderImage2}
          alt="Second Placeholder"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      {
currentStage === 2 && (
  <video
    src={video}
    autoPlay
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
    onEnded={() => setCurrentStage(0)}
  >
    Your browser does not support the video tag.
  </video>
)}

{/* Navbar Code */}
<div className="group relative">
  {/* Large Screen Navbar */}
  <div className="group relative">
  {/* Large Screen Navbar */}
  <nav className="hidden md:block absolute top-10 w-full text-white flex justify-between items-center px-6 py-7 z-10 group-hover:bg-black group-hover:text-white transition duration-300">
    {/* Left Section: Logo and Links */}
    <div className="flex items-center gap-4 h-6">
      <div className="text-2xl font-semibold font-serif">alphalete</div>
      <span className="text-lg text-gray-300">Woman</span>
      <span className="text-lg text-gray-300">Man</span>
    </div>
    
    {/* Right Section: Icons Aligned to the End */}
    <div className="flex items-center justify-end gap-3">
      <FaSearch className="text-xl hover:text-white cursor-pointer" />
      <div className="relative">
        <FaShoppingCart className="text-xl hover:text-white cursor-pointer" />
      </div>
    </div>
  </nav>
</div>


  {/* Secondary Bar */}
  <nav className="hidden md:flex absolute top-0 left-0 w-full bg-cover bg-center text-white justify-between items-center px-6 py-2 z-10 border-b border-gray-300 group-hover:bg-black group-hover:text-white transition duration-300 group-hover:border-gray-700">
    <div className="font-semibold">
      Women Best Seller • Men Best Seller
    </div>
    <ul className="flex text-white">
      <li className="flex items-center">
        <a
          href="#help"
          className="hover:text-white py-2 px-4 transition duration-200"
        >
          Help
        </a>
        <span className="text-gray-300">|</span>
      </li>
      <li className="flex items-center">
        <a
          href="#join"
          className="hover:text-white py-2 px-4 transition duration-200"
        >
          Join Us
        </a>
        <span className="text-gray-300">|</span>
      </li>
      <li className="flex items-center">
        <a
          href="#signin"
          className="hover:text-white py-2 px-4 transition duration-200"
        >
          Sign In
        </a>
      </li>
    </ul>
  </nav>

  {/* Small Screen Navbar */}
  <div className="md:hidden flex items-center justify-between px-6 py-4 bg-black text-white">
    <div className="text-2xl font-semibold font-serif">alphalete</div>
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-2xl focus:outline-none"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Small Screen Menu */}
  {menuOpen && (
    <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col px-6 py-4 space-y-4 z-20">
      <a href="#" className="hover:text-gray-300">
        Woman
      </a>
      <a href="#" className="hover:text-gray-300">
        Man
      </a>
      <a href="#help" className="hover:text-gray-300">
        Help
      </a>
      <a href="#join" className="hover:text-gray-300">
        Join Us
      </a>
      <a href="#signin" className="hover:text-gray-300">
        Sign In
      </a>
    </div>
  )}
</div>
</div>
);
};

export default Navbar;
