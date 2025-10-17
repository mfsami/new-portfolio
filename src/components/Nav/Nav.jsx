import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const cls = ({ isActive }) =>
    isActive ? `${styles["nav-item"]} ${styles.active}` : styles["nav-item"];
  return (
    <aside className={`${styles.sidebar} ${styles.nav}`}>
      <div className={styles["nav-header"]}>
        {/* Hamburger  */}
        <button
          className={styles["nav-toggle"]}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      <nav
        className={`${styles.sidenav} ${open ? styles.open : ""}`}
        aria-label="Primary">
        <div className={styles["brand-row"]}>
          <a className={styles["brand-mini"]} href="#top">
            sami&apos;s journal
          </a>
        </div>
        <NavLink to="/" className={cls} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/projects" className={cls} onClick={() => setOpen(false)}>
          Projects
        </NavLink>
        {/* <NavLink to="/til" className={cls}>
          TIL
        </NavLink> */}

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
