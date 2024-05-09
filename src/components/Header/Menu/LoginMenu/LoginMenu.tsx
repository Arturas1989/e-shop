import { Link } from 'react-router-dom';
import { LoginLink } from './LoginLink';
import { checkAuth } from '../../../../hooks/useLogin';

type LoginMenuProps = {
  isVisible: boolean;
  isLoggedIn: boolean;
};

export const LoginMenu = ({ isVisible, isLoggedIn }: LoginMenuProps) => {
  const auth = checkAuth();
  let { currentUser } = auth;
  return isVisible ? (
    <nav data-testid="login-menu" className="login-menu">
      <div className="container">
        {currentUser && (
          <>
            <p>
              name: <span>{currentUser.displayName}</span>
            </p>
            <p>
              email: <span>{currentUser.email}</span>
            </p>
          </>
        )}
        <Link to="/products" className="menu-item">
          All products
        </Link>
        <LoginLink />
        {!isLoggedIn && (
          <Link to="/register" className="menu-item">
            Register
          </Link>
        )}
      </div>
    </nav>
  ) : null;
};
