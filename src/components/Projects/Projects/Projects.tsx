import React from 'react';
import styles from './Projects.module.scss';

const Projects: React.FC<TWorks> = ({
                                      logo,
                                      title,
                                      link,
                                      description
                                    }) => {
  const [active, isActive] = React.useState(false);
  
  const isWatchHandler = () => {
    isActive(!active);
  };
  
  
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.isWatch} onMouseEnter={isWatchHandler} onMouseLeave={isWatchHandler}>
        <div>
          {active
            ? (<div className={styles.watch}>
              <div className={styles.watchWrapper}>
                <a href={link} target="_blank" rel="noreferrer">View</a>
              </div>
            </div>)
            : null}
          <img className={styles.logo} src={logo} alt="logo"/>
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