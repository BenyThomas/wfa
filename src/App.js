import React from 'react';
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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section id="services">
        <Services />
      </Section>
      <Section id="hearing-test">
        <HearingTest />
      </Section>
      <Section id="testimonials">
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
