import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../components/hooks/useLocalStorage";
interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  const {getItem} = useLocalStorage()
  useEffect(() => {
    if (!getItem('userId')) {
      navigate("/login");
    } else navigate('/')
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthChecker;
