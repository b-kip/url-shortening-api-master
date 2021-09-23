import detailedRecord from '../../assets/images/icon-detailed-records.svg';
import brandRecognition from '../../assets/images/icon-brand-recognition.svg';
import fullCustomization from '../../assets/images/icon-fully-customizable.svg';

export default function ProductOffering() {
  return (
    <section className="product-offering">
          <h2 className="product-offering__title">Advanced Statistics</h2>
          <p className="product-offering__info">
            Track how your links are performing across the web with our 
    advanced statistics dashboard.
          </p>
          <div className="product-offering__list">
            <article className="product-offering__list__item flow-content">
              <div className="icon-container">
                <img src={brandRecognition} alt="brand recognition icon" />
              </div>
              <h3 className="product-offering__list__item__title">Brand Recognition</h3>
              <p className="product-offering__list__item__info">Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.</p>
            </article>
            <article className="product-offering__list__item flow-content">
              <div className="icon-container">
                <img src={detailedRecord} alt="detailed record icon" />
              </div>
              <h3 className="product-offering__list__item__title">Detailed Records</h3>
              <p className="product-offering__list__item__info">Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.</p>
            </article>
            <article className="product-offering__list__item flow-content">
              <div className="icon-container">
                <img src={fullCustomization} alt="fully customizable icon"/>
              </div>
              <h3 className="product-offering__list__item__title">Fully Customizable</h3>
              <p className="product-offering__list__item__info">Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.</p>
            </article>
          </div>
        </section>
  );
}