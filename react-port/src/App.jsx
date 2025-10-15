// src/App.jsx
// import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  return (
    <div className="wrap">
      {/* NAV BAR */}
      <aside className="sidebar nav">
        <div className="nav-header">
          <a className="brand-mini" href="#top">
            sami&apos;s journal
          </a>
        </div>

        {/* MAIN SECTION */}
        <nav className="sidenav" aria-label="Primary">
          <a className="nav-item" href="/">
            Home
          </a>
          {/* <a className="nav-item" href="#blog">Blog</a> */}
          <a className="nav-item" href="/projects">
            Projects
          </a>
          <a className="nav-item" href="/til">
            TIL
          </a>

          <div className="nav-section">Contact</div>
          <a className="nav-item" href="mailto:samielsayed39@gmail.com">
            Email
          </a>
          <a
            className="nav-item"
            href="https://github.com/mfsami"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          <a
            className="nav-item"
            href="http://linkedin.com/in/sami-el-sayed-2aa611254"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>

        {/* <DarkModeToggle /> */}
      </aside>

      {/* MAIN CONTENT */}
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
              I’m Sami El-Sayed, a developer who likes to build clean,
              purposeful things. I split my attention between building websites,
              games, and apps. Outside of coding, I’m into film, TV, music,
              games, and pretty much any form of creative storytelling.
            </p>

            <p>
              This site is my personal journal. You’ll find short reads and
              longer notes: games I’m working on and how they work, movies worth
              your time, art &amp; design threads, music I can’t stop looping,
              and the occasional technical write-up when I’ve learned something
              worth keeping.
            </p>

            <p>
              I approach projects like a designer as much as a developer, by
              shaping ideas into things people can actually use and enjoy. For
              me, game dev and web dev aren’t just about code, but about
              interaction, design, usability, and how people experience what you
              make. That means I’m curious about everything from interfaces,
              typography, and responsive design to 3D, VR, and the future of
              play.
            </p>

            <p>
              I love working on projects of all kinds in my spare time, so this
              site is my space to share everything I create.
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
    </div>
  );
}
