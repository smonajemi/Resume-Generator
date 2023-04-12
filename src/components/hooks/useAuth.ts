import { useLayoutEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { getItem } = useLocalStorage();
  const userId = getItem("userId");
  const isAuthenticated = Boolean(userId);
  const isGuestAuth = Boolean(userId?.includes('guest'))
  const isNotProfile = window.location.pathname.includes('signup') || window.location.pathname.includes('login');
  const isMemberProfile = window.location.pathname.includes('profile')
  useLayoutEffect(() => {
    if (!userId) return;
    const fetchLoggedUser = async () => {
    //   const { data } = await fetchUserById(userId);
    //   setBackendUser(data);
    };

    // fetchLoggedUser();
  }, [userId]);

  return { isAuthenticated, isGuestAuth, isNotProfile, isMemberProfile } as const;
};
