import { HTMLInputTypeAttribute, type ReactNode } from 'react';
import { FilterFields } from '../../../../types';
import { type SetURLSearchParams } from 'react-router-dom';

type InputGroupProps = {
  className: string;
  type: HTMLInputTypeAttribute;
  name: keyof FilterFields;
  id: string;
  children: ReactNode;
  setFilterParams: SetURLSearchParams;
  filterParams: URLSearchParams;
};

export const InputGroup = ({
  setFilterParams,
  filterParams,
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
          onChange={() => setFilterParams(prev => {
            prev.set(name, id)
            return prev
          })}
          type={type}
          name={name}
          id={id}
          checked={filterParams.get(name) === id}
        />
        <label htmlFor={id}>{children}</label>
      </div>
  );
};
