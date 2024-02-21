import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/e-shop-logo.png';
import './Header.css';
import { useState } from 'react';
import { Menu } from './Menu/Menu';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="left-nav">
            <i className="bi bi-list" onClick={() => setIsMenuVisible((prev) => !prev)}></i>
            {isMenuVisible && <Menu />}
            <Link to='/'>
              <img src={Logo} alt="e-shop-logo" />
              <p>shopify</p>
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
            <i className="bi bi-search"></i>
            <i className="bi bi-cart-fill"></i>
          </div>
        </nav>
      </div>
    </header>
  )
};

