import React from "react";
import { Slider } from "../components";
import classes from "./sliderWapper.module.scss";
const SliderWapper: React.FC = ({ children }) => {
  return (
    <section className={classes.container}>
      <Slider />
      {children}
    </section>
  );
};

export default SliderWapper;
