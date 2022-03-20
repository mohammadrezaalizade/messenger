import React, { useState } from "react";
import SliderWapper from "../../layout/SliderWapper";
import classes from "./chatpage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Picker from "emoji-picker-react";
import {
  MenuIcon,
  VideoCameraIcon,
  PhoneIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import UserStatus from "../UI/UserStatus";
import { useLocation, useParams } from "react-router-dom";

const ChatPage = () => {
  const [message, setMessage] = useState<string>("");
  const [emojiPickerStatus, setEmojiPickerStatus] = useState<boolean>(false);
  const sendMessage = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setMessage("");
    setEmojiPickerStatus(false);
  };
  const params = useParams();
  console.log(params);

  const onEmojiClick = (_: any, emojiObject: any) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };
  return (
    <SliderWapper>
      {params.chatId ? (
        <section className={classes.container}>
          {/* Header */}
          <div className={classes.header}>
            {/* MENU */}
            <MenuIcon className={classes.smMenu} />
            {/* USER INFO */}
            <div className={classes.userInfo}>
              <span className={classes.userName}>Mohammadreza</span>
              <UserStatus isOnline={true} />
            </div>
            {/* VOICE CALL & VIDEO CALL */}
            <div className={classes.call}>
              <VideoCameraIcon />
              <PhoneIcon />
            </div>
          </div>
          {/* CHAT BODY */}
          <div className={classes.chatbody}>
            <h1>Chat is here</h1>
          </div>
          {/* INPUT */}
          {emojiPickerStatus && (
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{
                  display: "flex",
                  justifyContent: "end",
                  paddingBottom: "1rem",
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                <Picker onEmojiClick={onEmojiClick} />
              </motion.div>
            </AnimatePresence>
          )}
          <div className={classes.inputContainer}>
            <motion.div
              initial={{
                border: "2px solid transparent",
              }}
              whileHover={{
                border: "2px solid #8472FC",
                transition: { duration: 1, delay: 0.1, type: "spring" },
              }}
              whileFocus={{
                border: "2px solid #8472FC",
                transition: { duration: 1, delay: 0.1, type: "spring" },
              }}
              whileTap={{
                border: "2px solid #8472FC",
                transition: { duration: 1, delay: 0.1, type: "spring" },
              }}
              className={classes.input}
            >
              <input
                id={classes.messageInput}
                type="text"
                placeholder="Message to Mohammadreza"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              />
              <div className={classes.userTools}>
                <PaperAirplaneIcon
                  id={classes.sendMessage}
                  onClick={sendMessage}
                />
                <EmojiHappyIcon
                  onClick={() => setEmojiPickerStatus(!emojiPickerStatus)}
                />
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <div className={classes.EmptyChat}>
          <h1>Oops, You've not chosen any chat yet.</h1>
        </div>
      )}
    </SliderWapper>
  );
};

export default ChatPage;
