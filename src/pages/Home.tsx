import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { MainContainer } from "../components/MainContainer"
import ResumeForm from "../components/ResumeForm"
import { useState } from "react"
import { JobExperience } from "../types/jobExperience.types"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfGenerator from "../components/resume/PdfGenerator"
import { EducationTypes } from "../types/Education.types"
import { BackendUser, UserTypes } from "../types/user.types"

const Home = () => {
  const [jobExperience, setJobExperience] = useState<JobExperience[]>([])
  const [education, setEducation] = useState<EducationTypes[]>([])
  const [user, setUser] = useState<UserTypes[]>([])


    return (
        <MainContainer title={"Home"} >
            <Box>
            <ResumeForm jobExperience={jobExperience} setJobExperience={setJobExperience} education={education} setEducation={setEducation} user={user} setUser={setUser}  />
          </Box>
      </MainContainer>
    ) 
}

export default Home