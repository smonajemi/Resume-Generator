import { createTheme } from "@mui/material";
import { useState, SyntheticEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const useLogin = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabs = ['Login', 'Continue as a guest']

    const [toasterMessage, setToasterMessage] = useState({ severity: '', message: '' });
    const [showToaster, setShowToaster] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const theme = createTheme();
    const navigate = useNavigate();
    const { setItem } = useLocalStorage()

    const handleGuestLogin = () => {
        setItem('userId', 'guest')
        navigate('/')
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = new FormData(event.currentTarget);
            const userData = {
                username: data.get('email'),
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                password: data.get('password'),
                rePassword: data.get('re-password')
              }
            
            if (window.location.pathname.includes('signup')) {
                if (!userData.firstName || !userData.lastName || !userData.username || !userData.password || !userData.rePassword) {
                    throw new Error("Please fill out the form to continue");
                } else {
                    setItem('userId', userData.username)
                    navigate('/')
                }
            } if (window.location.pathname.includes('login')) {
                if ( !userData.username || !userData.password) {
                    throw new Error("Please enter your username and password to continue.");
                } else {
                    setItem('userId', userData.username)
                    navigate('/')
                }
            }

          

        } catch (error) {
            if (typeof error === "string") {
                setToasterMessage({ ...toasterMessage, message: error, severity: 'error' });
            } else if (error instanceof Error) {
                setToasterMessage({ ...toasterMessage, message: error.message, severity: 'error' });
            } else {
                setToasterMessage({ ...toasterMessage, message: 'An error occurred.', severity: 'error' });
            }
            setShowToaster(true);
        }
    };

    const incompleteTask = () => {
        setToasterMessage({ ...toasterMessage, severity: 'info', message: `Button not implemented` })
        setShowToaster(true)
    }
    const images = [];
    for (let i = 1; i <= 10; i++) {
        images.push(`./image/random/img-${i}.jpg`);
    }

    const handleSignup = (event: any, type: string) => {
        event.preventDefault();        
        switch (type) {
          case "firstName":
     
            break;
            case "lastName":
     
            break;
            case "email":
     
            break;
            case "password":
     
            break;
            case "re-password":
     
            break;
          default:
        }
      };
    
    return {
        value,
        setValue,
        handleChange,
        tabs,
        toasterMessage,
        setToasterMessage,
        showToaster,
        setShowToaster,
        currentImageIndex,
        setCurrentImageIndex,
        theme,
        navigate,
        setItem,
        handleGuestLogin,
        handleSubmit,
        incompleteTask,
        images,
        handleSignup
    } as const
};
