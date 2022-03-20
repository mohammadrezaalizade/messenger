import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Chatpage, MessagePage } from "./components";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  console.log(location);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Chatpage />} />
        <Route path="/message" element={<MessagePage />}>
          <Route path=":chatId" element={<MessagePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
