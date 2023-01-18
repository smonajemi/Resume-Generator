
import { createTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'


export const useForm = () => {
    const { getItem, setItem, clearItem } = useLocalStorage()
    const [isView, setView] = useState(false)
    const handleCloseModal = () => setView(false);
    const [activeStep, setActiveStep] = useState(0);
    const theme = createTheme();
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
    
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    
    return {
        isView,
        setView,
        handleCloseModal,
        activeStep, 
        setActiveStep,
        theme,
        handleNext,
        handleBack
    } as const
}

