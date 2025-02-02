"use client"; 

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <nav className="bg-white-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold">
          John Yasner
        </Link>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (visible on medium and larger screens) */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="text-black hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black hover:text-gray-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu (visible on small screens when toggled) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="text-black hover:text-gray-600 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-gray-600 block">
                AboutMe
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-black hover:text-gray-600 block">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-gray-600 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;