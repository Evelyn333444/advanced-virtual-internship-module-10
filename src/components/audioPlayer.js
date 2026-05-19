import { useRef, useState } from "react";

const AudioPlayer = ({ currentTime, audioRef, setCurrentTime, duration }) => {
  function handleSeek(event) {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div>
      <div className="audio__progress--wrapper">
        <div className="audio__time">{formatTime(currentTime)}</div>

        <input
          type="range"
          className="audio__progress--bar"
          value={currentTime}
          max={duration}
          onChange={handleSeek}
          style={{
            background: `linear-gradient(
              to right,
              rgb(43, 217, 124) ${progress}%,
              rgb(109, 120, 125) ${progress}%
            )`,
          }}
        />

        <div className="audio__time">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;