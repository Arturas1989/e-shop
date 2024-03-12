import { Link, NavLink } from 'react-router-dom';
import { MenuProps } from '../../../../types';
import { LoginLink } from '../LoginMenu/LoginLink';

export const NavigationMenu = ({isVisible, setMenu}: MenuProps) => {
  return (
    <div data-testid="menu" className={`menu ${isVisible ? 'isVisible' : 'notVisible'}`}>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/products">Products</NavLink>
        <LoginLink />
        <Link to='/register' >Register</Link>
        <i data-testid="search-icon2" className="bi bi-search" onClick={() => setMenu!((prev) => ({...prev, searchVisible: true}))}></i>
      </nav>
    </div>
  );
};