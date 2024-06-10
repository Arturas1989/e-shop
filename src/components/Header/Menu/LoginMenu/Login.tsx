import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type LoginProps = {
  children: ReactNode;
};

export const Login = ({ children }: LoginProps) => {
  return (
    <Link to="/login" className="menu-item">
      {children}
    </Link>
  )
};
