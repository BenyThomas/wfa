import React from 'react';

const scrollToContactUs = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

const TestResults = ({ responses }) => {
  const heardFrequencies = responses.filter(response => response.heard).map(r => r.frequency);
  const missedFrequencies = responses.filter(response => !response.heard).map(r => r.frequency);

  return (
    <div className="test-results py-8 px-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h3 className="text-3xl font-heading text-gray-800 mb-6 text-center">Test Results</h3>

      <div className="flex flex-col items-center space-y-6">
        {/* Frequencies Heard */}
        {heardFrequencies.length > 0 ? (
          <div className="bg-green-100 p-4 rounded-lg shadow-sm w-full">
            <p className="text-xl font-semibold  font-body text-green-700 mb-2 flex items-center">
              <i className="fas fa-check-circle mr-2"></i> Frequencies you could hear:
            </p>
            <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 font-body">
              {heardFrequencies.map(frequency => (
                <li key={frequency} className="text-lg">{frequency} Hz</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-red-500 mb-4">
            <i className="fas fa-times-circle mr-2"></i> You didn't hear any tones.
          </p>
        )}

        {/* Frequencies Missed */}
        {missedFrequencies.length > 0 && (
          <div className="bg-red-100 p-4 rounded-lg shadow-sm w-full">
            <p className="text-xl font-semibold font-body text-red-600 mb-2 flex items-center">
              <i className="fas fa-exclamation-circle mr-2"></i> Frequencies you missed:
            </p>
            <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 font-body">
              {missedFrequencies.map(frequency => (
                <li key={frequency} className="text-lg">{frequency} Hz</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional Message */}
      <p className="text-lg text-gray-700 mt-6 font-montserrat text-center font-body">
        For an accurate diagnosis, please visit our hearing center for a full evaluation.
      </p>

      {/* Contact Us Button */}
      <div className="text-center mt-6">
        <button
          onClick={scrollToContactUs}
          className="bg-primary hover:bg-accent text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 font-body"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TestResults;
