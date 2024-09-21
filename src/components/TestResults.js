import React from 'react';

const TestResults = ({ responses }) => {
  const heardFrequencies = responses.filter(response => response.heard).map(r => r.frequency);
  const missedFrequencies = responses.filter(response => !response.heard).map(r => r.frequency);

  return (
    <div className="test-results text-center py-8 hover-section">
      <h3 className="text-3xl font-rockwell mb-4">Test Results</h3>

      {heardFrequencies.length > 0 ? (
        <>
          <p className="text-lg font-semibold text-green-600 mb-4"><i className="fas fa-check-circle"></i> Frequencies you could hear:</p>
          <ul className="list-disc list-inside mb-4">
            {heardFrequencies.map(frequency => (
              <li key={frequency} className="text-lg">{frequency} Hz</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg text-red-500 mb-4"><i className="fas fa-times-circle"></i> You didn't hear any tones.</p>
      )}

      {missedFrequencies.length > 0 && (
        <>
          <p className="text-lg font-semibold text-red-600 mb-4"><i className="fas fa-exclamation-circle"></i> Frequencies you missed:</p>
          <ul className="list-disc list-inside mb-4">
            {missedFrequencies.map(frequency => (
              <li key={frequency} className="text-lg">{frequency} Hz</li>
            ))}
          </ul>
        </>
      )}

      <p className="text-lg text-gray-700 font-montserrat">For an accurate diagnosis, please visit our hearing center for a full evaluation.</p>
    </div>
  );
};

export default TestResults;
