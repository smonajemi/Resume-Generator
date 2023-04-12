import { Box } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import ResumeForm from "../components/ResumeForm"
import { useState } from "react"
import { JobExperience } from "../types/jobExperience.types"
import { EducationTypes } from "../types/education.types"
import { UserTypes } from "../types/user.types"
import DefaultToaster from "../components/DefaultToaster"

const Home = () => {
  const [jobExperience, setJobExperience] = useState<JobExperience[]>([])
  const [education, setEducation] = useState<EducationTypes[]>([])
  const [user, setUser] = useState<UserTypes[]>([
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      summary: '',
      technicalSkill: '',
      skillSet: ['']
    }
  ])
  const [isOpen, setOpen] = useState(false);
  const [toasterMessage, setToasterMessage] = useState({ severity: 'success', message: '' });
  
    return (
    <>
    <MainContainer title={"ResumeGenie"} >
      <ResumeForm jobExperience={jobExperience} setJobExperience={setJobExperience} education={education} setEducation={setEducation} user={user} setUser={setUser} setOpen={setOpen} isOpen={isOpen} toasterMessage={toasterMessage.message as any} setToasterMessage={setToasterMessage}/>
    </MainContainer>
    <DefaultToaster setOpen={setOpen} isOpen={isOpen} severity={toasterMessage.severity as any} message={toasterMessage.message}/>
    </>
    ) 
}

export default Home