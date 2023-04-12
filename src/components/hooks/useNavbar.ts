import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";
import { useAuth } from "./useAuth";
import { useState, MouseEvent } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { clearItem } = useLocalStorage();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const settings = ["Profile", "Logout","Signup"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
        setAnchorEl(null);
    };

  const handleProfileOption = async (src: any) => {
    switch (src) {
      case 'Profile':
        navigate("/profile");
        break;
      case 'Signup':
            navigate("/signup");
            clearItem("userId");
            break; 
      case 'Logout':
              setIsLoggingOut(true); 
              await logout(); 
              setIsLoggingOut(false); 
              break;
      default:
        break;
    }
  };

  return {
    handleProfileOption, settings, handleClose, handleMenu, anchorEl, setAnchorEl,
    isLoggingOut
  } as const;
};
