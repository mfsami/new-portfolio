import { NavLink } from "react-router-dom";

import laststandImg from "../assets/images/laststand.jpg";
import heartboundImg from "../assets/images/heartbound.png";
import wslImg from "../assets/images/WsL.png";
import portImg from "../assets/images/port.png";
import graphiteImg from "../assets/images/Graphite.png";
import g2aImg from "../assets/images/g2a.png";
import sunImg from "../assets/images/sun.png";
import wipImg from "../assets/images/wip.png";

export default function Projects() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            projects<span className="dot">.</span>
          </h1>
          <p className="subtitle">Things I’ve built</p>
          <hr className="rule" />

          <div className="projects-grid">
            <NavLink className="project-link" to="/projects/last-stand">
              <img src={laststandImg} alt="last stand" />
            </NavLink>
            <NavLink className="project-link" to="/projects/heartbound">
              <img src={heartboundImg} alt="Heartbound" />
            </NavLink>
          </div>

          <div className="projects-grid">
            <NavLink className="project-link" to="/projects/winter-soccer">
              <img src={wslImg} alt="Winter Soccer League" />
            </NavLink>
            <a className="project-link" href="projects/portfolio.html">
              <img src={portImg} alt="portfolio" />
            </a>
          </div>

          <div className="projects-grid">
            <a className="project-link" href="projects/graphite.html">
              <img src={graphiteImg} alt="graphite" />
            </a>
            <a className="project-link" href="projects/g2a-redesign.html">
              <img src={g2aImg} alt="g2a" />
            </a>
          </div>

          <div className="projects-grid">
            <a className="project-link" href="projects/parry-game.html">
              <img src={sunImg} alt="sun" />
            </a>
            <a className="project-link" href="projects/space-exploration.html">
              <img src={wipImg} alt="wip" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
