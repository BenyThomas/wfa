import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="mt-2">+255 755 754 175</p>
          <p>info@wfahearing.co.tz</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-white text-2xl"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-white text-2xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-white text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Visit Us</h4>
          <p className="mt-2">Chole Plaza 1st Floor, Bakhresa - Masaki, Dar es Salaam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
