import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if mobile menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <img
            src="/images/wfa-logo-final.png"
            alt="WFA Hearing Centre Logo"
            className="w-24 h-auto"
          />
        </a>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-primary hover:text-accent font-montserrat"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-primary hover:text-accent font-montserrat"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-primary hover:text-accent font-montserrat"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-primary hover:text-accent font-montserrat"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-primary hover:text-accent font-montserrat"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu (visible when the hamburger icon is clicked) */}
        {isOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col space-y-4 text-center">
            <li>
              <a
                href="#home"
                className="text-primary hover:text-accent font-montserrat"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-primary hover:text-accent font-montserrat"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-primary hover:text-accent font-montserrat"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-primary hover:text-accent font-montserrat"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-primary hover:text-accent font-montserrat"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
