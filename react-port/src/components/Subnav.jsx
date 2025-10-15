import { NavLink } from "react-router-dom";

export default function Subnav() {
  const cls = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");
  return (
    <aside className="sidebar subnav">
      <nav className="sidenav" aria-label="Secondary">
        <NavLink to="/til#concept-1" className={cls}>
          Concept
        </NavLink>
        <NavLink to="/til#concept-2" className={cls}>
          Concept
        </NavLink>
        <NavLink to="/til#concept-3" className={cls}>
          Concept
        </NavLink>
      </nav>
    </aside>
  );
}
