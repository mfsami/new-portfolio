import { NavLink } from "react-router-dom";
import styles from "./Subnav.module.css";

export default function Subnav() {
  const cls = ({ isActive }) =>
    isActive ? `${styles["nav-item"]} ${styles.active}` : styles["nav-item"];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidenav} aria-label="Secondary">
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
