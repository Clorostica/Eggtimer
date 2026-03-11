import { useState, useEffect, useRef } from "react";
import Sparkles from "./Sparkles";

export default function Timer({ egg, onDone, onBack }) {
  const totalSeconds = egg.minutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (timeLeft === 0) {
      setRunning(false);
      onDone();
    }
  }, [timeLeft]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" + sec : sec}`;
  };

  const handleStop = () => {
    setRunning(false);
    setTimeLeft(totalSeconds);
  };

  return (
    <div className="container">
      <div className="main_background">
        <Sparkles />
        <h1 className="titulo-container">{egg.name} Timer &lt;3</h1>

        <h1 className="select_title">Your egg is ready in</h1>
        <img className="fotograma" src="/IMG/fotograma.png" alt="egg" />
        <h2 id="timer-display">{formatTime(timeLeft)}</h2>

        <div className="timer_buttons_container">
          <button
            className="pixel-btn"
            onClick={() => setRunning(true)}
            disabled={running || timeLeft === 0}
          >
            ▶ Start
          </button>
          <button
            className="pixel-btn"
            onClick={handleStop}
            disabled={!running}
          >
            ■ Stop
          </button>
          <button className="pixel-btn" onClick={onBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
