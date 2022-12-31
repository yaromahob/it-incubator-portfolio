import React, { useState } from "react";
import styles from "./Header.module.scss";

type HeaderPropsType = {
  active: boolean;
  activeCallback: (isActive: boolean) => void;
};
const Header: React.FC<HeaderPropsType> = ({ active, activeCallback }) => {
  const navFullClass = active
    ? `${styles.burgerMenu} ${styles.active}`
    : styles.burgerMenu;

  const activeHandle = () => {
    activeCallback(!active);
  };

  return (
    <header className={styles.header} id="home">
      <div className={styles.headerWrapper}>
        <div className={styles.writeMe}>
          <a href={"https://t.me/yaromahob"} rel="noreferrer" target="_blank">
            <img
              src="https://www.svgrepo.com/show/61986/avatar.svg"
              alt="avatar"
            />
            <h2>Alexandr</h2>
          </a>
        </div>
        <nav className={styles.nav}>
          <div className={navFullClass} onClick={activeHandle}>
            <span></span>
          </div>
          <div className={active ? styles.active : ""}>
            <ul>
              <li>
                <a href="#home" onClick={activeHandle}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" onClick={activeHandle}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={activeHandle}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contacts" onClick={activeHandle}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
