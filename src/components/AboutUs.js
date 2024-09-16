import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-8 text-gray-700">
          At WFA Hearing Centre, we are dedicated to providing innovative hearing solutions
          that improve the quality of life for individuals with hearing loss. With years of 
          experience in the field, our team is committed to helping people reconnect with their
          world through better hearing.
        </p>
        <p className="text-lg mb-8 text-gray-700">
          Our mission is to offer the latest technology in hearing aids and personalized 
          care for each client. From comprehensive hearing evaluations to fitting and 
          aftercare, we strive to make a difference in the lives of those we serve.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
