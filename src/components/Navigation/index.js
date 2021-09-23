import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';

export default function Navigation() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={logo} alt="shortly logo" />
            </a>
            <button className="hamburger" id="js-hamburger-button">
              <img src={hamburger} alt="harmburger icon" />
            </button>
          </div>
          <div className="navbar-bottom bg-dark-violet hidden" id="js-navbar-bottom">
            <ul className="navbar__page-links">
              <li className="navbar__page-links__item">
                <a href="/features">Features</a>
              </li>
              <li className="navbar__page-links__item"><a href="/pricing">Pricing</a></li>
              <li className="navbar__page-links__item"><a href="/resources">Resources</a></li>
            </ul>
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