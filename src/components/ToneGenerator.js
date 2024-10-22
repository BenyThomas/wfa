import React, { useState } from 'react';
import { FaPlay} from 'react-icons/fa'; // Import icons

const ToneGenerator = ({ frequency }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playTone = () => {
    // Create an audio context after user interaction (e.g., click)
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
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mb-4">Click the play icon to hear a tone at {frequency} Hz.</p>

      {/* Play icon for playing the tone */}
      <div onClick={playTone} className="cursor-pointer text-primary text-4xl">
        <FaPlay />
      </div>

      {isPlaying && (
        <div className="relative w-20 h-20 mt-4">
          {/* Visual pulse effect to show sound */}
          <div className={`absolute w-full h-full rounded-full bg-primary opacity-50 animate-ping`}></div>
          <div className="absolute w-12 h-12 bg-primary rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ToneGenerator;
