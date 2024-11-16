"use client";

import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-red-700 text-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <Link href="#">PORTFOLIO</Link>
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#home"
            className="hover:bg-red-900 px-4 py-2 rounded transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:bg-red-900 px-4 py-2 rounded transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:bg-red-900 px-4 py-2 rounded transition"
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="hover:bg-red-900 px-4 py-2 rounded transition"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:bg-red-900 px-4 py-2 rounded transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-700 text-white px-6 py-4">
          <Link href="#home" className="block py-2 hover:bg-red-900 rounded">
            Home
          </Link>
          <Link href="#about" className="block py-2 hover:bg-red-900 rounded">
            About
          </Link>
          <Link href="#projects" className="block py-2 hover:bg-red-900 rounded">
            Projects
          </Link>
          <Link
            href="#services"
            className="block py-2 hover:bg-red-900 rounded"
          >
            Services
          </Link>
          <Link href="#contact" className="block py-2 hover:bg-red-900 rounded">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
