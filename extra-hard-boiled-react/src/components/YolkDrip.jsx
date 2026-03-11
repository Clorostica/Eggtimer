/* drops start near the crack at the lower egg body, then drift outward */
const LEFT_DROPS = [
  { x: -18, y: 62, delay: 0.0,  scale: 1.0  },
  { x: -26, y: 70, delay: 0.65, scale: 0.85 },
  { x: -14, y: 58, delay: 1.4,  scale: 0.9  },
  { x: -22, y: 66, delay: 2.1,  scale: 0.75 },
];

const RIGHT_DROPS = [
  { x:  18, y: 62, delay: 0.3,  scale: 1.0  },
  { x:  26, y: 70, delay: 0.95, scale: 0.85 },
  { x:  14, y: 64, delay: 1.7,  scale: 0.9  },
  { x:  22, y: 68, delay: 2.4,  scale: 0.75 },
];

function Drop({ x, y, delay, scale, side }) {
  return (
    <span
      className={`yolk-drop yolk-drop--${side}`}
      style={{
        top:             `${y}px`,
        left:            `calc(50% + ${x}px)`,
        animationDelay:  `${delay}s`,
        transform:       `scale(${scale})`,
        transformOrigin: "top center",
      }}
    />
  );
}

export default function YolkDrip() {
  return (
    <div className="yolk-wrapper">
      <img className="fotograma yolk-egg" src="/IMG/fotograma.png" alt="egg" />
      <div className="yolk-drops-layer">
        {LEFT_DROPS.map((d, i)  => <Drop key={`l${i}`} {...d} side="left"  />)}
        {RIGHT_DROPS.map((d, i) => <Drop key={`r${i}`} {...d} side="right" />)}
      </div>

      {/* puddle accumulates at the bottom */}
      <div className="yolk-puddle-container">
        <span className="yolk-puddle yolk-puddle--left"  />
        <span className="yolk-puddle yolk-puddle--right" />
        {/* pixel bumps on top of puddle for irregular edge */}
        <span className="yolk-puddle-bump yolk-puddle-bump--1" />
        <span className="yolk-puddle-bump yolk-puddle-bump--2" />
        <span className="yolk-puddle-bump yolk-puddle-bump--3" />
      </div>
    </div>
  );
}
