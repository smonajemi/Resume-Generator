import { useLocalStorage } from "../components/hooks/useLocalStorage";
import React, { useEffect, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";
import { CircularProgress, Backdrop } from "@mui/material";
import DefaultToaster from "../components/DefaultToaster";

interface Props {
  children: ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const { getItem } = useLocalStorage()
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [isNavigating, setIsNavigating] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [toasterMessage, setToasterMessage] = useState({ severity: 'error', message: '' });

  useEffect(() => {
    const navigateToLoginPage = async () => {
      try {
        const userId = getItem('userId');
        if (!userId) {
          setIsNavigating(true);
          await navigate("/login");
        } else if (pathname === "/profile" && userId?.includes('guest')) {
          await navigate('/');
          setToasterMessage({ ...toasterMessage, message: "You're almost toast-worthy! But first, please sign up to access this page", severity: 'warning' });
          setOpen(true);
          setIsNavigating(false);
        } else if (pathname === "/login" || pathname === "/signup") {
          setIsNavigating(true);
          await navigate(-1);
          setIsNavigating(false);
        }
      } catch (error) {
        if (typeof error === "string") {
          setToasterMessage({ ...toasterMessage, message: error, severity: 'error' });
        } else if (error instanceof Error) {
          setToasterMessage({ ...toasterMessage, message: error.message, severity: 'error' });
        } else {
          setToasterMessage({ ...toasterMessage, message: 'An error occurred.', severity: 'error' });
        }
        setOpen(true);
      }
    }

    navigateToLoginPage();
  }, [isAuthenticated, pathname, navigate]);

  useEffect(() => {
    setIsNavigating(false); // Set to false after navigation is complete
  }, [pathname]);


  return (
    <>
      <Backdrop open={isNavigating} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress />
      </Backdrop>
      <DefaultToaster setOpen={setOpen} isOpen={isOpen} severity={toasterMessage?.severity as any} message={toasterMessage?.message} />
      {children}
    </>
  );
};

export default AuthChecker;
