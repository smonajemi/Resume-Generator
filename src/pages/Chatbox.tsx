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
import { Send } from "@mui/icons-material";
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
    position: 'fixed',
    right: '0.5em',
    left: '0.5em',
    top: '5em',
    height: '75%',  
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
  const { ChatBox} = useApi();

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const handleCustomKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };
  const handleSendClick = async () => {
    // Clear input field
      setInputValue("");

    // Save user message to chat history
    const userMessage: ChatMessage = {
      message: "",
      question: inputValue,
      isUser: true,
    };
      setChatHistory([...chatHistory, userMessage]);
      const prompt = {
        story: 'Sina Monajemi, 31 year old man lives in Toronto, ON is an experienced professional with a passion for technology and excellent interpersonal and communication skills. He began his career in the hospitality industry, but his interest in IT led him to switch careers and start freelancing to learn and improve. Sina has experience working in an Agile team and is confident in his ability to collaborate effectively with others.\n\nAs a Full Stack Developer, Sina specializes in crafting robust web applications with Node.js and React, backed by a great knowledge of SQL and NoSQL queries. He is currently utilizing OpenAI API to create fun and engaging cross-platform mobile applications using the Ionic framework. Additionally, Sina has a proven track record of improving website design for improved navigation and aesthetic appeal and providing valuable consultancy services to businesses for their website development needs.\n\nSina has worked as a Junior Software Developer at Black Professionals In Tech Network (BPTN) Inc, where he participated in daily scrum meetings, sprint planning, and bug fixes. He worked closely with the QA and product teams as well as other developers to ensure quality and punctual development. Sina contributed to building the BPTN social networking platform using React and improved website performance by refactoring old un-optimized code and changing it to follow proper standards. He also built a REST API using PostgreSQL with Knexjs.\n\nIn addition, Sina has worked as a Software Developer for Seneca College, where he collaborated effectively with team members and project managers through slack communication to develop a remote application for digital receipts & expense payments. He also participated in code review to ensure high code quality and proposed ideas to implement a contact-free application for helping the community stay safe. Sina analyzed user requirements and proposed design software solutions for better UI and UX, implemented enhancements that improved web functionality and responsiveness, and assisted in the back-end development using Java as well as database design using MySQL.\n\nBefore his career switch, Sina worked at Germain Hôtels, where he began as a Guest Service Agent and later became a Night Auditor. As a Guest Service Agent, he communicated with guests in a professional manner to ensure an exceptional customer service experience and developed lasting relationships with guests that built loyalty. As a Night Auditor, he prioritized and organized tasks for an effective workflow and showcased exceptional decision-making and leadership ability when dealing with challenging situations.\n\nOverall, Sina has a diverse background with skills in Amazon Web Services (AWS), Web Development, Node.js, JavaScript, MongoDB, React.js, TypeScript, PostgreSQL, Object-Oriented Design, Programming, Agile Methodologies, GitHub, Time Management, Java, and MySQL. He is a self-starter who is always seeking new opportunities to expand his knowledge and skills, and he has a track record of delivering outstanding results.',
        question: inputValue,
      };
      

    const response = await ChatBox(prompt);

    const botMessage: ChatMessage = {
      message: response as any,
      question: inputValue,
      isUser: false,
    };
    setChatHistory([...chatHistory, botMessage]);
  };
  

  return (
    <MainContainer title="ChatBox">
    <Card className={classes.widerCard}>
      <CardContent>
        <Box display="flex" flexDirection="column" marginTop="1em">
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
                  color: "white",
                  borderRadius: "20px 20px 0 20px",
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
                    color: "white",
                    backgroundColor: "#51414F",
                    borderRadius: "0 20px 20px 20px",
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
                    padding: "0.5em .5em 0 .5em",
                    margin: ".5em 0",
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
              <Divider style={{ margin: "1em 0" }} />
            </Fragment>
          ))}
        </Box>
  
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            bottom: "0.5em",
            left: 0,
            right: 0,
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              padding: 5,
            }}
          >  
  <TextField
    id="chat-input"
    label="Type your question here"
    value={inputValue}
    onChange={handleInputValueChange}
    variant="outlined"
    InputProps={{ style: { borderRadius: 20 } }}
    style={{ borderRadius: 20, width: '100%' }}
    onKeyPress={(e: any) => { handleCustomKey(e) }} // prevent new line
  />
  
  <Button variant="outlined" color="primary" style={{ borderRadius: 20, marginLeft: 10}} onClick={handleSendClick}><Send /></Button>
</Box>
     
</Box>
        </CardContent>
      </Card>
    </MainContainer>
  );
};

export default ChatBox;
