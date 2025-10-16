import portaImg from "../../assets/images/porta.png";
import styles from "./ProjectDetail.module.css";
export default function Portfolio() {
  return (
    <main className="main">
      <div className="container">
        <section className={styles["page-projects"]}>
          <h1>
            Portfolio Site<span className="dot">.</span>
          </h1>
          <p className="subtitle">Present and Future</p>
          <p className="subtitle">Stack: React, HTML, CSS</p>
          <hr className="rule" />

          {/* Image */}
          <figure className={styles.stage}>
            <img src={portaImg} alt="Portfolio site screenshot" />
          </figure>

          {/* Copy */}
          <article className={styles["case-copy"]}>
            <p>
              Yes, shameless of me to include <em>this exact site</em> as a
              project, but I’m genuinely proud of how it turned out. It’s built
              with <span className="orangeText">ReactJS</span> and classic{" "}
              <span className="orangeText">HTML/CSS</span>, and it’s designed to
              do one thing well: represent me.
            </p>

            <p>
              I’m a minimal guy. I like clean, sleek, only focusing on the
              essentials. I kept the layout lean with a calm sidebar, minimal
              typography, and roomy spacing so projects and writing take center
              stage. Under the hood, the components are small and reusable
              (cards, layout, nav), with just enough state to keep navigation
              snappy. I also paid extra attention to readability with sensible
              line lengths, a strong type scale, and accessible color contrast
              so it works in both light and dark modes. Bottom left, try it out.
            </p>

            <p>
              This site doubles as a living journal that shows my projects, game
              dev notes, and the occasional deep dive. Minimal doesn’t mean
              empty. It means everything here has a job. And yes, including it
              as a project is a little cheeky, but building your own home on the
              web and polishing it until it feels right is its own kind of
              craft.
            </p>

            <a
              className="visit-link"
              href="https://mfsami.github.io/WSL-Revamp/#/"
              target="_blank"
              rel="noreferrer">
              You are already here!
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
