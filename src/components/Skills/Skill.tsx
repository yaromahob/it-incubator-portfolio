import React from 'react';
import styles from './Skill.module.scss';

const Skill:React.FC<TSkillAndMyWorks> = ({
                                                      logo, title, description}) => {
  return (
    <div className={styles.blockWrapper}>
      <img className={styles.logo} src={logo} alt="logo"/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Skill;


type TSkillAndMyWorks = {
  logo: string
  title: string
  description: string
}