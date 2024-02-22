import { NavLink } from 'react-router-dom';
import './Menu.css';
import { MenuProps } from '../../../types';

export const Menu = ({isVisible}: MenuProps) => {
  return (
    <div className={`menu ${isVisible ? 'isVisible' : 'notVisible'}`}>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </div>
  );
};
