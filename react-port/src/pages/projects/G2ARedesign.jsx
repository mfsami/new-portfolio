import g2aImg from "../../assets/images/g2apage.png";

export default function G2ARedesign() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            G2A Redesign<span className="dot">.</span>
          </h1>
          <p className="subtitle">Winter 2025</p>
          <p className="subtitle">Stack: React, HTML, CSS</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className="stage">
            <img src={g2aImg} alt="G2A Redesign mock" />
          </figure>

          {/* Body copy */}
          <article className="case-copy">
            <p>
              Currently working on redesigning the G2A website. This is a fun
              side project I’ve wanted to tackle for a while now. I’m planning
              to use <span className="orangeText">ReactJS</span> for the build,
              starting with wireframes and brainstorming layout improvements. As
              progress is made, this page will be updated with design notes,
              screenshots, and a live demo.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
