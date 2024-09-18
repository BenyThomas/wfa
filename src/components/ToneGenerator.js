import React, { useEffect, useState } from 'react';

const ToneGenerator = ({ frequency }) => {
  const [isPlaying, setIsPlaying] = useState(false);

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

    setIsPlaying(true);

    // Stop after 3 seconds
    setTimeout(() => {
      oscillator.stop();
      audioCtx.close();
      setIsPlaying(false);
    }, 3000);
  }, [frequency]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">Playing tone at {frequency} Hz...</p>
      <div className="relative w-20 h-20">
        {/* Visual pulse effect to show sound */}
        <div className={`absolute w-full h-full rounded-full bg-primary opacity-50 ${isPlaying ? 'animate-ping' : ''}`}></div>
        <div className="absolute w-12 h-12 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default ToneGenerator;
