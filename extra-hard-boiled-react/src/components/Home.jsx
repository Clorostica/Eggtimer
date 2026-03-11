import Sparkles from "./Sparkles";

export default function Home({ onStart }) {
  return (
    <div className="container">
      <div className="main_background">
        <Sparkles />
        <h1 className="main_title">Let's time your egg!</h1>
        <button className="pixel-btn pixel-btn--primary" onClick={onStart}>
          Let's Start
        </button>
      </div>
    </div>
  );
}
