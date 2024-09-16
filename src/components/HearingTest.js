import React, { useState } from 'react';
import ToneGenerator from './ToneGenerator';
import TestResults from './TestResult';

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
            <p className="text-lg mb-4">Listen to the sound and tell us if you can hear it.</p>
            <ToneGenerator frequency={frequencies[currentFrequency]} />
            
            <div className="mt-8">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg mr-4"
                onClick={() => handleResponse(true)}
              >
                I Can Hear It
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={() => handleResponse(false)}
              >
                I Cannot Hear It
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
