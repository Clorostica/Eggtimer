import { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import EggSelector from "./components/EggSelector";
import Timer from "./components/Timer";
import TimesUp from "./components/TimesUp";

const PAGES = { HOME: "home", SELECTOR: "selector", TIMER: "timer", TIMES_UP: "times_up" };

export default function App() {
  const [page, setPage]               = useState(PAGES.HOME);
  const [selectedEgg, setSelectedEgg] = useState(null);
  const [visible, setVisible]         = useState(true);
  const [muted, setMuted]             = useState(false);

  const bgRef    = useRef(null);
  const alarmRef = useRef(null);

  // Try autoplay immediately; fall back to first user gesture
  useEffect(() => {
    const audio = bgRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    const startOnGesture = () => audio.play().catch(() => {});

    audio.play().catch(() => {
      // autoplay blocked — start on first interaction instead
      window.addEventListener("pointerdown", startOnGesture, { once: true });
    });

    return () => window.removeEventListener("pointerdown", startOnGesture);
  }, []);

  // Sync mute; if user unmutes while bg is stalled, kick it off
  useEffect(() => {
    if (bgRef.current)    bgRef.current.muted    = muted;
    if (alarmRef.current) alarmRef.current.muted = muted;

    if (!muted && bgRef.current?.paused && page !== PAGES.TIMES_UP) {
      bgRef.current.play().catch(() => {});
    }
  }, [muted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Alarm vs background music
  useEffect(() => {
    if (page === PAGES.TIMES_UP) {
      bgRef.current?.pause();
      if (alarmRef.current) {
        alarmRef.current.volume = 1.0;
        alarmRef.current.play().catch(() => {});
      }
    } else {
      alarmRef.current?.pause();
      if (alarmRef.current) alarmRef.current.currentTime = 0;
      if (!muted) bgRef.current?.play().catch(() => {});
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    window.close();
    setVisible(false); // fallback if browser blocks window.close()
  };

  if (!visible) return null;

  const musicToggle = (
    <div
      className="music-widget"
      onClick={() => setMuted(m => !m)}
      title={muted ? "Activar música" : "Silenciar música"}
    >
      <span className="music-widget__note">♫</span>
      <span className="pixel-switch__label">{muted ? "OFF" : "ON"}</span>
      <div className={`pixel-switch__track ${!muted ? "pixel-switch__track--on" : ""}`}>
        <div className="pixel-switch__thumb" />
      </div>
    </div>
  );

  return (
    <div className="app-shell">
      <audio ref={bgRef}    src="/music.mp3" loop />
      <audio ref={alarmRef} src="/alarm.mp3" loop />

      <button className="win-btn win-btn--close app-close" onClick={handleClose} aria-label="Cerrar" />

      {page === PAGES.HOME && (
        <Home onStart={() => setPage(PAGES.SELECTOR)} />
      )}
      {page === PAGES.SELECTOR && (
        <EggSelector
          onSelect={(egg) => { setSelectedEgg(egg); setPage(PAGES.TIMER); }}
        />
      )}
      {page === PAGES.TIMER && selectedEgg && (
        <Timer
          egg={selectedEgg}
          onDone={() => setPage(PAGES.TIMES_UP)}
          onBack={() => setPage(PAGES.SELECTOR)}
        />
      )}
      {page === PAGES.TIMES_UP && (
        <TimesUp
          onClose={handleClose}
          onSnooze={() => setPage(PAGES.TIMES_UP)}
        />
      )}

      {musicToggle}
    </div>
  );
}
