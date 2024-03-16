import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useLogin } from '../../../../hooks/useLogin';


export const LoginLink = () => {
  const isLoggedIn = useLogin();
  
  const logout = () => {
    const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }
  
  return isLoggedIn ? (
    <div
      className="menu-item"
      onClick={() => logout()}
    >
      Logout
    </div>
  ) : (
    <Link to="/login" className="menu-item">
      Login
    </Link>
  );
};
