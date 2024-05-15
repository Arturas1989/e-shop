import { useLogin } from "../hooks";
import { Navigate } from "react-router-dom";
import { Loading } from "../components";
import { type ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isloggedIn, isLoading] = useLogin();

  const continueTo = window.location.pathname + window.location.search;
  if(isLoading) return <Loading />
  return <>{isloggedIn ? children : <Navigate to='/login' state={continueTo} replace={true} />}</>
};
