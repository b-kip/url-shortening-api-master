export default function FooterSocialLinks({ socialLinks }) {
  return (
    <ul className="footer__social-links">
      {
        socialLinks.map(( socialLink, index ) => (
          <li key={index}>
            <a href="/">{ socialLink.icon }</a>
          </li>
        ))
      }
    </ul>
  );
}