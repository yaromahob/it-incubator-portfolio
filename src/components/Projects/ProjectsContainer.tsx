import React from "react";
import styles from "./ProjectsContainer.module.scss";
import todolist from "../../assets/images/todolist.png";
import socialNetwork from "../../assets/images/socialNetwork.jpg";
import museum from "../../assets/images/museumNative.png";
import Portfolio from "../../assets/images/Portfolio.png";
import cards from "../../assets/images/cards.png";
import Projects from "./Projects/Projects";

const ProjectsContainer: React.FC = () => {
  return (
    <section className={styles.blockTwo} id="projects">
      <div className={styles.blockWrapper}>
        <h2 className={styles.title}>My Projects</h2>

        <div className={styles.skillsAndWorks}>
          <Projects
            logo={cards}
            title={"Cards"}
            link={
              "https://yaromahob.github.io/it-incubator-friday-project"
            }
            description={"React, Redux, ReduxThunk, Axios, TS, React-router-dom, formik, dayjs"}
          />
          <Projects
            logo={todolist}
            link={"https://yaromahob.github.io/incubator-todolist-migration-toolkit"}
            title={"Todolist"}
            description={"React, Redux-toolkit, ReduxThunk, Axios, TS, formik"}
          />
          <Projects
            logo={Portfolio}
            title={"Portfolio"}
            link={
              "https://yaromahob.github.io/it-incubator-portfolio/"
            }
            description={"React, Axios, TS, formik, node-sass"}
          />
          <Projects
            logo={museum}
            title={"Museum"}
            link={
              "https://rolling-scopes-school.github.io/yaromahob-JSFE2021Q3/museum-dom/"
            }
            description={"JS Native"}
          />
          
          <Projects
            logo={socialNetwork}
            title={"Social Network"}
            link={"https://incubator-social-network.vercel.app/"}
            description={"React, Redux, ReduxThunk, Axios"}
          />

        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
