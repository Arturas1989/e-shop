import { useNavigate } from 'react-router-dom';
import { FormField, Heading, SecondaryButton } from '../../../components';
import { type FormFields } from '../../../types';
import { Auth } from '../../../services/Auth';

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as EventTarget & FormFields;
    const { name, email, password } = form;

    const auth = new Auth(email.value, password.value, navigate, '/');
    auth.register(name.value);
    
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
        </form>
      </section>
    </main>
  );
};
