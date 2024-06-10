import { useLogin } from '../../../../hooks/useLogin';
import { Logout } from './Logout';
import { Login } from './Login';

export const LoginLink = () => {
  const [isLoggedIn] = useLogin();
  return isLoggedIn ? <Logout>Logout</Logout> : <Login>Login</Login>;
};
