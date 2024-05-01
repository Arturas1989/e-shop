import { useLogin } from "../hooks";
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

type ProtectedRouteProps = {
  redirect: string;
  children: ReactNode;
};

export const ProtectedRoute = ({ redirect, children }: ProtectedRouteProps) => {
  const isloggedIn = useLogin();
  return <>{isloggedIn ? children : <Navigate to='/login' state={redirect} />}</>
};
