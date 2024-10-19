import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [startSliding, setStartSliding] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which service is expanded

  // Delay the sliding animation to start after 10 seconds
  useEffect(() => {
    AOS.init({duration: 1000,delay: 100,once: true,}); 
    const timer = setTimeout(() => {
      setStartSliding(true);
    }, 10000); // Start sliding after 10 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Toggle the visibility of more details when "Learn More" is clicked
  const handleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 animate-slide-up duration-1000 ease-out">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hover-section font-heading">Services We Offer</h2>
          <p className="font-body text-lg text-gray-600 hover-section font-body">At WFA HEARING CENTER , we provide a wide range of hearing assessment services designed to accurately diagnose and address auditory and vestibular concerns. Our experienced team employs advanced technology and techniques to ensure comprehensive evaluations and personalized care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Video Otoscopy */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/otoscopy.jpg" alt="Service 1" className="w-1/2 h-full object-cover" />
                <img src="/images/otoscopy.jpg" alt="Service 1-2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Video Otoscopy</h3>
            <p className="text-gray-600 mt-2 font-body">Utilize a video otoscope to visually examine the ear canal and eardrum for potential issues.</p>
            
            {expandedIndex === 1 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Diagnosis:</strong> Identify earwax buildup, infections, or perforations in the eardrum.</li>
                  <li><strong>Real-time Examination:</strong> View live ear conditions for better communication.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(1)}
            >
              {expandedIndex === 1 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Pure Tone Audiometry */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/IMG_9165.JPG" alt="Service 2" className="w-1/2 h-full object-cover" />
                <img src="/images/IMG_9165.JPG" alt="Service 2-2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Pure Tone Audiometry</h3>
            <p className="text-gray-600 mt-2 font-body">Evaluate hearing sensitivity and identify any hearing loss using standard hearing tests.</p>
            
            {expandedIndex === 2 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Soundproof Environment:</strong> Conducted in controlled settings for accuracy.</li>
                  <li><strong>Hearing Sensitivity:</strong> Measure hearing thresholds across various frequencies.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(2)}
            >
              {expandedIndex === 2 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Tympanometry */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
              <img src="/images/tym.jpg" alt="Service 3" className="w-1/2 h-full object-cover" />
              <img src="/images/tym.jpg" alt="Service 3-2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Tympanometry</h3>
            <p className="text-gray-600 mt-2 font-body">Measure eardrum mobility and middle ear pressure for accurate diagnosis.</p>
            
            {expandedIndex === 3 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Middle Ear:</strong> Assess conditions like fluid, perforations, or dysfunction.</li>
                  <li><strong>Non-invasive Test:</strong> Provides information about middle ear function quickly.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(3)}
            >
              {expandedIndex === 3 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* OAE Testing */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/OAE.JPG" alt="Service 4" className="w-1/2 h-full object-cover" />
                <img src="/images/OAE.jpg" alt="Service 4-2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">OAE Testing</h3>
            <p className="text-gray-600 mt-2 font-body">Assess cochlear function using otoacoustic emissions testing, ideal for all age groups.</p>
            
            {expandedIndex === 4 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Cochlear Function:</strong> Reliable screening tool, especially for infants and young children.</li>
                  <li><strong>Auditory Stimuli:</strong> Test sound wave response in the inner ear (cochlea).</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(4)}
            >
              {expandedIndex === 4 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Earwax Removal */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/IMG_9171.jpg" alt="Service 5" className="w-1/2 h-full object-cover" />
                <img src="/images/IMG_9171.jpg" alt="Service 5-2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Earwax Removal</h3>
            <p className="text-gray-600 mt-2 font-body">Professional earwax removal using safe and effective techniques.</p>
            
            {expandedIndex === 5 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Safe Removal:</strong> Prevent hearing loss and discomfort caused by excessive wax buildup.</li>
                  <li><strong>Clear Auditory Pathways:</strong> Ensure optimal hearing quality through regular cleanings.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(5)}
            >
              {expandedIndex === 5 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Speech and Language Evaluation and Therapy */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
              <img src="/images/SL1.jpg" alt="ABR Testing 1" className="w-1/2 h-full object-cover" />
                <img src="/images/SL2.jpg" alt="ABR Testing 2" className="w-1/2 h-full object-cover" />
                <img src="/images/SL3.jpg" alt="ABR Testing 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Speech and Language Evaluation and Therapy</h3>
            <p className="text-gray-600 mt-2 font-body">Comprehensive speech and language assessments to identify and address communication disorders.</p>
            
            {expandedIndex === 6 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Speech Therapy:</strong> Tailored therapy plans to improve speech clarity and language skills.</li>
                  <li><strong>Address Challenges:</strong> Articulation, fluency, and language comprehension support for children and adults.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(6)}
            >
              {expandedIndex === 6 ? "Show Less" : "Learn More"}
            </button>
          </div>
          {/* Auditory Brainstem Response (ABR) Testing */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/ABR.jpg" alt="ABR Testing 1" className="w-1/2 h-full object-cover" />
                <img src="/images/ABR.jpg" alt="ABR Testing 1" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Auditory Brainstem Response (ABR) Testing</h3>
            <p className="text-gray-600 mt-2 font-body">ABR testing evaluates the brain's response to sound and assesses the auditory pathways from the ear to the brainstem.</p>
            
            {expandedIndex === 7 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Purpose:</strong> Diagnose hearing loss and assess the function of the auditory nerve.</li>
                  <li><strong>Who Benefits:</strong> Ideal for individuals who cannot participate in traditional testing.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(7)}
            >
              {expandedIndex === 7 ? "Show Less" : "Learn More"}
            </button>
          </div>
          {/* Dizziness, Vertigo, and Balance Assessments */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/DZ-1.jpg" alt="Vertigo Assessment 1" className="w-1/2 h-full object-cover" />
                <img src="/images/DZ.jpg" alt="Vertigo Assessment 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Dizziness, Vertigo, and Balance Assessments</h3>
            <p className="text-gray-600 mt-2 font-body">We conduct specialized assessments for patients experiencing dizziness, vertigo, or balance issues.</p>
            
            {expandedIndex === 8 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Purpose:</strong> Diagnose vestibular disorders and develop treatment plans.</li>
                  <li><strong>Improvement Strategies:</strong> Provide strategies for improving balance and reducing symptoms.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(8)}
            >
              {expandedIndex === 8 ? "Show Less" : "Learn More"}
            </button>
          </div>
          {/* Accessories for Hearing Aids */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/AA-1.jpg" alt="Accessories 1" className="w-1/2 h-full object-cover" />
                <img src="/images/AA-2.jpg" alt="Accessories 2" className="w-1/2 h-full object-cover" />
                <img src="/images/AA.jpg" alt="Accessories 2" className="w-1/2 h-full object-cover" />
                <img src="/images/btr.jpg" alt="Accessories 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Accessories for Hearing Aids</h3>
            <p className="text-gray-600 mt-2 font-body">Enhance the functionality and connectivity of your hearing aids with our range of accessories.</p>
            
            {expandedIndex === 9 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Remote Controls:</strong> Discreet adjustments to volume and settings.</li>
                  <li><strong>Microphones:</strong> High-quality sound in various environments.</li>
                  <li><strong>Table Microphones:</strong> Ideal for group settings, improving communication in meetings.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(9)}
            >
              {expandedIndex === 9 ? "Show Less" : "Learn More"}
            </button>
          </div>
          {/* Hearing Aid Fitting & Programming */}
<div className="bg-white shadow-lg rounded-lg p-6 hover-section" data-aos="zoom-in" data-aos-delay="100">
  <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
    <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
      <img src="/images/fiting.jpg" alt="Hearing Aid Fitting 1" className="w-1/2 h-full object-cover" />
      <img src="/images/fiting-1.jpg" alt="Hearing Aid Fitting 2" className="w-1/2 h-full object-cover" />
    </div>
  </div>
  <h3 className="text-2xl font-semibold mt-4 font-body">Hearing Aid Fitting & Programming</h3>
  <p className="text-gray-600 mt-2 font-body">We offer professional hearing aid fitting and precise programming to ensure optimal sound quality and comfort.</p>
  
  {expandedIndex === 7 && (
    <div className="text-gray-600 mt-4 font-body">
      <ul className="list-disc list-inside">
        <li><strong>Customization:</strong> Each hearing aid is customized to meet your unique hearing needs for enhanced clarity and performance.</li>
        <li><strong>Expert Team:</strong> Our expert team ensures the hearing aid is fitted for maximum comfort and effectiveness.</li>
      </ul>
    </div>
  )}
  <button
    className="mt-4 text-primary hover:text-accent font-body"
    onClick={() => handleLearnMore(7)}
  >
    {expandedIndex === 7 ? "Show Less" : "Learn More"}
  </button>
</div>


        </div>
      </div>
    </section>
  );
};

export default Services;
