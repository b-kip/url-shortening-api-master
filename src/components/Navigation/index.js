import hamburger from '../../assets/images/icon-hamburger.svg';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import { navLinks } from './navigationData';

export default function Navigation() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-top">
            <Logo />
            <button className="hamburger" id="js-hamburger-button">
              <img src={hamburger} alt="harmburger icon" />
            </button>
          </div>
          <div className="navbar-bottom bg-dark-violet hidden" id="js-navbar-bottom">
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