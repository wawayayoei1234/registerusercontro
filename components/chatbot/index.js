import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import stepsth from "./stepsth";
import stepsen from "./stepsen";
import { ThemeProvider } from "styled-components";
import { Box } from "@mui/material";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Prompt",
  headerBgColor: "#28834F",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#28834F",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
function Chatbot() {

  const [language, setlanguage] = useState("EN");

useEffect(() => {
  const language = (localStorage.getItem('language'));
  if (language) {
    setlanguage(language);
  }
}, []);
  return (
    <ThemeProvider theme={theme}>
      <Box>{language === "TH" && (
      <ChatBot
        headerTitle="Authweiler Chatbot"
        botAvatar="https://raw.githubusercontent.com/joft60302/paticles/main/favicon.png"
        floating
        hideUserAvatar
        steps={stepsth}
        bubbleOptionStyle={{ backgroundColor: "#fff", color: "#4a4a4a" }}
      />
      )}</Box>
      <Box>{language === "EN" && (
      <ChatBot
        headerTitle="Authweiler Chatbot"
        botAvatar="https://raw.githubusercontent.com/joft60302/paticles/main/favicon.png"
        floating
        hideUserAvatar
        steps={stepsen}
        bubbleOptionStyle={{ backgroundColor: "#fff", color: "#4a4a4a" }}
      />
      )}</Box>
    </ThemeProvider>
  );
}

export default Chatbot;
