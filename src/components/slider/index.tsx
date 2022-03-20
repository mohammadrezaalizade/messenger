import React from "react";
import classes from "./slider.module.scss";
import { SearchIcon } from "@heroicons/react/outline";
import Contant from "./Contant";
const Slider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* HEADER */}
        <div className={classes.header}>
          <div className={classes.input}>
            <SearchIcon />
            <input type="text" placeholder="Find a convesation" />
          </div>
        </div>
        {/* CONTENT */}
        <div className={classes.contantsContainer}>
          <div className={classes.contants}>
            <Contant />
            <Contant />
            <Contant />
            <Contant />
            <Contant />
          </div>
          {/* <div className={classes.profileOwnerAccount}>
            <img
              id={classes.ownerProfile}
              src="/assets/images/sampleprofile.avif"
              alt="profile"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
