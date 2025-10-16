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
              Currently working on creating a VR solar system simulation. This
              involves travelling to planets to learn about how gravity behaves
              on each one. Using Unity C# and a Meta Quest 3 for this project.
              Still in very early development, will update this page when
              completed.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
