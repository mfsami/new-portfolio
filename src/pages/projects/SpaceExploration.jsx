import sunImg from "../../assets/images/sun.png";
import oldSpace from "../../assets/images/oldspace.png";
import spaceVid from "../../assets/clips/space.mp4";
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
              it doesn’t really hit until you <em>feel</em> it. For this project
              me and a friend are building a VR education simulation in{" "}
              <span className="orangeText">Unity 6</span> using{" "}
              <span className="orangeText">C#</span> and{" "}
              <span className="orangeText">OpenXR</span> that lets you
              experience gravity firsthand across different planets in our solar
              system.
            </p>

            {/* Image */}
            <figure className={styles.stage}>
              <img src={oldSpace} alt="oldspace" />
            </figure>

            <p>
              This project was originally started in 2024 for a VR classroom
              experience. Although we were only required to build a prototype of
              what the simulation <em>could</em> look like, I felt so motivated
              and excited that I decided to turn it into a full project in
              <span className="orangeText">Unity</span>.
            </p>

            <p>
              The image above shows the original version: you were placed in a
              space ship where you could look out the windows to see different
              planets, then select one with the{" "}
              <span className="orangeText">Meta Quest</span> controllers using{" "}
              <span className="orangeText">Raycast detection</span>. That
              selection would launch you into hyperspace travel, taking you to
              the planet to learn about it and answer a few quiz questions.
            </p>

            {/* Video clip */}
            <video
              src={spaceVid}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
              preload="metadata"
            />

            <p>
              This clip shows the travel sequence, my personal favorite.
              Building it really taught me the importance of design and
              perspective: the user only sees what the creator intends. Even
              though it looks polished on video, the underlying construction was
              more like pieces cleverly glued together. It may look simple
              behind the scenes, but it comes across as immersive and
              intentional.
            </p>

            <p>
              Right now, the project is undergoing a major revamp. I’m reusing
              components from the earlier version to create a fully functional
              build, which I plan to finish by December.
            </p>

            <p>
              Biggest lesson so far: immersion matters. The smoother the
              transitions and the tighter the physics feel, the quicker players
              forget they’re “learning” and start experimenting. That’s when the
              simulation stops being a lesson and becomes an experience.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
