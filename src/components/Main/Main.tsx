import React from 'react';
import styles from './Main.module.scss'
import SectionAboutMe from "../SectionAboutMe/SectionAboutMe";
import SectionSkills from "../SectionSkills/SectionSkills";
import HireMe from "../HireMe/HireMe";
import ForCommunication from "../ForCommunication/ForCommunication";
import SectionWorks from "../SectionWorks/SectionWorks";




const Main = () => {
  return (
    <main className={styles.main}>
      <SectionAboutMe/>
      <SectionSkills />
      <SectionWorks />
      <HireMe/>
      <ForCommunication/>
    </main>
  );
};

export default Main;
