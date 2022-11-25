import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
