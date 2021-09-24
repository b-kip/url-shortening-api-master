import logo from '../assets/images/logo.svg';
import logoWhite from '../assets/images/logo-white.svg';

export default function Logo({ type="default"}) {
  return (
    <a href="/" className="logo">
      <img 
        src={
          (type==='default' && logo) ||
          (type==='white' && logoWhite)
        } 
        alt={`shortly logo ${type==='default' ?'' : 'white'}`}/>
    </a>
  );
}