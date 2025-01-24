import React, { useContext } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import AudioContext from "../context/Adiocontext";
const FloatingAudioPlayer = () => {
  const { isPlaying, playAudio, pauseAudio } = useContext(AudioContext);

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <div style={styles.floatingContainer}>
      <button onClick={togglePlayPause} style={styles.iconButton}>
        {isPlaying ? (
          <FaPause style={styles.icon_2} />
        ) : (
          <FaPlay style={styles.icon} />
        )}
      </button>
    </div>
  );
};

const styles = {
  floatingContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    all: "unset",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "24px",
    color: "#333",
  },
  icon_2: {
    fontSize: "24px",
    color: "#333",
    animation: "rotating 4s linear infinite",
  },
};

export default FloatingAudioPlayer;
