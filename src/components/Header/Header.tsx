import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/e-shop-logo.png';
import { useState } from 'react';
import { Menu, Hamburger, CloseMenu } from '../../components';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <header data-testId="header" id='header' className={`${!isSearchBarVisible ? 'search-not-visible' : ''}`}>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="left-nav">
            <div data-testid="hamburger" className="hamburger" onClick={() => setIsMenuVisible((prev) => !prev)}>
              <CloseMenu isVisible={isMenuVisible} /> 
              <Hamburger isVisible={!isMenuVisible} />
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
            <i data-testId="search-icon" className="bi bi-search" onClick={() => setIsSearchBarVisible(prev => !prev)}></i>
            <i className="bi bi-cart-fill">
              <div className="cart-items">0</div>
            </i>
            <i className="bi bi-person-circle"></i>
          </div>
        </nav>
      </div>
      <Menu isVisible={isMenuVisible}/>
    </header>
  )
};

