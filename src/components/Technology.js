import React, { useState, useEffect } from 'react';

const TechnologySection = () => {
  const [startSliding, setStartSliding] = useState(false); // State to control when to start sliding
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Start the sliding animation 10 seconds after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSliding(true);
    }, 10000); // Start sliding after 10 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Toggle the visibility of more details when "Learn More" is clicked
  const handleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 font-heading">Technology of Starkey Hearing Aids</h2>

        {/* Grid layout for the three Starkey products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starkey Genesis */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-64">
              <div
                className={`absolute flex w-[200%] h-full ${
                  startSliding ? 'animate-slide-left' : ''
                }`}
              >
                <img src="/images/genesis-1.jpg" alt="Starkey Genesis" className="w-1/2 h-full object-cover" />
                <img src="/images/genesis-2.jpg" alt="Starkey Genesis" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-heading">Starkey Genesis</h3>
            <p className="mb-4 font-body">The Genesis line represents a significant leap in hearing aid technology, designed for those seeking exceptional sound quality and versatility.</p>
            
            {expandedIndex === 0 && (
              <ul className="list-disc list-inside mb-4">
                <li><strong>Edge Mode:</strong> Automatically adapts to different environments.</li>
                <li><strong>Speech Enhancement:</strong> Enhances speech clarity.</li>
                <li><strong>Personalized Sound:</strong> Customize via the Thrive Hearing App.</li>
              </ul>
            )}
            <button
              className="text-primary hover:underline"
              onClick={() => handleLearnMore(0)}
            >
              {expandedIndex === 0 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Starkey Evolv AI */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-64">
              <div
                className={`absolute flex w-[200%] h-full ${
                  startSliding ? 'animate-slide-left' : ''
                }`}
              >
                <img src="/images/evolv-1.jpg" alt="Starkey Evolv AI" className="w-1/2 h-full object-cover" />
                <img src="/images/evolv-2.jpg" alt="Starkey Evolv AI" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-heading">Starkey Evolv AI</h3>
            <p className="mb-4 font-body">Evolv AI hearing aids are designed with artificial intelligence to provide a personalized hearing experience.</p>
            
            {expandedIndex === 1 && (
              <ul className="list-disc list-inside mb-4 font-body">
                <li><strong>Smart Features:</strong> Voice AI enhances speech in noise.</li>
                <li><strong>Remote Programming:</strong> Audiologists can adjust remotely.</li>
                <li><strong>Health Tracking:</strong> Built-in sensors monitor health metrics.</li>
              </ul>
            )}
            <button
              className="text-primary hover:underline"
              onClick={() => handleLearnMore(1)}
            >
              {expandedIndex === 1 ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Starkey Signature */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover-section">
            <div className="sliding-images mb-4 relative overflow-hidden w-full h-64">
              <div
                className={`absolute flex w-[200%] h-full ${
                  startSliding ? 'animate-slide-left' : ''
                }`}
              >
                <img src="/images/signature-1.jpg" alt="Starkey Signature" className="w-1/2 h-full object-cover" />
                <img src="/images/signature-2.jpg" alt="Starkey Signature" className="w-1/2 h-full object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-heading">Starkey Signature</h3>
            <p className="mb-4 font-body">The Signature line offers a blend of traditional hearing aid features with modern enhancements.</p>
            
            {expandedIndex === 2 && (
              <ul className="list-disc list-inside mb-4 font-body">
                <li><strong>Sound Localization:</strong> Technology helps users identify where sounds are coming from.</li>
                <li><strong>Noise Reduction:</strong> Effective noise management systems reduce background noise.</li>
                <li><strong>Durable Design:</strong> Built with robust materials and moisture resistance.</li>
              </ul>
            )}
            <button
              className="text-primary hover:underline"
              onClick={() => handleLearnMore(2)}
            >
              {expandedIndex === 2 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
