import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import AddExperienceModal from "../components/modals/AddExperienceModal"
import { MainContainer } from "../components/MainContainer"
import ResumeForm from "../components/ResumeForm"

const Home = () => {
    return (
        <MainContainer title={"Home"} >
   
   <Box>
            <ResumeForm />
          </Box>
      </MainContainer>
    )
}

export default Home