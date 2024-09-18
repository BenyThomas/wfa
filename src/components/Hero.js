import React from 'react';

const scrollToHearingTest = () => {
    document.getElementById('hearing-test').scrollIntoView({ behavior: 'smooth' });
  };

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/images/bkgd-hero-hearingaids-desktop.jpg")' }}
    >
      {/* Add a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <div className="text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-rockwell mb-4">Better Hearing, Better Life</h1>
        <p className="text-md sm:text-lg mb-8">Providing innovative hearing solutions to improve your quality of life.</p>
        <button onClick={scrollToHearingTest} className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-110">
            Discover Our Hearing Aids
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
