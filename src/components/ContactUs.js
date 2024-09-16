import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Reach Us At</h4>
            <p className="mb-2"><strong>Phone:</strong> +255 755 754 175</p>
            <p className="mb-2"><strong>Email:</strong> info@wfahearing.co.tz</p>
            <p><strong>Address:</strong> Chole Plaza 1st Floor, Bakhresa - Masaki, Dar es Salaam</p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
            </div>
            <button type="submit" className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
