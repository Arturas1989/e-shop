import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  },[auth])

  return isLoggedIn;
}