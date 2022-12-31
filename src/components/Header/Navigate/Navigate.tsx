import React from "react";
import styles from "./Header.module.scss";

type HeaderPropsType = {
  active: boolean;
  activeCallback: (isActive: boolean) => void;
};

export const Navigate: React.FC<HeaderPropsType> = ({
  active,
  activeCallback,
}) => {
  const navFullClass = active
    ? `${styles.burgerMenu} ${styles.active}`
    : styles.burgerMenu;

  const activeHandle = () => {
    activeCallback(!active);
  };

  return (
    <nav className={styles.nav}>
      <div className={navFullClass} onClick={activeHandle}>
        <span></span>
      </div>
      <div className={active ? styles.active : ""}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
