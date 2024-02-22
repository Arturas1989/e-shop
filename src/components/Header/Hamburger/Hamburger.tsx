import { MenuProps } from '../../../types';
import './Hamburger.css';

export const Hamburger = ({ isVisible }: MenuProps) => {
  return (
    <div className={isVisible ? 'visible' : 'hidden'}>
      <i className="bi bi-list"></i>
      <p>menu</p>
    </div>
  );
};
