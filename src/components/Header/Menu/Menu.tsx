import { NavLink } from 'react-router-dom';
import { MenuProps } from '../../../types';

export const Menu = ({isVisible, setIsSearchBarVisible}: MenuProps) => {
  return (
    <div data-testid="menu" className={`menu ${isVisible ? 'isVisible' : 'notVisible'}`}>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/products">Products</NavLink>
        <i data-testid="search-icon2" className="bi bi-search" onClick={() => setIsSearchBarVisible!(prev => !prev)}></i>
      </nav>
    </div>
  );
};
