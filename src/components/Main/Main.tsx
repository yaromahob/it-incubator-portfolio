import React from "react";
import styles from "./Main.module.scss";
import HireMe from "../HireMe/HireMe";
import Feedback from "../Feedback/Feedback";
import AboutMe from "../AboutMe/AboutMe";
import SkillsContainer from "../Skills/SkillsContainer";
import ProjectsContainer from "../Projects/ProjectsContainer";

const Main = () => {
  return (
    <main className={styles.main}>
      <AboutMe />
      <SkillsContainer />
      <ProjectsContainer />
      <HireMe />
      <Feedback />
    </main>
  );
};

export default Main;
