import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
  const navigate = useNavigate();
  const settings = ['Profile', 'Logout'];
  const [isAnchor, setAnchor] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: any) => {
    setAnchor(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchor(null);
  }
  const handleProfileOption = (src: any) => {
    switch (src) {
      case "Profile":
        navigate("/profile");
        break;
      default:
        navigate('/select');
        break;
    }
  };
  return {
    settings,
    isAnchor,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleProfileOption,
    navigate
  } as const;
};
