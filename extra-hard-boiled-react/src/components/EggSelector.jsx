import Sparkles from "./Sparkles";

const EGG_TYPES = [
  { id: "soft",       name: "Soft Boiled",      minutes: 3,  image: "/IMG/egg3.png", tag: "soft"  },
  { id: "medium",     name: "Medium Boiled",     minutes: 5,  image: "/IMG/egg1.png", tag: "medium" },
  { id: "hard",       name: "Hard Boiled",       minutes: 7,  image: "/IMG/egg2.png", tag: "hard"  },
  { id: "extra-hard", name: "Extra Hard",        minutes: 10, image: "/IMG/egg4.png", tag: "extra" },
];

export default function EggSelector({ onSelect }) {
  return (
    <div className="container">
      <div className="main_background selector-screen">
        <Sparkles />

        {/* header — pushed to top */}
        <div className="selector-header">
          <h1 className="titulo-container">Egg Timer &lt;3</h1>
          <h2 className="selector-title">What are you cooking?</h2>
          <p className="selector-subtitle">Choose your style and start the timer</p>
        </div>

        {/* egg options */}
        <div className="egg-grid">
          {EGG_TYPES.map((egg, i) => (
            <button
              key={egg.id}
              className={`egg-option egg-option--${egg.tag}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => onSelect(egg)}
            >
              <img
                className={`egg-option__img egg-item__img--${i}`}
                src={egg.image}
                alt={egg.name}
              />
              <div className="egg-option__info">
                <span className="egg-option__name">{egg.name}</span>
                <span className="egg-option__time">{egg.minutes} min</span>
              </div>
              <span className="egg-option__arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
