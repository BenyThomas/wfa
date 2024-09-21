import React from 'react';

const Contact = () => {
  return (
    <section
  className="relative bg-gradient-to-r from-primary to-accent h-screen flex items-center justify-center"
>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hover-section animate-fadeIn">
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
    <button type="submit" className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-110">
      Send Message
    </button>
  </form>
</div>
</section>

  );
};

export default Contact;
