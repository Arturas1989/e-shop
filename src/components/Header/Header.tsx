import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/e-shop-logo.png';
import { useEffect, useState } from 'react';
import { NavigationMenu, LoginMenu, Hamburger, CloseMenu, CartItemsCount } from '../../components';
import { useLogin } from '../../hooks/useLogin';

export const Header = () => {
  const [menu, setMenu] = useState({loginMenuVisible: false, searchVisible: false, navigationMenuVisible: false});
  const {loginMenuVisible, searchVisible, navigationMenuVisible} = menu;
  const [isLoggedIn] = useLogin();
  console.log('header renders')
  useEffect(() => {
    const hideSubMenu = (e: MouseEvent) => {
      const {target} = e;
      if(target instanceof HTMLElement){
        const notAccountIcon = target.classList.value !== 'bi bi-person-circle';
        if(notAccountIcon && loginMenuVisible) setMenu((prev) => ({...prev, loginMenuVisible: false}));
      }
      
    }
    document.body.addEventListener('click', hideSubMenu);
    return () => document.body.removeEventListener('click', hideSubMenu);
  }, [loginMenuVisible])

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

