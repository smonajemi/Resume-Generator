
import { createTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { EducationTypes } from '../../types/Education.types'
import { JobExperience } from '../../types/jobExperience.types'
import { UserTypes } from '../../types/user.types'
import { useLocalStorage } from './useLocalStorage'


export const useForm = () => {
    const { getItem, setItem, clearItem } = useLocalStorage()
    const [currentExperience, setCurrentExperience] = useState<JobExperience | any>()
    const [currentEducation, setCurrentEducation] = useState<EducationTypes | any>()
    const [currentUser, setCurrentUser] = useState<UserTypes | any>()
    const [isView, setView] = useState(false)
    const handleCloseModal = () => setView(false);
    const [activeStep, setActiveStep] = useState(0);
    const theme = createTheme();

  
   

    return {
        isView,
        setView,
        handleCloseModal,
        activeStep, 
        setActiveStep,
        theme,
        currentExperience, 
        setCurrentExperience,
        currentUser, 
        setCurrentUser,
        currentEducation,
        setCurrentEducation,
    } as const
}

