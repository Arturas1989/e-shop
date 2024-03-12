import { useState } from "react";
import { Link } from "react-router-dom";

type LoginProps = {
  name?: string;
};

export const LoginLink = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    isLoggedIn ? <div className="menu-item" onClick={() => setIsLoggedIn(false)}>Logout</div> 
        : <Link to='/login' className="menu-item">Login</Link>
  )
};
