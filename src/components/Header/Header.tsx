import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header} id='home'>
        <div className={styles.headerWrapper}>
          <div  className={styles.writeMe}>
            <a href={'https://t.me/yaromahob'}
               rel="noreferrer"
               target='_blank'>
            <img src="https://www.svgrepo.com/show/61986/avatar.svg" alt="avatar"/>
            <h2>Alexandr</h2>
            </a>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
