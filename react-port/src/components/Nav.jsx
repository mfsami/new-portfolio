import { NavLink } from "react-router-dom";

export default function Nav() {
  const cls = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");
  return (
    <aside className="sidebar nav">
      <div className="nav-header">
        <a className="brand-mini" href="#top">
          sami&apos;s journal
        </a>
      </div>
      <nav className="sidenav" aria-label="Primary">
        <NavLink to="/" className={cls}>
          Home
        </NavLink>
        <NavLink to="/projects" className={cls}>
          Projects
        </NavLink>
        <a className="nav-item" href="/til">
          TIL
        </a>{" "}
        <div className="nav-section">Contact</div>
        <a className="nav-item" href="mailto:samielsayed39@gmail.com">
          Email
        </a>
        <a
          className="nav-item"
          href="https://github.com/mfsami"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        <a
          className="nav-item"
          href="http://linkedin.com/in/sami-el-sayed-2aa611254"
          target="_blank"
          rel="noreferrer">
          LinkedIn
        </a>
      </nav>
    </aside>
  );
}
