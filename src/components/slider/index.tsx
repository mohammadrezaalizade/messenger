import React from "react";
import classes from "./slider.module.scss";
import { motion } from "framer-motion";
const Slider = () => {
  return (
    <motion.div
      // initial={{
      //   width: "10vw",
      // }}
      // animate={{
      //   width: "35vw",
      //   transition: { type: "spring", stiffness: 200 },
      // }}
      className={classes.container}
    >
      Slider
    </motion.div>
  );
};

export default Slider;
