import React from 'react';
import styles from './Main.module.scss'
import SectionOne from "../Section1/SectionOne";
import SectionTwo from "../Section2/SectionTwo";
import SectionThree from "../Section3/SectionThree";
import SectionFour from "../Section4/SectionFour";
import SectionFive from "../Section5/SectionFive";

const Main = () => {
  return (
    <div>
      <h3>Main</h3>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  );
};

export default Main;
