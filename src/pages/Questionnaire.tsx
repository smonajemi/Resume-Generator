import React, { useState, Fragment } from "react";
import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

import { MainContainer } from "../components/MainContainer";
import { useApi } from "../components/hooks/useApi";

const useStyles = makeStyles({
  chatBox: {
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  },
  chatContent: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "300px",
    overflowY: "auto",
  },
  chatMessage: {
    marginBottom: "10px",
  },
  widerCard: {
    overflow: 'auto',
    height: '45em',
    width: "80%", // Adjust this value to change the width of the card
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  dotOne: {
    width: "8px",
    height: "8px",
    margin: "0 4px",
    borderRadius: "50%",
    backgroundColor: "#a3a1a1",
    animation: "$bounce 0.6s infinite alternate",
    animationDelay: () => `${0.2}s`,
  },
  dotTwo: {
    width: "8px",
    height: "8px",
    margin: "0 4px",
    borderRadius: "50%",
    backgroundColor: "#a3a1a1",
    animation: "$bounce 0.6s infinite alternate",
    animationDelay: () => `${0.3}s`,
  },
  dotThree: {
    width: "8px",
    height: "8px",
    margin: "0 4px",
    borderRadius: "50%",
    backgroundColor: "#a3a1a1",
    animation: "$bounce 0.6s infinite alternate",
    animationDelay: () => `${0.4}s`,
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-6px)",
    },
  },
});

interface ChatMessage {
  message: string;
  question: string;
  isUser: boolean;
}

const Questionnaire: React.FC = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const { questionnaire } = useApi();

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = async () => {
    // Save user message to chat history
    const userMessage: ChatMessage = {
      message: "",
      question: inputValue,
      isUser: true,
    };
    setChatHistory([...chatHistory, userMessage]);

    const prompt = {
      story:
        "Sina is a 31 old male from toronto having extensive experience in software development and hospitality. Sina speaks Persian and English",
      question: inputValue,
    };

    const response = await questionnaire(prompt);

    const botMessage: ChatMessage = {
      message: response as any,
      question: inputValue,
      isUser: false,
    };
    setChatHistory([...chatHistory, botMessage]);

    // Clear input field
    setInputValue("");
  };

  return (
    <MainContainer title={"Questionnaire"}>
      <Card className={classes.widerCard} >
        <CardContent >
          <Box display="flex" flexDirection="column" marginTop="1em" style={{}}>
            {chatHistory.map((chatMessage, index) => (
              <Fragment key={index}>
                <Box
                  display="flex"
                  justifyContent={
                    chatMessage.isUser ? "flex-end" : "flex-start"
                  }
                  style={{
                    padding: "0.5em .5em 0em 0.5em",
                    marginTop: ".5em",
                    maxWidth: "75%",
                    borderWidth: "2px",
                    backgroundColor: "yellow",
                    borderStyle: "solid",
                    borderColor: "red",
                    borderRadius: "20px",
                    width: "fit-content",
                    marginLeft: "auto",
                  }}
                >
                  <Typography
                    variant="body1"
                    className={`${classes.chatMessage} ${
                      chatMessage.isUser ? "user" : "bot"
                    }`}
                    style={{ textAlign: "right" }}
                  >
                    {chatMessage.question}
                  </Typography>
                </Box>
                {chatMessage.message ? (
                  <Box
                    display="flex"
                    justifyContent={
                      chatMessage.isUser ? "flex-end" : "flex-start"
                    }
                    style={{
                      padding: "0.5em .5em 0em 0.5em",
                      marginTop: ".5em",
                      maxWidth: "75%",
                      borderWidth: "2px",
                      backgroundColor: "red",
                      borderStyle: "solid",
                      borderColor: "yellow",
                      borderRadius: "20px",
                      width: "fit-content",
                      marginRight: "auto",
                    }}
                  >
                    <Typography
                      variant="body1"
                      className={`${classes.chatMessage} ${
                        chatMessage.isUser ? "user" : "bot"
                      }`}
                      style={{ textAlign: "left", wordWrap: "break-word" }}
                    >
                      {chatMessage.message}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    justifyContent={
                      chatMessage.isUser ? "flex-end" : "flex-start"
                    }
                    marginBottom="0.5em"
                    style={{
                      padding: "0.5em .5em 0em 0.5em",
                      margin: ".5em 0 .5rm 0",
                      maxWidth: "75%",
                      borderRadius: "20px",
                      width: "fit-content",
                      marginRight: "auto",
                    }}
                  >
                    <Typography
                      variant="body1"
                      className={`${classes.chatMessage} ${
                        chatMessage.isUser ? "user" : "bot"
                      }`}
                      style={{ textAlign: "left", wordWrap: "break-word" }}
                    >
                      <Box className={classes.root}>
                        <Box className={classes.dotOne}></Box>
                        <Box className={classes.dotTwo}></Box>
                        <Box className={classes.dotThree}></Box>
                      </Box>
                    </Typography>
                  </Box>
                )}
              </Fragment>
            ))}
          </Box>
          <Box style={{display: 'flex', justifyContent: 'center', marginTop: '1em', position: 'fixed', bottom: '1em', left: 0, right: 0}}>
  <Box flex="1">
    <TextField
      id="chat-input"
      label="Type your question here"
      value={inputValue}
      onChange={handleInputValueChange}
      variant="outlined"
    />
  </Box>

  <Box style={{ padding: ".5em" }}>
    <Button variant="contained" color="primary" onClick={handleSendClick}>
      Send
    </Button>
  </Box>
</Box>
        </CardContent>
      </Card>
    </MainContainer>
  );
};

export default Questionnaire;
