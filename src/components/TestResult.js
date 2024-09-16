import React from 'react';

const TestResults = ({ responses }) => {
  const heardFrequencies = responses.filter(response => response.heard).map(r => r.frequency);
  const missedFrequencies = responses.filter(response => !response.heard).map(r => r.frequency);

  return (
    <div className="test-results">
      <h3 className="text-3xl font-bold mb-4">Test Results</h3>

      {heardFrequencies.length > 0 ? (
        <>
          <p className="text-lg font-semibold">Frequencies you could hear:</p>
          <ul className="list-disc list-inside mb-4">
            {heardFrequencies.map(frequency => (
              <li key={frequency}>{frequency} Hz</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg text-red-500">You didn't hear any tones.</p>
      )}

      {missedFrequencies.length > 0 && (
        <>
          <p className="text-lg font-semibold">Frequencies you missed:</p>
          <ul className="list-disc list-inside mb-4">
            {missedFrequencies.map(frequency => (
              <li key={frequency}>{frequency} Hz</li>
            ))}
          </ul>
        </>
      )}

      <p className="text-lg">For an accurate diagnosis, please visit our hearing center for a full evaluation.</p>
    </div>
  );
};

export default TestResults;
