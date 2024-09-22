import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-2">+255 755 754 175</p>
            <p>info@wfahearing.co.tz</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook text-white text-2xl hover:text-accent transition duration-300"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter text-white text-2xl hover:text-accent transition duration-300"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram text-white text-2xl hover:text-accent transition duration-300"></i>
              </a>
            </div>
          </div>

          {/* Visit Us Section */}
          <div>
            <h4 className="text-lg font-semibold">Visit Us</h4>
            <p className="mt-2">Chole Plaza 1st Floor, Bakhresa - Masaki, Dar es Salaam</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
