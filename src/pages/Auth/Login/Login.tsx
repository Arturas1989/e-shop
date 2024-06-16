import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormField, Heading, SecondaryButton } from '../../../components';
import { login, loginAsGuest } from '../../../services/Auth';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(e, navigate, location);
  }
  
  return (
    <main className="main login">
      <section className="main-section">
        <Heading>Login</Heading>
        <form className="main-form" onSubmit={(e) => handleLogin(e)}>
          <FormField
            type="email"
            htmlFor="email"
            id="email"
            placeholder="Enter your email"
          >
            Your email
          </FormField>
          <FormField
            type="password"
            htmlFor="password"
            id="password"
            placeholder="Enter your password"
          >
            Your password
          </FormField>
          <div className="login-buttons">
            <SecondaryButton>Login</SecondaryButton>
            <p>Or</p>
            <p onClick={() => loginAsGuest(navigate, location)} className='secondary-button'>Login as guest</p>
          </div>
          
          <p className='have-account'>Don't have an account? <Link className='auth-link' to='/register'>Sign up</Link></p>
        </form>
        
      </section>
    </main>
  );
};
