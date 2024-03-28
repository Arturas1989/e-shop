import { FormField, Heading, SecondaryButton } from '../../../components';

type LoginProps = {
  name?: string;
};

export const Login = ({ name }: LoginProps) => {
  return (
    <main className="main login">
      <section className="main-section">
        <Heading>Login</Heading>
        <form className="main-form">
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
