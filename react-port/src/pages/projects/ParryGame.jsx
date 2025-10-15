import parryImg from "../../assets/images/wip.png";

export default function ParryGame() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            Parry Game Prototype<span className="dot">.</span>
          </h1>
          <p className="subtitle">Winter 2025</p>
          <p className="subtitle">Stack: Unity, C#</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className="stage">
            <img src={parryImg} alt="Parry game screenshot" />
          </figure>

          {/* Copy */}
          <article className="case-copy">
            <p>
              Currently working on a 2D game built in Unity involving parrying
              shots to survive. Still in the early stages. Will update this page
              soon.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
