import React from 'react';
import styles from './SectionSkills.module.scss';
import Skill from "../Skills/Skill";


const SectionSkills: React.FC<TSkill> = ({titleBlock, title, logo, description}) => {
  return (<section className={styles.blockTwo}>
    <div className={styles.blockWrapper}>
      
      <h2 className={styles.title}>
        {titleBlock}
      </h2>
      
      <div className={styles.skillsAndWorks}>
        <Skill
          logo={logo}
          title={title}
          description={description}/>
        <Skill
          logo={logo}
          title={title}
          description={description}/>
        <Skill
          logo={logo}
          title={title}
          description={description}/>
      </div>
    </div>
  </section>);
};

export default SectionSkills;

type TSkill = {
  titleBlock: string
  title: string
  logo: string
  description: string
}