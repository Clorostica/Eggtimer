import { useState } from "react";
import Sparkles from "./Sparkles";
import YolkDrip from "./YolkDrip";

export default function TimesUp({ onClose, onSnooze }) {
  const [snoozed, setSnoozed] = useState(false);

  const handleSnooze = () => {
    setSnoozed(true);
    setTimeout(() => onSnooze(), 5 * 60 * 1000);
  };

  return (
    <div className="container alarm-container">
      <div className="main_background alarm-screen">
        {/* red pulsing overlay — keeps background image visible */}
        <div className="alarm-overlay" />

        <Sparkles />
        <h1 className="alarm-title">Your egg is done!</h1>

        <YolkDrip />

        <div className="timer_buttons_container">
          <button className="pixel-btn" onClick={handleSnooze} disabled={snoozed}>
            {snoozed ? "✓ Snoozed!" : "⏰ Snooze"}
          </button>
          <button className="pixel-btn" onClick={onClose}>
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  );
}
