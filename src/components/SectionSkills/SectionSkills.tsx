import React from 'react';
import Skill from "./Skills/Skill";
import styles from './SectionSkills.module.scss';
import javaScript from '../../assets/icons/javaScript.svg'
import typeScript from '../../assets/icons/typeScript.svg'
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/reduxToolkit.svg'
import formik from '../../assets/icons/formik.svg'
import restAPI from '../../assets/icons/restAPI.svg'
import git from '../../assets/icons/git.svg'
import materialUi from '../../assets/icons/materialUi.svg'
import sass from '../../assets/icons/sass.svg'
import html from '../../assets/icons/html.svg'


const SectionSkills: React.FC = () => {
  return (
    <section className={styles.blockTwo} id='skills'>
    <div className={styles.blockWrapper}>
      
      <h2 className={styles.title}>
        Skills
      </h2>
      
      <div className={styles.skillsAndWorks}>
        <Skill
          logo={javaScript}
          title={'JavaScript'}
          />
        <Skill
          logo={typeScript}
          title={'TypeScript'}
          />
        <Skill
          logo={react}
          title={'React'}
          />
        
        <Skill
          logo={redux}
          title={'Redux'}
          />
        
        <Skill
          logo={formik}
          title={'Formik'}
          />
        
        <Skill
          logo={restAPI}
          title={'RestAPI'}
          />

        <Skill
          logo={git}
          title={'Git'}
          />
          
        <Skill
          logo={materialUi}
          title={'Material UI'}
          />
        
        <Skill
          logo={sass}
          title={'Sass'}
          />
        
        <Skill
          logo={html}
          title={'HTML'}
          />
        
        
      </div>
    </div>
  </section>);
};

export default SectionSkills;
