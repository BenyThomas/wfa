import React, { useState } from 'react';
import ToneGenerator from './ToneGenerator';
import TestResults from './TestResults';

const frequencies = [250, 500, 1000, 2000, 4000, 8000]; // Example test frequencies in Hz

const HearingTest = () => {
  const [currentFrequency, setCurrentFrequency] = useState(0);
  const [responses, setResponses] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleResponse = (response) => {
    setResponses([...responses, { frequency: frequencies[currentFrequency], heard: response }]);

    // Move to next frequency or finish the test
    if (currentFrequency < frequencies.length - 1) {
      setCurrentFrequency(currentFrequency + 1);
    } else {
      setIsComplete(true); // Test is complete
    }
  };

  return (
    <div className="hearing-test-container py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Online Hearing Test</h2>

        {!isComplete ? (
          <>
            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden mb-8">
              <div
                className="absolute h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentFrequency + 1) / frequencies.length) * 100}%` }}
              ></div>
            </div>

            <p className="text-lg mb-4">Listen to the sound and tell us if you can hear it.</p>
            <ToneGenerator frequency={frequencies[currentFrequency]} />
            
            <div className="mt-8">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mr-4 transform transition duration-300 ease-in-out hover:scale-105"
                onClick={() => handleResponse(true)}
              >
                <i className="fas fa-check"></i> I Can Hear It
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-105"
                onClick={() => handleResponse(false)}
              >
                <i className="fas fa-times"></i> I Cannot Hear It
              </button>
            </div>
          </>
        ) : (
          <TestResults responses={responses} />
        )}
      </div>
    </div>
  );
};

export default HearingTest;
