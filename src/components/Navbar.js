import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Import i18next for translation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if mobile menu is open
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // Track if About Us dropdown is open
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Track if Language dropdown is open
  const { i18n, t } = useTranslation(); // Translation hook

  // References for detecting clicks outside dropdowns
  const aboutDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAboutDropdownOpen(false); // Close dropdowns when menu is toggled
    setIsLanguageDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsLanguageDropdownOpen(false); // Close the language dropdown if About dropdown is opened
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsAboutDropdownOpen(false); // Close the About Us dropdown if Language dropdown is opened
  };

  // Language switcher function
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false); // Close the language dropdown after selection
    setIsMenuOpen(false); // Close the mobile menu after selecting language
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
        setIsLanguageDropdownOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll to section and close menu
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the mobile menu after navigation
    setIsAboutDropdownOpen(false); // Close About dropdown
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <img
            src="/images/logo.png"
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
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
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

          {/* Equipment Link */}
          <li>
            <a
              href="#equipment"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('equipment')} {/* Translated text for Equipment */}
            </a>
          </li>

          {/* Dropdown for About Us and Testimonials */}
          <li className="relative" ref={aboutDropdownRef}>
            <button
              onClick={toggleAboutDropdown}
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('about_us')} {/* Translated text for About Us */}
            </button>
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                    onClick={() => scrollToSection('about')}
                  >
                    {t('about_us')}
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                    onClick={() => scrollToSection('technology')}
                  >
                    {t('technology')}
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                    onClick={() => scrollToSection('testimonials')}
                  >
                    {t('testimonials')}
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="#contact"
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              {t('contact')} {/* Translated text for Contact */}
            </a>
          </li>

          {/* Language Selector (Desktop only) */}
          <li className="relative" ref={languageDropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="text-primary hover:text-accent font-montserrat font-semibold font-body"
            >
              <FaGlobe className="inline-block mr-1" /> {/* Language Icon */}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('sw')}
                  className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                >
                  Swahili
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu (visible when the hamburger icon is clicked) */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col space-y-4 text-center font-semibold font-body z-40">
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
                href="#equipment"
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleMenu}
              >
                {t('equipment')} {/* Translated text for Equipment */}
              </a>
            </li>

            {/* Mobile Dropdown for About Us */}
            <li>
              <button
                className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                onClick={toggleAboutDropdown}
              >
                {t('about_us')} {/* Translated text for About Us */}
              </button>
              {isAboutDropdownOpen && (
                <ul className="bg-white shadow-lg">
                  <li>
                    <a
                      href="#about"
                      className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                      onClick={() => scrollToSection('about')}
                    >
                      {t('about_us')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#technology"
                      className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                      onClick={() => scrollToSection('technology')}
                    >
                      {t('technology')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-primary hover:text-accent font-montserrat font-semibold font-body"
                      onClick={() => scrollToSection('testimonials')}
                    >
                      {t('testimonials')}
                    </a>
                  </li>
                </ul>
              )}
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

            {/* Language Selector in Mobile Menu */}
            <li>
              <button
                onClick={toggleLanguageDropdown}
                className="text-primary hover:text-accent font-montserrat font-semibold font-body flex items-center justify-center"
              >
                <FaGlobe className="inline-block mr-1" /> {/* Language Icon */}
                {t('language')}
              </button>
              {isLanguageDropdownOpen && (
                <ul className="bg-white shadow-lg">
                  <li>
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        toggleMenu(); // Close menu after language selection
                      }}
                      className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        changeLanguage('sw');
                        toggleMenu(); // Close menu after language selection
                      }}
                      className="block px-4 py-2 text-primary hover:text-accent font-montserrat"
                    >
                      Swahili
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
