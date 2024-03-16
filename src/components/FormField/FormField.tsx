import { type ReactNode } from "react";

type FormFieldProps = {
  placeholder?: string;
  type: 'text' | 'email' | 'password';
  id: 'name' | 'email' | 'password';
  htmlFor: 'name' | 'email' | 'password';
  children: ReactNode;
};

export const FormField = ({
  placeholder,
  type,
  id,
  htmlFor,
  children
}: FormFieldProps) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{children}</label>
      <input className="input-bar" id={id} type={type} placeholder={placeholder} autoComplete='off' required />
    </div>
  );
};
