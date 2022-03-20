import React from "react";
import classes from "./contact.module.scss";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const Contant = () => {
  return (
    <Link to="/chat/:jhbhknhj">
      <a className={classes.container}>
        <img
          id={classes.contantProfile}
          src="/assets/images/sampleContact.avif"
          alt="sampleContact"
        />
        <div className={classes.contant}>
          <div className={classes.info}>
            <h2>Mohammadreza</h2>
            <p>Hello what's up body?</p>
          </div>
          <div className={classes.tools}>
            <DotsHorizontalIcon />
            <span>3/20/2022</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Contant;
