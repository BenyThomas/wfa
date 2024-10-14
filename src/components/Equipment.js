import React, { useState, useEffect } from 'react';

const EquipmentSection = () => {
  const [startSliding, setStartSliding] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which equipment is expanded

  // Delay the sliding animation to start after 10 seconds
  useEffect(() => {
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
          <h2 className="text-4xl font-bold mb-4 hover-section font-heading">Audiology Equipment We Offer</h2>
          <p className="font-body text-lg text-gray-600 hover-section font-body">At WFA Hearing Center, we provide top-quality audiology equipment for both clinical and research applications, ensuring accurate diagnosis and effective treatment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pure Tone Audiometers */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/audiometer-1.jpg" alt="Pure Tone Audiometers" className="w-1/2 h-full object-cover" />
                <img src="/images/audiometer-2.jpg" alt="Pure Tone Audiometers 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Pure Tone Audiometers</h3>
            <p className="text-gray-600 mt-2 font-body">Measure hearing sensitivity across a range of frequencies with our portable and clinical audiometers.</p>
            
            {expandedIndex === 0 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> User-friendly interfaces, accurate frequency response, manual or automatic testing options.</li>
                </ul>
              </div>
            )}
            <button
              className="mt-4 text-primary hover:text-accent font-body"
              onClick={() => handleLearnMore(0)}
            >
              {expandedIndex === 0 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Tympanometers */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/tympanometer-1.jpg" alt="Tympanometers" className="w-1/2 h-full object-cover" />
                <img src="/images/tympanometer-2.jpg" alt="Tympanometers 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Tympanometers</h3>
            <p className="text-gray-600 mt-2 font-body">Assess middle ear function with reliable measurements of tympanic membrane mobility and pressure.</p>
            
            {expandedIndex === 1 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> Quick and precise results, easy-to-read graphs, integrated diagnostics.</li>
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

          {/* Real Ear Measurement (REM) Systems */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/rem-1.jpg" alt="Real Ear Measurement (REM) Systems" className="w-1/2 h-full object-cover" />
                <img src="/images/rem-2.jpg" alt="Real Ear Measurement (REM) Systems 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Real Ear Measurement (REM) Systems</h3>
            <p className="text-gray-600 mt-2 font-body">Ensure optimal fitting and sound quality with objective assessments of hearing aid performance in the patient's ear.</p>
            
            {expandedIndex === 2 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> Advanced technology for accurate measurements and comprehensive reporting capabilities.</li>
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

          {/* Otoacoustic Emission (OAE) Equipment */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/oae-1.jpg" alt="Otoacoustic Emission (OAE) Equipment" className="w-1/2 h-full object-cover" />
                <img src="/images/oae-2.jpg" alt="Otoacoustic Emission (OAE) Equipment 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Otoacoustic Emission (OAE) Equipment</h3>
            <p className="text-gray-600 mt-2 font-body">Non-invasive equipment for assessing cochlear function, ideal for both screening and diagnostic purposes.</p>
            
            {expandedIndex === 3 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> Fast testing time, user-friendly operation, and clear reporting of results.</li>
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

          {/* Auditory Brainstem Response (ABR) Systems */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/abr-system-1.jpg" alt="Auditory Brainstem Response (ABR) Systems" className="w-1/2 h-full object-cover" />
                <img src="/images/abr-system-2.jpg" alt="Auditory Brainstem Response (ABR) Systems 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Auditory Brainstem Response (ABR) Systems</h3>
            <p className="text-gray-600 mt-2 font-body">Essential for evaluating the auditory pathway from the ear to the brainstem, particularly useful for diagnosing hearing loss in newborns.</p>
            
            {expandedIndex === 4 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> High sensitivity and specificity, with comprehensive data analysis tools.</li>
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

          {/* Soundproof Booths */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/soundproof-booth-1.jpg" alt="Soundproof Booths" className="w-1/2 h-full object-cover" />
                <img src="/images/soundproof-booth-2.jpg" alt="Soundproof Booths 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Soundproof Booths</h3>
            <p className="text-gray-600 mt-2 font-body">Provide a controlled environment for hearing tests, ensuring external noise does not affect results.</p>
            
            {expandedIndex === 5 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> High acoustic isolation, customizable sizes, and easy installation.</li>
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

          {/* Calibration Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-48">
              <div className={`absolute flex w-[200%] h-full ${startSliding ? 'animate-slide-left' : ''}`}>
                <img src="/images/calibration-1.jpg" alt="Calibration Services" className="w-1/2 h-full object-cover" />
                <img src="/images/calibration-2.jpg" alt="Calibration Services 2" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-4 font-body">Calibration Services</h3>
            <p className="text-gray-600 mt-2 font-body">Ensure compliance with industry standards by regularly calibrating audiological equipment.</p>
            
            {expandedIndex === 6 && (
              <div className="text-gray-600 mt-4 font-body">
                <ul className="list-disc list-inside">
                  <li><strong>Features:</strong> Expert technicians, prompt service, adherence to regulatory requirements.</li>
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

        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
