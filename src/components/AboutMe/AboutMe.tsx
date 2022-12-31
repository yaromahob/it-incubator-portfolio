import React from "react";
import styles from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <section className={styles.blockOne}>
      <div className={styles.blockWrapper}>
        <div className={styles.aboutMe}>
          <span className={styles.welcome}>Welcome to my Portfolio</span>
          <h2 className={styles.title}>
            Hi, I'm
            <span>Alexandr Romanov</span>
          </h2>
          {/* <span>Frontend Developer</span> */}
          <div className={styles.discriptions}>
            <span>I’m a frontend developer.</span>
            <span>I am creating SPA-apps use React(JS/TS), Redux.</span>
            <span>
              I would like to find full-time employment or project work in a
              company with a modern approach to development and a collaborative
              team.
            </span>
          </div>
        </div>

        <div className={styles.avatar}>
          <img
            src="https://www.svgrepo.com/show/65453/avatar.svg"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
