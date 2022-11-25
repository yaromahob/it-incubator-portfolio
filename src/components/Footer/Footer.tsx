import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3>Alexandr Romanov</h3>
        <div className={styles.someBlockWrapper}>
          <div className={styles.someBlock}></div>
          <div className={styles.someBlock}></div>
          <div className={styles.someBlock}></div>
          <div className={styles.someBlock}></div>
        </div>
        <div className={styles.allRight}>
          <a href="https://t.me/yaromahob" target='_blank' >@yaromahob</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
