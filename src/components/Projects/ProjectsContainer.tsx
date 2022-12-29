import React from 'react';
import styles from './ProjectsContainer.module.scss';
import todolist from '../../assets/images/todolist.jpg';
import socialNetwork from '../../assets/images/socialNetwork.jpg';
import museum from '../../assets/images/museumNative.png';
import photofilter from '../../assets/images/photofilter.png';
import Projects from './Projects/Projects';


const ProjectsContainer: React.FC = () => {
  return (<section className={styles.blockTwo}>
    <div className={styles.blockWrapper}>
      
      <h2 className={styles.title}>
        My Projects
      </h2>
      
      <div className={styles.skillsAndWorks}>
        <Projects
          logo={todolist}
          link={'https://yaromahob.github.io/incubator-todo-list-ts/'}
          title={'Todolist'}
          description={'React, Redux, ReduxThunk, Axios'}
        />
        
        <Projects
          logo={socialNetwork}
          title={'Social Network'}
          link={'https://incubator-social-network.vercel.app/'}
          description={'React, Redux, ReduxThunk, Axios'}
        />
        <Projects
          logo={museum}
          title={'Museum'}
          link={'https://rolling-scopes-school.github.io/yaromahob-JSFE2021Q3/museum-dom/'}
          description={'JS Native'}
        />
        <Projects
          logo={photofilter}
          title={'Photofilter'}
          link={'https://rolling-scopes-school.github.io/yaromahob-JSFEPRESCHOOL/photofilter/'}
          description={'JS Native'}
        />
      
      </div>
    </div>
  </section>);
};

export default ProjectsContainer;

