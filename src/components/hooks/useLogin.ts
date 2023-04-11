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
            const username = data.get("email");
            const password = data.get("password");
            if (!username || !password) {
                throw new Error("Please enter your username and password to continue.");
            } else {
                // setToasterMessage({ ...toasterMessage, message: 'Successful', severity: 'success' });
                // setShowToaster(true);
                setItem('userId', username)
                navigate('/')
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
        images
    } as const
};
