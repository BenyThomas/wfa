import React from 'react';
import { useTranslation } from 'react-i18next';

const scrollToHearingTest = () => {
  document.getElementById('technology').scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const { t } = useTranslation(); // Hook for translation

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
            {t('hero_title')} {/* Translation key for the title */}
          </h1>
          <p className="font-body text-lg sm:text-xl mb-8 leading-relaxed">
            {t('hero_subtitle')} {/* Translation key for the subtitle */}
          </p>
          <button
            onClick={scrollToHearingTest}
            className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 font-body"
          >
            {t('hero_button')} {/* Translation key for the button */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
