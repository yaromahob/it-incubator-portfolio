import React from 'react';
import styles from './Main.module.scss'
import SectionAboutMe from "../SectionAboutMe/SectionAboutMe";
import SectionSkills from "../SectionSkills/SectionSkills";
import HireMe from "../HireMe/HireMe";
import ForCommunication from "../ForCommunication/ForCommunication";
import SectionWorks from "../SectionWorks/SectionWorks";

const defSkills = {
  titleBlock: 'My Skills',
  logo: 'https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp',
  title: 'React',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto.'
};
const defWorks = {
  titleBlock: 'My Works',
  logo: 'https://www.svgrepo.com/show/359398/todolist-pen.svg',
  title: 'Modern Todolist',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto.'
};

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionAboutMe/>
      <SectionSkills {...defSkills}/>
      <SectionWorks {...defWorks}/>
      <HireMe/>
      <ForCommunication/>
    </main>
  );
};

export default Main;
