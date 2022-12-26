import React from 'react';
import styles from './Skill.module.scss';

const Skill:React.FC<TSkillAndMyWorks> = ({
                                                      logo, title, }) => {
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="logo"/>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Skill;


type TSkillAndMyWorks = {
  logo: string
  title: string
}