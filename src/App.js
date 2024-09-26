import React from 'react';
import { useTranslation } from 'react-i18next'; // Only use useTranslation for changing languages
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HearingTest from './components/HearingTest';
import WhatsAppButton from './components/WhatsAppButton';
import Section from './components/Section';
import './index.css';
import './App.css';
import './i18n'; // Initialize i18n

function App() {
  const { i18n } = useTranslation(); // Only keep i18n since you're using it for the language switcher

  // Language switcher function
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Navbar/>
      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('sw')}>Swahili</button>
      </div>
      <Hero />
      <Section id='services'>
        <Services />
      </Section>
      <Section id="hearing-test">
        <HearingTest />
      </Section>
      <Section id='testimonials'>
        <Testimonials />
      </Section>
      <Section id="about">
        <AboutUs />
      </Section>
      <Section id="contact">
        <ContactUs />
      </Section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
