import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const cls = ({ isActive }) =>
    isActive ? `${styles["nav-item"]} ${styles.active}` : styles["nav-item"];
  return (
    <aside className={`${styles.sidebar} ${styles.nav}`}>
      <div className={styles["nav-header"]}>
        <a className={styles["brand-mini"]} href="#top">
          sami&apos;s journal
        </a>
      </div>

      <nav className={styles.sidenav} aria-label="Primary">
        <NavLink to="/" className={cls}>
          Home
        </NavLink>
        <NavLink to="/projects" className={cls}>
          Projects
        </NavLink>
        <NavLink to="/til" className={cls}>
          TIL
        </NavLink>

        <div className={styles["nav-section"]}>Contact</div>

        <a className={styles["nav-item"]} href="mailto:samielsayed39@gmail.com">
          Email
        </a>
        <a
          className={styles["nav-item"]}
          href="https://github.com/mfsami"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        <a
          className={styles["nav-item"]}
          href="http://linkedin.com/in/sami-el-sayed-2aa611254"
          target="_blank"
          rel="noreferrer">
          LinkedIn
        </a>
      </nav>
    </aside>
  );
}
