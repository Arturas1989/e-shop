import { Link, NavLink } from 'react-router-dom';
import { MenuProps } from '../../../../types';
import { LoginLink, SearchIcon } from '../../../../components';
import { useLogin } from '../../../../hooks/useLogin';

export const NavigationMenu = ({isVisible, setMenuOnLocation}: MenuProps) => {
  const isLoggedIn = useLogin();
  
  return (
    <div data-testid="menu" className={`menu ${isVisible ? 'isVisible' : 'notVisible'}`}>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/products">Products</NavLink>
        <LoginLink />
        {!isLoggedIn && <Link to='/register' >Register</Link>}
        <SearchIcon setMenuOnLocation={setMenuOnLocation!}/>
      </nav>
    </div>
  );
};
