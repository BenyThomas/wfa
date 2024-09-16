import React, { useEffect } from 'react';

const ToneGenerator = ({ frequency }) => {
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine'; // Use sine wave for a pure tone
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); // Set frequency
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Start the tone
    oscillator.start();
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Set volume (0.1 = 10%)

    // Stop after 3 seconds
    setTimeout(() => {
      oscillator.stop();
      audioCtx.close();
    }, 3000);
  }, [frequency]);

  return (
    <div>
      <p className="text-lg">Playing tone at {frequency} Hz...</p>
    </div>
  );
};

export default ToneGenerator;
