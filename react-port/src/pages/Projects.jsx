import Nav from "../components/Nav.jsx";

export default function Projects() {
  return (
    <div class="wrap">
      <Nav />

      <main class="main">
        <div class="container">
          <section class="page-projects">
            <h1>
              projects<span class="dot">.</span>
            </h1>
            <p class="subtitle">Things I’ve built</p>
            <hr class="rule" />

            <div class="projects-grid">
              <a class="project-link" href="projects/last-stand.html">
                <img src="assets/images/laststand.jpg" alt="Last Stand" />
              </a>

              <a class="project-link" href="projects/heartbound.html">
                <img src="assets/images/heartbound.png" alt="Heartbound" />
              </a>
            </div>

            <div class="projects-grid">
              <a class="project-link" href="projects/winter-soccer.html">
                <img src="assets/images/WSL.png" alt="Winter Soccer League" />
              </a>

              <a class="project-link" href="projects/portfolio.html">
                <img src="assets/images/port.png" alt="Portfolio" />
              </a>
            </div>

            <div class="projects-grid">
              <a class="project-link" href="projects/graphite.html">
                <img src="assets/images/Graphite.png" alt="Graphite" />
              </a>
              <a class="project-link" href="projects/g2a-redesign.html">
                <img src="assets/images/g2a.png" alt="G2A Redesign" />
              </a>
            </div>

            <div class="projects-grid">
              <a class="project-link" href="projects/parry-game.html">
                <img src="assets/images/wip.png" alt="Parry Game" />
              </a>

              <a class="project-link" href="projects/space-exploration.html">
                <img src="assets/images/sun.png" alt="Space Exploration" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
