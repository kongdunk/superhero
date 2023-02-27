import { useEffect, useState, useRef } from "react";

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
  
    const togglePlayback = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
        <div className="music">
        <audio
        className="audioControl"
          controls
          loop
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/sounds/music.mp3" type="audio/mpeg" />
        </audio>
        {isPlaying ? (
          <div className='pause' onClick={togglePlayback}>🔊</div>
        ) : (
          <div onClick={togglePlayback}>🔇</div>
        )}
      </div>

    )
}