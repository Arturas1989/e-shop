import { MenuProps } from '../../../../types';

export const CloseMenu = ({ isVisible }: MenuProps) => {
  return (
    <div className={isVisible ? 'visible' : 'hidden'}>
      <i className="bi bi-x-diamond-fill"></i>
      <p>close menu</p>
    </div>
  );
};
