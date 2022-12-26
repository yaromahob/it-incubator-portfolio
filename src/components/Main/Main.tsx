import React from 'react';
import styles from './Main.module.scss'
import HireMe from "../HireMe/HireMe";
import ContactWithMe from "../ContactsWithMe/ContactWithMe";
import AboutMe from '../AboutMe/AboutMe';
import SkillsContainer from "../Skills/SkillsContainer";
import ProjectsContainer from "../Projects/ProjectsContainer";




const Main = () => {
  return (
    <main className={styles.main}>
      <AboutMe/>
      <SkillsContainer />
      <ProjectsContainer />
      <HireMe/>
      <ContactWithMe/>
    </main>
  );
};

export default Main;
