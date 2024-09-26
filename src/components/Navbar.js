import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Import i18next for translation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if mobile menu is open
  const { i18n, t } = useTranslation(); // Translation hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Language switcher function
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
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

        {/* Dropdown Language Selector */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-primary hover:text-accent"
          >
            <FaGlobe className="text-2xl" /> {/* Language Icon */}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg">
              <button
                onClick={() => changeLanguage('en')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('sw')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Swahili
              </button>
            </div>
          )}
        </div>

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
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('home')} {/* Translated text for Home */}
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('services')} {/* Translated text for Services */}
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('testimonials')} {/* Translated text for Testimonials */}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('about_us')} {/* Translated text for About Us */}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('contact')} {/* Translated text for Contact */}
            </a>
          </li>
        </ul>

        {/* Mobile Menu (visible when the hamburger icon is clicked) */}
        {isOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col space-y-4 text-center font-semibold font-body">
            <li>
              <a
                href="#home"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('home')} {/* Translated text for Home */}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('services')} {/* Translated text for Services */}
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('testimonials')} {/* Translated text for Testimonials */}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('about_us')} {/* Translated text for About Us */}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('contact')} {/* Translated text for Contact */}
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
