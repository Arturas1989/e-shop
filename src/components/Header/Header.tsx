import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/e-shop-logo.png';
import { NavigationMenu, LoginMenu, Hamburger, CloseMenu, CartItemsCount } from '../../components';
import { useLogin } from '../../hooks/useLogin';
import { useHideSubMenu } from '../../hooks/useHideSubMenu';

export const Header = () => {
  const {menu, setMenu} = useHideSubMenu();
  const {loginMenuVisible, searchVisible, navigationMenuVisible} = menu;
  const [isLoggedIn] = useLogin();
  console.log('header renders')
  
  return (
    <header data-testid="header" id='header' className={`${!searchVisible ? 'search-not-visible' : ''}`}>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="left-nav">
            <div data-testid="hamburger" className="hamburger" onClick={() => setMenu((prev) => ({...prev, navigationMenuVisible: !prev.navigationMenuVisible}))}>
              <CloseMenu isVisible={navigationMenuVisible} /> 
              <Hamburger isVisible={!navigationMenuVisible} />
            </div>
            
            <Link to='/'>
              <img src={Logo} alt="e-shop-logo" />
              <p>e-shop</p>
            </Link>
          </div>
          <div className="middle-nav">
            <div>
              <NavLink to='/' end>Home</NavLink>
            </div>
            <div>
              <NavLink to='/products'>Products</NavLink>
            </div>
          </div>
          <div className="right-nav">
            <i className="bi bi-gear-wide-connected"></i>
            <i data-testid="search-icon" className="bi bi-search" 
              onClick={() => setMenu((prev) => ({...prev, loginMenuVisible: false, searchVisible: !prev.searchVisible}))}>
            </i>
            <NavLink to='/cart'>
              <CartItemsCount />
            </NavLink>
            <i data-testid="account-icon" className="bi bi-person-circle" 
              onClick={() => setMenu((prev) => ({...prev, loginMenuVisible: !prev.loginMenuVisible, searchVisible: false}))}>
            </i>
          </div>
        </nav>
        <LoginMenu isLoggedIn={isLoggedIn} isVisible={loginMenuVisible}/>
      </div>
      <NavigationMenu isVisible={navigationMenuVisible} setMenu={setMenu}/>
    </header>
  )
};

