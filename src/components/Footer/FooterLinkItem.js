export default function FooterLinkItem({ heading, subLinks}) {
  return (
    <div className="footer__links">
      <h3 className="footer__links__title">{heading}</h3>
      <ul className="footer__links__container flow-content">
        {
          subLinks.map(function(linkTitle, index) {
            return(
              <li key={index}>
                <a href="/">{linkTitle}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}