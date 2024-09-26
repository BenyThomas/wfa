import React from 'react';

const Contact = () => {
  return (
    <section
  className="bg-gradient-to-r from-primary to-accent min-h-screen flex items-center justify-center py-16 animate-slide-up duration-[5000ms] ease-out"
>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
    <div className="text-center md:text-left hover-section animate-fadeIn">
    <h4 className="text-lg font-semibold mb-4 font-body">Reach Us At</h4>
    <p className="mb-2 font-body"><strong>Phone:</strong> +255 755 754 175</p>
    <p className="mb-2 font-body"><strong>Email:</strong> info@wfahearing.co.tz</p>
    <p className="mb-2 font-body"><strong>Address:</strong> Chole Plaza 1st Floor, Bakhresa - Masaki, Dar es Salaam</p>
  </div>

  {/* Contact Form */}
  <form className="bg-gray-100 p-6 rounded-lg shadow-lg hover-section animate-fadeIn">
    <div className="mb-4">
      <label htmlFor="name" className="block text-lg mb-2 font-body">Name</label>
      <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-lg mb-2 font-body">Email</label>
      <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-lg mb-2 font-body">Message</label>
      <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
    </div>
    <button type="submit" className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 font-body">
      Send Message
    </button>
  </form>
</div>
</section>

  );
};

export default Contact;
