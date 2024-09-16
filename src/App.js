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
import './index';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <section id='services'>
        <Services/>
      </section>
      <section id="hearing-test">
        <HearingTest />
      </section>
      <section id='testimonials'>
        <Testimonials/>
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
