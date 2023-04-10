import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";
import { useAuth } from "./useAuth";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate();
  const settings = ["Profile", "Logout"];

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
    handleProfileOption,
    navigate,
    settings,
    isAuthenticated
  } as const;
};
