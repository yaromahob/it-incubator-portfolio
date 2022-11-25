import React from 'react';
import styles from './SectionAboutMe.module.scss'
const SectionAboutMe = () => {
  return (
    <section className={styles.blockOne}>
      <div className={styles.blockWrapper}>
        <div className={styles.aboutMe}>
          <span>Hello!</span>
          <span>My name is Alexandr</span>
          <span>I am Front-end Developer</span>
        </div>
        <div className={styles.avatar}>
          <img src="https://www.svgrepo.com/show/65453/avatar.svg" alt="avatar"/>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
