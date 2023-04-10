import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearItem } = useLocalStorage();
  const logout = () => {
    navigate("/login");
    clearItem("userId");
  };

  return {
    logout,
  } as const;
};
