import { Link } from "react-router-dom";
import { LoginLink } from "./LoginLink";

type LoginMenuProps = {
  isVisible: boolean;
};

export const LoginMenu = ({ isVisible }: LoginMenuProps) => {
  
  return (
    isVisible ?
    <nav data-testid="login-menu" className="login-menu">
      <div className="container">
        <Link to='/products' className="menu-item">All products</Link>
        <LoginLink />
        <Link to='/register' className="menu-item">Register</Link>
      </div>
    </nav>
    :
    null
  )
};
