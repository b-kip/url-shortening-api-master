export default function ProductOfferingList({ productOfferingList }) {
  return (
    <div className="product-offering__list">
      {
        productOfferingList.map((offeringItem, index) => (
          <article key={index} className="product-offering__list__item flow-content">
            <div className="icon-container">
              <img 
                src={offeringItem.icon} 
                alt={`${offeringItem.title.toLowerCase()} icon`} 
              />
            </div>
            <h3 className="product-offering__list__item__title">
              {offeringItem.title}
            </h3>
            <p className="product-offering__list__item__info">
              {offeringItem.description}
            </p>
          </article>
        ))
      }
    </div>
  );
}