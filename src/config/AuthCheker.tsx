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
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const navigateToLoginPage = async () => {
      if (!getItem('userId')) {
        setIsNavigating(true);
        await navigate("/login")
        setIsNavigating(false)
      }
      else if (isAuthenticated && (pathname === "/login" || pathname === "/signup")) {
        setIsNavigating(true);
        await navigate(-1);
        setIsNavigating(false);
      }
    }
    navigateToLoginPage();
  }, [isAuthenticated, pathname, navigate]);

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
