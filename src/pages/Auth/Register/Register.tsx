import { Link, useNavigate } from 'react-router-dom';
import { FormField, Heading, SecondaryButton } from '../../../components';
import { register } from '../../../services/Auth';

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(e, navigate);
  };

  return (
    <main className="main">
      <section className="main-section">
        <Heading>Register</Heading>
        <form className="main-form" onSubmit={(e) => handleRegister(e)}>
          <FormField
            type="text"
            htmlFor="name"
            id="name"
            placeholder="Enter your name"
          >
            Your name
          </FormField>
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
          <SecondaryButton>Register</SecondaryButton>
          <p className='have-account'>Have an account? <Link className='auth-link' to='/login'>Sign in</Link></p>
        </form>
      </section>
    </main>
  );
};
