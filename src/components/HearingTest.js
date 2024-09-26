import React, { useState } from 'react';
import ToneGenerator from './ToneGenerator';
import TestResults from './TestResults';
import { Helmet } from 'react-helmet';

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
    <div className="hearing-test-container py-16 bg-gray-100 animate-fadeIn">
        <Helmet>
        <title>Hearing Test | WFA Hearing Centre</title>
        <meta name="description" content="Take our advanced online hearing test to evaluate your hearing in a few easy steps." />
        <meta name="keywords" content="hearing test, hearing aids, hearing evaluation" />
        <meta property="og:title" content="Online Hearing Test" />
        <meta property="og:description" content="Evaluate your hearing with our advanced online hearing test." />
        <meta property="og:image" content="/images/hearing-test.jpeg" />
        <meta property="og:url" content="https://wfahearing.co.tz#hearing-test" />
      </Helmet>
      <div className="container mx-auto px-4 text-center">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image */}
          <div className="flex items-center justify-center animate-fadeIn ">
            {!testStarted && !isComplete ? (
              <img src="/images/hearing-tests.jpeg" alt="Take our online hearing test" className="w-full max-w-sm rounded-lg shadow-lg hover-section" />
            ) : (
              <img
                src={frequencies[currentFrequency].image}
                alt={`${frequencies[currentFrequency].freq} Hz`}
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Right Column: Welcome message and test flow */}
          <div className="flex flex-col justify-center animate-fadeIn hover-section">
            {!testStarted && !isComplete && (
              <>
                <h2 className="text-4xl font-heading mb-4">Welcome to Our Online Hearing Test</h2>
                <p className="text-lg text-gray-700 mb-6 font-body leading-relaxed">
                  Our advanced hearing test is designed to help you evaluate your hearing in a few easy steps.
                  Click the button below to begin the test and discover how well you can hear different sound frequencies.
                </p>
                <button
                  onClick={startTest}
                  className="bg-primary hover:bg-accent text-white py-3 px-8 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 font-body"
                >
                  Start Hearing Test
                </button>
              </>
            )}

            {testStarted && !isComplete && (
              <>
                {/* Progress Bar */}
                <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden mb-8 animate-fadeIn hover-section">
                  <div
                    className="absolute h-full bg-primary transition-all duration-300 font-body"
                    style={{ width: `${((currentFrequency + 1) / frequencies.length) * 100}%` }}
                  ></div>
                </div>

                <p className="text-lg mb-4 font-body">Listen to the {frequencies[currentFrequency].freq} Hz sound and tell us if you can hear it.</p>
                <ToneGenerator frequency={frequencies[currentFrequency].freq} />
                
                <div className="mt-8 animate-fadeIn hover-section">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mr-4 transform transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => handleResponse(true)}
                  >
                    <i className="fas fa-check font-body"></i> I Can Hear It
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => handleResponse(false)}
                  >
                    <i className="fas fa-times font-body"></i> I Cannot Hear It
                  </button>
                </div>
              </>
            )}

            {isComplete && <TestResults responses={responses} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingTest;
