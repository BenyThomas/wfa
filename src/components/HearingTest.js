import React, { useState } from 'react';
import ToneGenerator from './ToneGenerator';
import TestResults from './TestResults';

// Importing images for each frequency
import image250Hz from '../assets/images/sine-250.png';
import image500Hz from '../assets/images/sine-250.png';
import image1000Hz from '../assets/images/sine-250.png';
import image2000Hz from '../assets/images/sine-250.png';
import image4000Hz from '../assets/images/sine-250.png';
import image8000Hz from '../assets/images/sine-250.png';

// Test frequencies
const frequencies = [
  { freq: 250, image: image250Hz },
  { freq: 500, image: image500Hz },
  { freq: 1000, image: image1000Hz },
  { freq: 2000, image: image2000Hz },
  { freq: 4000, image: image4000Hz },
  { freq: 8000, image: image8000Hz }
];

const HearingTest = () => {
  const [currentFrequency, setCurrentFrequency] = useState(0);
  const [responses, setResponses] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [testStarted, setTestStarted] = useState(false); // Track if test is started

  const handleResponse = (response) => {
    setResponses([...responses, { frequency: frequencies[currentFrequency].freq, heard: response }]);

    // Move to next frequency or finish the test
    if (currentFrequency < frequencies.length - 1) {
      setCurrentFrequency(currentFrequency + 1);
    } else {
      setIsComplete(true); // Test is complete
    }
  };

  const startTest = () => {
    setTestStarted(true);
  };

  return (
    <div className="hearing-test-container py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image */}
          <div className="flex items-center justify-center">
            {/* Display the corresponding image for each frequency */}
            {!testStarted && !isComplete ? (
              <img src="/images/hearing-test.jpeg" alt="Hearing Test" className="w-full max-w-sm rounded-lg shadow-lg" />
            ) : (
              <img
                src={frequencies[currentFrequency].image}
                alt={`${frequencies[currentFrequency].freq} Hz`}
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Right Column: Welcome message and test flow */}
          <div className="flex flex-col justify-center">
            {!testStarted && !isComplete && (
              <>
                <h2 className="text-4xl font-rockwell mb-4">Welcome to Our Online Hearing Test</h2>
                <p className="text-lg text-gray-700 mb-6 font-montserrat leading-relaxed">
                  Our advanced hearing test is designed to help you evaluate your hearing in a few easy steps.
                  Click the button below to begin the test and discover how well you can hear different sound frequencies.
                </p>
                <button
                  onClick={startTest}
                  className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-105"
                >
                  Start Hearing Test
                </button>
              </>
            )}

            {testStarted && !isComplete && (
              <>
                {/* Progress Bar */}
                <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden mb-8">
                  <div
                    className="absolute h-full bg-primary transition-all duration-300"
                    style={{ width: `${((currentFrequency + 1) / frequencies.length) * 100}%` }}
                  ></div>
                </div>

                <p className="text-lg mb-4">Listen to the {frequencies[currentFrequency].freq} Hz sound and tell us if you can hear it.</p>
                <ToneGenerator frequency={frequencies[currentFrequency].freq} />
                
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
            )}

            {/* Results Section */}
            {isComplete && <TestResults responses={responses} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingTest;
