import React, { createContext, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null); // Referensi untuk elemen audio
  const [isPlaying, setIsPlaying] = useState(false); // State untuk status audio

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, isPlaying, playAudio, pauseAudio }}
    >
      {children}
      <audio ref={audioRef} loop>
        <source src="assets/audio/lagu_1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </AudioContext.Provider>
  );
};

export default AudioContext;
