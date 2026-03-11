// size: "sm" | "md" | "lg"
const SPARKLES = [
  { top:  6, left: 10, size: "lg", color: "#ffffff",  delay: 0.0,  dur: 2.4 },
  { top: 12, left: 80, size: "md", color: "#fede43",  delay: 0.9,  dur: 2.0 },
  { top: 20, left: 38, size: "sm", color: "#ffffff",  delay: 1.6,  dur: 2.8 },
  { top: 28, left: 91, size: "md", color: "#ffb347",  delay: 0.4,  dur: 1.9 },
  { top: 38, left: 57, size: "lg", color: "#ffffff",  delay: 2.1,  dur: 2.2 },
  { top: 47, left:  5, size: "md", color: "#fede43",  delay: 1.1,  dur: 2.6 },
  { top: 55, left: 70, size: "sm", color: "#ffc1cc",  delay: 0.3,  dur: 2.0 },
  { top: 63, left: 25, size: "lg", color: "#ffffff",  delay: 2.4,  dur: 1.8 },
  { top: 72, left: 85, size: "sm", color: "#ffb347",  delay: 0.7,  dur: 2.5 },
  { top: 80, left: 47, size: "md", color: "#ffffff",  delay: 1.8,  dur: 2.1 },
  { top: 88, left: 14, size: "lg", color: "#fede43",  delay: 0.2,  dur: 1.7 },
  { top: 93, left: 63, size: "sm", color: "#ffc1cc",  delay: 3.0,  dur: 2.3 },
  { top:  4, left: 52, size: "md", color: "#ffffff",  delay: 1.4,  dur: 2.0 },
  { top: 44, left: 95, size: "sm", color: "#fede43",  delay: 2.7,  dur: 2.4 },
  { top: 16, left:  2, size: "lg", color: "#ffffff",  delay: 0.6,  dur: 2.2 },
];

export default function Sparkles() {
  return (
    <div className="sparkles-layer" aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className={`sparkle sparkle--${s.size}`}
          style={{
            top:               `${s.top}%`,
            left:              `${s.left}%`,
            color:             s.color,
            animationDelay:    `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
