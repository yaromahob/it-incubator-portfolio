import React from 'react';
import styles from './ContactWithMe.module.scss'
const ContactWithMe = () => {
  return (
    <section className={styles.forCommunication}>
      <div className={styles.forCommunicationWrapper}>
        <h3 className={styles.title}>Contacts</h3>
        <div className={styles.feedBack}>
          <form action="" method="get" className={styles.form}>
            <div className={styles.formExample}>
              <label className={styles.label} htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={styles.formExample}>
              <label className={styles.label} htmlFor="email">Enter your email </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className={styles.yourText}>
              <textarea  name="" id="" cols={30} rows={10}></textarea>
            </div>
          </form>
        </div>
        <button className={styles.submit}>Submit</button>
      </div>
    </section>
  );
};

export default ContactWithMe;
