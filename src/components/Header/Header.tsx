import React from "react";
import styles from "./Header.module.scss";
import cv from '../../assets/yaromahobCV.pdf'
import logo from '../../assets/images/logo.jpg'

type HeaderPropsType = {
  active: boolean;
  activeCallback: (isActive: boolean) => void;
};
const Header: React.FC<HeaderPropsType> = ({active, activeCallback}) => {
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
          <a href={"https://t.me/yaromahob"} rel="noreferrer" target="_blank" title="My telegram">
            <img
              src={logo}
              alt="logo"
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
                <a href="#feedback" onClick={activeHandle}>
                  Feedback
                </a>
              </li>
              <li>
                <a className={styles.cv} href={cv} download>Download CV</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
