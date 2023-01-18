import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { MainContainer } from "../components/MainContainer"
import ResumeForm from "../components/ResumeForm"
import { useState } from "react"
import { JobExperience } from "../types/jobExperience.types"

const Home = () => {
  const [jobExperience, setJobExperience] = useState<JobExperience[]>([])
 
    return (
        <MainContainer title={"Home"} >
   
   <Box>
            <ResumeForm jobExperience={jobExperience} setJobExperience={setJobExperience} />
          </Box>
      </MainContainer>
    )
}

export default Home