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
            <NavLink className="project-link" to="/projects/portfolio">
              <img src={portImg} alt="Portfolio Site" />
            </NavLink>
          </div>

          <div className="projects-grid">
            <NavLink className="project-link" to="/projects/graphite">
              <img src={graphiteImg} alt="Graphite project" />
            </NavLink>
            <NavLink className="project-link" to="/projects/g2a-redesign">
              <img src={g2aImg} alt="G2A Redesign" />
            </NavLink>
          </div>

          <div className="projects-grid">
            <NavLink className="project-link" to="/projects/space-exploration">
              <img src={sunImg} alt="VR Space Exploration" />
            </NavLink>
            <NavLink className="project-link" to="/projects/parry-game">
              <img src={wipImg} alt="Parry Game" />
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
