import wslImg from "../../assets/images/WsL.png";
import teamsStatsImg from "../../assets/images/teamsStats.png";
import styles from "./ProjectDetail.module.css";
export default function WinterSoccer() {
  return (
    <main className="main">
      <div className="container">
        <section className={styles["page-projects"]}>
          <h1>
            Winter Soccer League Site<span className="dot">.</span>
          </h1>
          <p className="subtitle">Winter 2023 – Present</p>
          <p className="subtitle">Stack: React, HTML, CSS</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className={styles.stage}>
            <img src={wslImg} alt="Winter Soccer League UI mock" />
          </figure>

          {/* Body copy */}
          <article className={styles["case-copy"]}>
            <p>
              A local winter soccer tournament needed a simple way to track
              player stats, standings, teams, and weekly highlights across a
              yearly three-week season. I was referred by my friend Adnan and
              built the league’s site.
            </p>

            <blockquote>
              “We need a site where players can see standings, top scorers,
              highlights and anything related to the tournament.”
            </blockquote>

            <p>
              I started with wireframes in{" "}
              <span className="orangeText">Figma</span>, then shipped the first
              version in plain <span className="orangeText">HTML/CSS</span>{" "}
              (2023). The next year I rebuilt it in{" "}
              <span className="orangeText">ReactJS</span> with a cleaner layout,
              better typography, and a mobile-first flow. The site now pulls
              together teams, fixtures, results, leaderboards, and media in one
              place.
            </p>

            <figure className="stage">
              <img
                src={teamsStatsImg}
                alt="Winter Soccer League teams & stats"
              />
            </figure>

            <p>
              I’m the dedicated maintainer each winter. This project taught me a
              ton about practical web dev: structuring data, state + UI, and
              designing for speed when people check scores on the sideline.
            </p>

            <a
              className="visit-link"
              href="https://mfsami.github.io/WSL-Revamp/#/"
              target="_blank"
              rel="noreferrer">
              Visit Site →
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
