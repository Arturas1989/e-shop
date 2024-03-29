import { useNavigate } from 'react-router-dom';
import { FormField, Heading, SecondaryButton } from '../../../components';
import { Auth } from '../../../services/Auth';
import { type FormFields } from '../../../types';

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as EventTarget & Omit<FormFields, 'name'>;
    const { email, password } = form;
    const auth = new Auth(email.value, password.value, navigate);
    auth.login();
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
          <SecondaryButton>Login</SecondaryButton>
        </form>
      </section>
    </main>
  );
};
