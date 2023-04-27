import React, { useState, Fragment } from "react";
import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Button,
  Typography,
  Box,
  Divider
} from "@material-ui/core";
import { Input, Send } from "@mui/icons-material";
import { MainContainer } from "../components/MainContainer";
import { useApi } from "../components/hooks/useApi";

const useStyles = makeStyles({
  chatBox: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#E6E6FA',
    boxShadow: '2px 2px 60px rgba(10, 0, 10, 0.9)', 
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
    margin: ".5em auto",
    height: '75vh',
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#E6E6FA',
    boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.2)', 
    borderRadius: 20,

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

const ChatBox: React.FC = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const { ChatBox } = useApi();

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

    const response = await ChatBox(prompt);

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
    <MainContainer title={"ChatBox"}>
      <Card className={classes.widerCard} >
        <CardContent >
          <Box display="flex" flexDirection="column" marginTop="1em" style={{width: '18em'}}>
            {chatHistory.map((chatMessage, index) => (
              <Fragment key={index}>
                <Box
                  display="flex"
                  justifyContent={
                    chatMessage.isUser ? "flex-end" : "flex-start"
                  }
                  style={{
                    padding: "0.5em .5em .1em .5em",
                    marginTop: ".5em",
                    maxWidth: "75%",
                    borderWidth: "2px",
                    backgroundColor: "#6A5ACD",
                    color: 'white',
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
                      padding: "0.5em .5em .1em 0.5em",
                      marginTop: ".5em",
                      maxWidth: "75%",
                      borderWidth: "2px",
                      color: 'white',
                      backgroundColor: "#51414F",
                      // borderStyle: "solid",
                      // borderColor: "yellow",
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
                <Divider style={{margin: '1em 0 1em 0'}} />
              </Fragment>
            ))}
          </Box>
       
          <Box style={{display: 'flex', justifyContent: 'center', marginTop: '1em', position: 'fixed', bottom: '0.5em', left: 0, right: 0}}>
          <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <TextField
    id="chat-input"
    label="Type your question here"
    value={inputValue}
    onChange={handleInputValueChange}
    variant="outlined"
    InputProps={{ style: { borderRadius: 20 } }}
    style={{ borderRadius: 20 }}
  />
  
  <Button variant="outlined" color="primary" style={{ borderRadius: 20, marginLeft: 10 }} onClick={handleSendClick}><Send /></Button>
</Box>
     
</Box>
        </CardContent>
      </Card>
    </MainContainer>
  );
};

export default ChatBox;
