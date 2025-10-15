export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-home">
          <h1>
            info<span className="dot">.</span>
          </h1>
          <p className="subtitle">About this journal</p>
          <hr className="rule" />

          <p>Hi,</p>
          <p>
            I’m Sami El-Sayed, a developer who likes to build clean, purposeful
            things. I split my attention between websites, games, and apps.
            Outside of coding: film, TV, music, games, and creative
            storytelling.
          </p>

          <p>
            This site is my personal journal—short reads and longer notes: game
            dev logs, movie recs, art/design threads, music loops, and
            occasional technical write-ups.
          </p>

          <p>
            I approach projects like a designer as much as a developer—focused
            on interaction, usability, and how people experience what you make.
            I’m curious about interfaces, typography, responsive design, 3D, VR,
            and the future of play.
          </p>

          <p>
            I love working on projects of all kinds, so this is where I share
            what I create.
          </p>

          <hr className="rule" />
          <div className="home-footer">
            <p>
              by <strong>Sami El-Sayed</strong>
              <br />
              samielsayed39@gmail.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
