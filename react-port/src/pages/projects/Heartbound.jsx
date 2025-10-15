import levelImg from "../../assets/images/level.png";
import heartImg from "../../assets/images/heart.png";

export default function Heartbound() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            Heartbound<span className="dot">.</span>
          </h1>
          <p className="subtitle">Spring 2024</p>
          <p className="subtitle">Stack: GODOT, GDSCRIPT</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className="stage" style={{ width: "60%", margin: "0 auto" }}>
            <img src={levelImg} alt="Heartbound level" />
          </figure>

          <article className="case-copy">
            <p>
              Heartbound is a tiny 2D platformer I created back in 2024—one of
              the first games I ever built. It’s short but intentionally tight,
              a little love letter to how I felt after finishing{" "}
              <em>Celeste</em>. Built in{" "}
              <span className="orangeText">Godot</span> with{" "}
              <span className="orangeText">GDScript</span>.
            </p>

            <p>
              Classic platforming loop: precise jumps, hazards, collectibles,
              readable level beats, and progression. I kept scope small to
              polish the basics—input handling, player state, hazards,
              animations, and a couple of set pieces.
            </p>

            <figure
              className="stage"
              style={{ width: "60%", margin: "0 auto" }}>
              <img src={heartImg} alt="Heartbound sprite" />
            </figure>

            <p>
              I’ve since fallen hard for{" "}
              <span className="orangeText">Unity</span>, but building Heartbound
              in Godot taught me to pick a small target, finish it, and ship.
            </p>

            <a
              className="visit-link"
              href="https://samsheart.itch.io/heartbound"
              target="_blank"
              rel="noreferrer">
              Try the game out →
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
