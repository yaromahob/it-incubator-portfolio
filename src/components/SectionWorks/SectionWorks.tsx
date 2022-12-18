import React from 'react';
import Works from './Works/Works';
import styles from './SectionWorks.module.scss';
import todolist from '../../assets/icons/todolist.jpg';
import socialNetwork from '../../assets/icons/socialNetwork.jpg';



const SectionWorks: React.FC = () => {
  return (<section className={styles.blockTwo}>
    <div className={styles.blockWrapper}>
      
      <h2 className={styles.title}>
        My Works
      </h2>
      
      <div className={styles.skillsAndWorks}>
        <Works
          logo={todolist}
          title={'Todolist'}
          description={'React, Redux, ReduxThunk, Axios'}
        />
        <Works
          logo={socialNetwork}
          title={'Social Network'}
          description={'React, Redux, ReduxThunk, Axios'}
        />

      </div>
    </div>
  </section>);
};

export default SectionWorks;

