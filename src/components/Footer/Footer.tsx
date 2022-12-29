import React from 'react';
import styles from './Footer.module.scss';
import gmailIcon from '../../assets/icons/gmail.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
import telegramIcon from '../../assets/icons/telegram.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3>Alexandr Romanov</h3>
        <div className={styles.someBlockWrapper}>
          <div className={styles.someBlock}>
            <a href="mailto:yaromahob@gmail.com"
               target="_blank"
               rel="noreferrer">
              <img src={gmailIcon}
                   alt="gmail"/>
            </a>
          </div>
          <div className={styles.someBlock}>
            <a href="https://www.linkedin.com/in/alexandr-romanov-10687425a/"
               target="_blank"
               rel="noreferrer">
              <img src={linkedInIcon}
                   alt="linkedIn"/>
            </a>
          </div>
          <div className={styles.someBlock}>
            <a href="https://t.me/yaromahob"
               target="_blank"
               rel="noreferrer">
              <img src={telegramIcon}
                   alt="telegram"/>
            </a>
          </div>
        </div>
        <div className={styles.allRight}>
          <a href="https://t.me/yaromahob" target="_blank" rel="noreferrer">@yaromahob</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
