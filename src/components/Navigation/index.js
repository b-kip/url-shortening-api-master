import { useState } from 'react';
import hamburger from '../../assets/images/icon-hamburger.svg';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import { navLinks } from './navigationData';

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function toggleMobile() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header className="header">
      <div 
        className={`mobile-overlay ${showMobileMenu ? '' : 'hidden'}`}
        onClick={toggleMobile}
      ></div>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-top">
            <Logo />
            <button className="hamburger" onClick={toggleMobile}>
              <img src={hamburger} alt="harmburger icon" />
            </button>
          </div>
          <div 
            className={`navbar-bottom bg-dark-violet ${ showMobileMenu ? '' : 'hidden'}`}
          >
            <NavLinks navLinks={navLinks} />
            <div className="navbar__buttons">
              <button className="btn btn--transparent">Login </button>
              <button className="btn btn--accent">Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}