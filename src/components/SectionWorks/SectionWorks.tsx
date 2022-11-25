import React from 'react';
import Works from '../Works/Works';
import styles from './SectionWorks.module.scss';


const SectionWorks: React.FC<TSectionSkillAndWorks> = ({titleBlock, title, logo, description}) => {
  return (<section className={styles.blockTwo}>
    <div className={styles.blockWrapper}>
      
      <h2 className={styles.title}>
        {titleBlock}
      </h2>
      
      <div className={styles.skillsAndWorks}>
        <Works
          logo={logo}
          title={title}
          description={description}/>
        <Works
          logo={logo}
          title={title}
          description={description}/>
        <Works
          logo={logo}
          title={title}
          description={description}/>
      </div>
    </div>
  </section>);
};

export default SectionWorks;

type TSectionSkillAndWorks = {
  titleBlock: string
  title: string
  logo: string
  description: string
}