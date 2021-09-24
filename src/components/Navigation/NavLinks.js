export default function NavLinks({ navLinks }) {
  return (
    <ul className="navbar__page-links">
      {
        navLinks.map((link, index) => {
          return (
            <li key={index} className="navbar__page-links__item">
              <a href={`/${link.toLowerCase()}`}>{link}</a>
            </li>
          );
        })
      }
    </ul>
  );
}