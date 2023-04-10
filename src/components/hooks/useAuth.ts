import { useLayoutEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { getItem } = useLocalStorage();
  const userId = getItem("userId");
  const isAuthenticated = Boolean(userId);

  useLayoutEffect(() => {
    if (!userId) return;
    const fetchLoggedUser = async () => {
    //   const { data } = await fetchUserById(userId);
    //   setBackendUser(data);
    };

    // fetchLoggedUser();
  }, [userId]);

  return { isAuthenticated } as const;
};
