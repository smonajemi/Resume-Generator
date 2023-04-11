import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";
import { useAuth } from "./useAuth";
import { useState, MouseEvent } from "react";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { isAuthenticated } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const settings = ["Profile", "Logout"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
        setAnchorEl(null);
    };

  const handleProfileOption = async (src: any) => {
    if (src === "Profile") {
      navigate("/profile");
    } else if (src === "Logout") {
      setIsLoggingOut(true); 
      await logout(); 
      setIsLoggingOut(false); 
    }
  };

  return {
    handleProfileOption, settings, handleClose, handleMenu, anchorEl, setAnchorEl,
    isLoggingOut
  } as const;
};
