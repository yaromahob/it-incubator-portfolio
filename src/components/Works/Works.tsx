import React from 'react';
import styles from './Works.module.scss';

const Works:React.FC<TWorks> = ({
                                                      logo, title, description}) => {
  const [active, isActive] = React.useState(false);
  
  const isWatchHandler = () => {
    isActive(!active)
  };
  
  
  
  
  return (
    <div className={styles.blockWrapper}>
        <div className={styles.isWatch} onMouseEnter={isWatchHandler} onMouseLeave={isWatchHandler}>
          {active
            ? <div className={styles.watch}>
              <div className={styles.watchWrapper}>
                <h3>Watch</h3>
                <img src="https://cdn.icon-icons.com/icons2/3002/PNG/512/eye_icon_187993.png" alt="eye"/>
              </div></div>
            : null}
          <img className={styles.logo} src={logo} alt="logo"/>
        </div>
        <div className={styles.aboutProject}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
    </div>
  );
};

export default Works;


type TWorks = {
  logo: string
  title: string
  description: string
}