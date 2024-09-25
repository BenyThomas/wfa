import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100 animate-slide-up duration-[4000ms] ease-out">
  <div className="container mx-auto px-4 md:px-8 text-center animate-fadeIn hover-section">
    <h2 className="text-4xl font-heading mb-8">About Us</h2>
    <p className="text-lg mb-8 text-gray-700 font-body leading-relaxed">
      At WFA Hearing Centre, we are dedicated to providing innovative hearing solutions
      that improve the quality of life for individuals with hearing loss.
    </p>
    <p className="text-lg mb-8 text-gray-700 font-body leading-relaxed">
      Our mission is to offer the latest technology in hearing aids and personalized 
      care for each client.
    </p>
  </div>
</section>
  );
};

export default AboutUs;
