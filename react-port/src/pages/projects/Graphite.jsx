import graphiteImg from "../../assets/images/graphitee.png";
import appImg from "../../assets/images/app.png";

export default function Graphite() {
  return (
    <main className="main">
      <div className="container">
        <section className="page-projects">
          <h1>
            Graphite<span className="dot">.</span>
          </h1>
          <p className="subtitle">Winter 2025</p>
          <p className="subtitle">Stack: React Native, TypeScript, Redux</p>
          <hr className="rule" />

          {/* Image stage */}
          <figure className="stage">
            <img src={graphiteImg} alt="Graphite project cover" />
          </figure>

          {/* Project copy */}
          <article className="case-copy">
            <p>
              Graphite is an IoT-powered mobile storage expansion app built as
              my capstone project. I led the app’s <em>UI</em>, owning the
              design system, flows, and front-end implementation across
              platforms with <span className="orangeText">React Native</span>,{" "}
              <span className="orangeText">TypeScript</span>, and{" "}
              <span className="orangeText">Redux</span>. It was challenging
              (hello, client feedback loop) but the result is a clean,
              responsive interface that plays nicely with the hardware.
            </p>

            <p>
              The core idea: a portable “case” that lets you transfer files,
              images, documents, MP3s, and MP4s directly to on-device storage.
              The device side runs on an{" "}
              <span className="orangeText">ESP32</span> for wireless
              connectivity and control. We even planned a 3D-printed enclosure
              post-capstone (didn’t end up shipping it), but the
              hardware/software flow worked end-to-end. My role throughout the
              capstone was front-end/UI.
            </p>

            <p>
              I started with <span className="orangeText">Figma</span>{" "}
              wireframes and interactive prototypes, then translated those into
              reusable <span className="orangeText">React Native</span>{" "}
              components and screens. We worked in an Agile setup with daily
              standups, sprint goals, and task tracking which kept design
              changes aligned with development. I coordinated closely with the
              backend and hardware teams so UI states matched real device
              behavior during pairing, transfer, progress, and error handling.
            </p>

            <p>
              <em>Here are some images from the app I created:</em>
            </p>

            <figure className="stage">
              <img
                src={appImg}
                alt="Graphite app screenshots"
                style={{
                  width: "90%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </figure>

            <p>
              We kept collaboration smooth using{" "}
              <span className="orangeText">Git</span> and{" "}
              <span className="orangeText">GitHub</span> PR workflows. The
              toughest part was iterating UI details after stakeholder demos.
              Small tweaks weekly that did a lot to increase trust. In the end,
              the stakeholders were happy and we shipped a UI that feels native,
              stable, and straightforward to use.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
