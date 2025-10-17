import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <section className={styles["page-home"]}>
          <h1>
            info<span className="dot">.</span>
          </h1>
          <p className="subtitle">About this journal</p>
          <hr className="rule" />

          <p>Hi,</p>
          <p>
            I’m <strong>Sami El-Sayed</strong>, a developer who likes to build
            clean, purposeful things. I split my attention between building
            websites, games, and apps. Outside of coding, I’m into film, TV,
            music, games, and pretty much any form of creative storytelling.
          </p>

          <p>
            This site is my personal journal. You’ll find short reads and longer
            notes: games I’m working on and how they work, movies worth your
            time, art & design threads, music I can’t stop looping, and the
            occasional technical write-up when I’ve learned something worth
            keeping.
          </p>

          <p>
            I approach projects like a designer as much as a developer, by
            shaping ideas into things people can actually use and enjoy. For me,
            game dev and web dev aren’t just about code, but about interaction,
            design, usability, and how people experience what you make. That
            means I’m curious about everything from interfaces, typography, and
            responsive design to 3D, VR, and the future of play.
          </p>

          <p>
            I love working on projects of all kinds in my spare time, so this
            site is my space to share everything I create.
          </p>

          <hr className="rule" />
          <div className={styles["home-footer"]}>
            <p>
              by <strong>Sami El-Sayed</strong>
              <br />
              samielsayed39@gmail.com
            </p>

            <NavLink to="/projects" className="visit-link">
              View my work →
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
