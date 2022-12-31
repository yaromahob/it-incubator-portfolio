import React from "react";
import styles from "./HireMe.module.scss";
const HireMe = () => {
  return (
    <section className={styles.hireMe}>
      <div className={styles.hireMeWrapper}>
        <h3>I am considering remote work options</h3>

        <a href={"https://t.me/yaromahob"} rel="noreferrer" target="_blank">
          Hire me!
        </a>
      </div>
    </section>
  );
};

export default HireMe;
