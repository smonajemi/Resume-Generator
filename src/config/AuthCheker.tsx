import { useLocalStorage } from "../components/hooks/useLocalStorage";
import React, { useEffect, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";
import { CircularProgress, Backdrop } from "@mui/material";

interface Props {
  children: ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const { getItem } = useLocalStorage()
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [isNavigating, setIsNavigating] = useState(true);

  useEffect(() => {
    const navigateToLoginPage = async () => {
      const userId = getItem('userId');
      if (!userId) {
        setIsNavigating(true);
        await navigate("/login");
      } else if (pathname === "/profile" && userId?.includes('guest')) {
        setIsNavigating(true);
        await navigate('/');
      } else if (pathname === "/login" || pathname === "/signup") {
        setIsNavigating(true);
        await navigate(-1);
      }
      setIsNavigating(false);
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
      {children}
    </>
  );
};

export default AuthChecker;
