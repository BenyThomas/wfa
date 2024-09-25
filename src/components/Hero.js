import React from 'react';
const scrollToHearingTest = () => {
  document.getElementById('hearing-test').scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative h-screen bg-cover bg-center animate-slide-up duration-[4000ms] ease-out"
    >
      {/* Responsive background images for mobile and desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${window.innerWidth <= 768 
            ? '/images/bkgd-hero-hearingaids-mobile.jpg' 
            : '/images/bkgd-hero-hearingaids-desktop.jpg'})`
        }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-heading text-4xl font-bold mb-4 leading-tight">
            Better Hearing, Better Life
          </h1>
          <p className="font-body text-lg sm:text-xl mb-8 leading-relaxed">
            Providing innovative hearing solutions to improve your quality of life.
          </p>
          <button
            onClick={scrollToHearingTest}
            className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 font-body"
          >
            Discover Our Hearing Aids
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
