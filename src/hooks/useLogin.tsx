import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const checkAuth = (): Auth => {
  try{
    return getAuth();
  } catch {
    return {currentUser: null} as Auth;
  }
}

export const useLogin = () => {
  const auth = checkAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);
  useEffect(() => {
    try{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    } catch {
      return;
    }
  },[auth])

  return isLoggedIn;
}