import sunImg from "../../assets/images/sun.png";
import styles from "./ProjectDetail.module.css";
export default function SpaceExploration() {
  return (
    <main className="main">
      <div className="container">
        <section className={styles["page-projects"]}>
          <h1>
            VR Space Exploration<span className="dot">.</span>
          </h1>
          <p className="subtitle">Winter 2025</p>
          <p className="subtitle">Stack: UNITY, C#, META QUEST 3</p>
          <hr className="rule" />

          {/* Image */}
          <figure className={styles.stage}>
            <img src={sunImg} alt="sun vr" />
          </figure>

          <article className={styles["case-copy"]}>
            <p>
              Gravity is one of those concepts that sounds simple on paper, but
              it doesn’t really hit until you <em>feel</em> it. For this
              project, we built a VR education simulation in{" "}
              <span className="orangeText">Unity 6</span> using{" "}
              <span className="orangeText">C#</span> and{" "}
              <span className="orangeText">OpenXR</span> that lets you
              experience gravity firsthand across different planets.
            </p>

            <p>
              The core systems are modular: parameterized planet prefabs,
              gravity scripts decoupled from locomotion, and an arm-mounted UI
              for planetary selection. This structure keeps the project scalable
              with new planets, mechanics, or HUD elements can be added without
              breaking existing features.
            </p>

            <p>
              Rendering and interaction are tuned for immersion: Blender-modeled
              planetary assets, dynamic lighting for orbital travel,
              physics-driven object play, and a helmet HUD that overlays
              real-time stats like mass, temperature, and gravity scale. Whether
              you’re sprinting on Earth or floating in low-G, every movement
              feels grounded in the environment.
            </p>

            <p>
              My favourite aspect is the sense of presence. Launching off one
              planet and watching another grow in view feels equal parts
              technical showcase and space adventure. It’s where{" "}
              <span className="orangeText">Unity</span> systems,{" "}
              <span className="orangeText">C#</span> scripting, and{" "}
              <span className="orangeText">OpenXR</span> design all collide and
              that’s the kind of synergy that makes VR development so exciting.
            </p>

            <p>
              Biggest lesson so far: immersion matters. The smoother the
              transitions and the tighter the physics feel, the faster players
              forget they’re “learning” and start experimenting. That’s when the
              simulation becomes an experience.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
