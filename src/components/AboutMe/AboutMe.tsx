import React from "react";
import photo from '../../assets/images/CVV2.jpg'
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
          <div className={styles.descriptions}>
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
            src={photo}
            alt="avatar"
            title="It's me :D"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
