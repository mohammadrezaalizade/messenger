import React from "react";
import { motion } from "framer-motion";

interface UserStatusProps {
  isOnline: Boolean;
}

const userStatusVariants = {
  initOnline: {
    backgroundColor: "#04e013",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "100%",
    boxShadow: "0px 0px 2px 4px #7AE57B",
  },
  animatOnline: {
    boxShadow: "0px 0px 2px 4px #59E556",
  },
  initOfline: {
    backgroundColor: "#b6b9c3",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "100%",
    boxShadow: "0px 0px 2px 4px #f0f0fb",
  },
  animatOffline: {
    boxShadow: "0px 0px 2px 4px #f6f6fd",
  },
};

const UserStatus: React.FC<UserStatusProps> = ({ isOnline }) => {
  return (
    <motion.span
      variants={userStatusVariants}
      initial={isOnline ? "initOnline" : "initOfline"}
      animate={isOnline ? "animatOnline" : "animatOffline"}
      transition={{
        repeat: Infinity,
        duration: 1,
        delay: 0.1,
      }}
    ></motion.span>
  );
};

export default UserStatus;
