import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../db/firebase";
import { useNavigate } from "react-router-dom";
import { FormField, Heading, SecondaryButton } from '../../components';
import { toast } from "react-toastify";
import { type FormFields } from "../../types";

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as EventTarget & FormFields;
    const {name, email, password} = form;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, "users", user.uid), {
        name: name.value,
        email: email.value,
      });
      navigate('/');
    })
    .catch((error) => {
      const emailExist = error.message.indexOf('auth/email-already-in-use') !== -1;
      if(emailExist) toast.error('email already exists');
    });
  };

  return (
    <main className="register">
      <section className="register-section">
        <Heading>Register</Heading>
        <form className="register-form" onSubmit={(e) => handleRegister(e)}>
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
