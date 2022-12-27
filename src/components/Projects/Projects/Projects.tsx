import React from 'react';
import styles from './Projects.module.scss';

const Projects: React.FC<TWorks> = ({
                                      logo,
                                      title,
                                      link,
                                      description
                                    }) => {
  
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.isWatch}>
        <div className={styles.projectWatch}>
          <div className={styles.watch}>
            <img className={styles.logo} src={logo} alt="logo"/>
          </div>
          <a className={styles.link} href={link} target="_blank" rel="noreferrer">VIEW</a>
        
        </div>
        
        <div className={styles.aboutProject}>
          <h3 className={styles.title}>{title}</h3>
          <div>
            <h4>Technologies used:</h4>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


type TWorks = {
  logo: string
  title: string
  link: string
  description: string
}