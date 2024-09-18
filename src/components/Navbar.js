import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Add the logo image */}
        <a href="#home">
          <img
            src="/images/wfa-logo-final.png"
            alt="WFA Hearing Centre Logo"
            className="w-24 h-auto"  // Adjust the width as needed
          />
        </a>

        <ul className="flex space-x-6">
          <li><a href="#home" className="text-primary hover:text-accent transition duration-300 ease-in-out">Home</a></li>
          <li><a href="#services" className="text-primary hover:text-accent transition duration-300 ease-in-out">Services</a></li>
          <li><a href="#testimonials" className="text-primary hover:text-accent transition duration-300 ease-in-out">Testimonials</a></li>
          <li><a href="#about" className="text-primary hover:text-accent transition duration-300 ease-in-out">About Us</a></li>
          <li><a href="#contact" className="text-primary hover:text-accent transition duration-300 ease-in-out">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
