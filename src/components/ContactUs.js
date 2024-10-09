import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    // Send form data to EmailJS
    emailjs
      .send(
        'wfahearing', // Replace with your EmailJS service ID
        'template_a6607m6', // Replace with your EmailJS template ID
        formData,
        '9s2k9LT0u5M8Kjtwh' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', mobile: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send the message.');
        }
      );
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent min-h-screen flex items-center justify-center py-16 animate-slide-up duration-[5000ms] ease-out">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="text-center md:text-left hover-section animate-fadeIn">
          <h4 className="text-lg font-semibold mb-4 font-body">Reach Us At</h4>
          <p className="mb-2 font-body"><strong>Phone:</strong> +255 755 754 175</p>
          <p className="mb-2 font-body"><strong>Email:</strong> info@wfahearing.co.tz</p>
          <p className="mb-2 font-body"><strong>Address:</strong> Chole Plaza 1st Floor, Bakhresa - Masaki, Dar es Salaam</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="bg-gray-100 p-4 rounded-lg shadow-lg hover-section animate-fadeIn">
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm mb-1 font-body">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm mb-1 font-body">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="block text-sm mb-1 font-body">Mobile</label>
            <input
              type="text"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm mb-1 font-body">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg h-24"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 font-body text-sm"
          >
            Send Message
          </button>

          {/* Display status message */}
          {status && <p className="mt-4 text-sm font-body">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
