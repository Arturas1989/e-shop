import { useLogin } from "../hooks";
import { Navigate } from "react-router-dom";
import { Loading } from "../components";
import { type ReactNode } from "react";

type ProtectedRouteProps = {
  redirect: string;
  children: ReactNode;
};

export const ProtectedRoute = ({ redirect, children }: ProtectedRouteProps) => {
  const [isloggedIn, isLoading] = useLogin();

  if(isLoading) return <Loading />
  return <>{isloggedIn ? children : <Navigate to='/login' state={redirect} replace={true} />}</>
};
