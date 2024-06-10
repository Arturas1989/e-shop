import { logout } from "../../../../services/Auth";
import type { ReactNode } from "react";

type LogoutProps = {
  children: ReactNode;
};

export const Logout = ({ children }: LogoutProps) => {
  return (
    <div className="menu-item" onClick={() => logout()}>
      {children}
    </div>
  )
};
