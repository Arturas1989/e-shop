import { HTMLInputTypeAttribute, type ReactNode } from 'react';
import { FilterFields } from '../../../../types';

type InputGroupProps = {
  className: string;
  type: HTMLInputTypeAttribute;
  name: keyof FilterFields;
  id: string;
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fields: FilterFields;
};

export const InputGroup = ({
  handleChange,
  fields,
  className,
  type,
  name,
  id,
  children,
}: InputGroupProps) => {
  return (
    <div className={className}>
      <input
        data-testid={name}
        onChange={(e) => handleChange(e)}
        type={type}
        name={name}
        id={id}
        checked={fields[name] === id}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
