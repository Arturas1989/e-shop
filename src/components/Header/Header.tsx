import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/e-shop-logo.png';
import { useState } from 'react';
import { NavigationMenu, LoginMenu, Hamburger, CloseMenu } from '../../components';

export const Header = () => {
  const [menu, setMenu] = useState({loginMenuVisible: false, searchVisible: false, navigationMenuVisible: false});
  const {loginMenuVisible, searchVisible, navigationMenuVisible} = menu;

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
            <i className="bi bi-cart-fill">
              <div className="cart-items">0</div>
            </i>
            <i data-testid="account-icon" className="bi bi-person-circle" 
              onClick={() => setMenu((prev) => ({...prev, loginMenuVisible: !prev.loginMenuVisible, searchVisible: false}))}>
            </i>
          </div>
        </nav>
        <LoginMenu isVisible={loginMenuVisible}/>
      </div>
      <NavigationMenu isVisible={navigationMenuVisible} setMenu={setMenu}/>
    </header>
  )
};

