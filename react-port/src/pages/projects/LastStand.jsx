import laststandImg from "../../assets/images/laststand.jpg";

export default function LastStand() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            Last Stand<span className="dot">.</span>
          </h1>
          <p className="subtitle">Spring 2025</p>
          <p className="subtitle">Stack: UNITY, C#, ASEPRITE</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className="stage">
            <img src={laststandImg} alt="Last Stand screenshot" />
          </figure>

          {/* Body copy */}
          <article className="case-copy">
            <p>
              Last Stand is a 2D top-down zombie survival shooter I built for a
              spring-semester class project. I was both the <em>developer</em>{" "}
              and the <em>artist</em>, which meant writing systems by day and
              pushing pixels by night. My professor took a real liking to it
              (always nice when office hours turn into mini playtests).
            </p>

            <p>
              Under the hood it’s clean architecture:{" "}
              <span className="orangeText">Unity</span> +{" "}
              <span className="orangeText">C#</span> with solid{" "}
              <span className="orangeText">OOP</span> for modular systems. Core
              gameplay includes responsive shooting, state-based enemy AI
              (patrol → chase → attack), and animation control tied to
              movement/aim. Weapons, health, and enemy logic are decoupled
              components so features can swap in without breaking others.
            </p>

            <p>
              I also wrote custom camera/rendering scripts for a pixel-perfect
              look—orthographic sizing, integer snapping, and jitter-free
              movement. Think “retro crisp,” not “retro blurry.”
            </p>

            <p>
              On the art side: I’m <em>not</em> a seasoned pixel artist, but I’m
              a lifelong gamer and I’m quite proud of how the visuals landed. I
              drew from a bunch of top-down shooters I’ve played over the years
              for silhouettes, readability, and juice. It was a blast to
              build—equal parts study session and nostalgia trip.
            </p>

            <p>Add shop menu gif</p>

            <p>
              My favourite feature was this shop menu I built. Took me days to
              battle with Unity animations. I do think my background in Adobe
              products actually helped me quite well here. But I am super proud
              of how this turned out.
            </p>

            <p>
              The biggest lesson from this project was scope. The real final
              boss. With so many ideas, it’s tempting to bolt on every wild
              feature. I wrestled with that early, then learned to pick my
              battles and keep the core tight. I’m happy with the balance I
              landed on, and I can see this expanding further in the future.
            </p>

            <a
              className="visit-link"
              href="https://samsheart.itch.io/last-stand"
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
