import { Box } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import ResumeForm from "../components/ResumeForm"
import { useState } from "react"
import { JobExperience } from "../types/jobExperience.types"
import { EducationTypes } from "../types/Education.types"
import { UserTypes } from "../types/user.types"

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