import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";
import { useAuth } from "./useAuth";
import { useState, MouseEvent } from "react";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate();
  const settings = ["Profile", "Logout"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
        setAnchorEl(null);
    };

  const handleProfileOption = (src: any) => {
    switch (src) {
      case "Profile":
        navigate("/profile");
        break;
      case "Logout":
        logout();
        break;
    }
  };

  return {
    handleProfileOption, settings, handleClose, handleMenu, anchorEl, setAnchorEl
  } as const;
};
