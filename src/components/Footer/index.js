import React from 'react';

// import logoWhite from '../../assets/images/logo-white.svg';
import Logo from '../Logo';
import FooterLinks from './FooterLinks';
import FooterSocialLinks from './FooterSocialLinks';
import { footerLinksData, socialLinks } from './footerData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content-container">
          <Logo type="white" />
          <FooterLinks footerLinksList={footerLinksData} />
          <FooterSocialLinks socialLinks={socialLinks}/>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/b-kip/url-shortening/tree/reactApp" target="_blank" rel="noreferrer">b-kip</a>.
        </div>
      </div>
    </footer>
  );
}