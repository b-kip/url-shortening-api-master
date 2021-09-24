import FooterLinkItem from './FooterLinkItem';

export default function FooterLinks({ footerLinksList }) {
  return(
    <>
      {
        footerLinksList.map(( footerLinksGroup, index ) => {
          return <FooterLinkItem key={index} {...footerLinksGroup} />
        })
      }
    </>
  );
}