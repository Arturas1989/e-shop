import { useState } from 'react';
import { AddCount, SecondaryButton } from '../../components';

type AddContainerProps = {
  id: string;
};

export const AddContainer = ({ id }: AddContainerProps) => {
  const [count, setCount] = useState<number | string>(1);
  return (
    <div className="add-container">
      <AddCount id={id} count={count} setCount={setCount} />
      <SecondaryButton id={id} count={count}>
        <span>Add to cart</span>
        <i className="bi bi-plus"></i>
      </SecondaryButton>
    </div>
  );
};
