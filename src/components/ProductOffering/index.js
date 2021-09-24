import ProductOfferingList from "./ProductOfferingList";
import {productOfferingData} from "./productOfferingData";

export default function ProductOffering() {
  return (
    <section className="product-offering">
      <h2 className="product-offering__title">Advanced Statistics</h2>
      <p className="product-offering__info">
        Track how your links are performing across the web with our 
advanced statistics dashboard.
      </p>
      <ProductOfferingList productOfferingList={productOfferingData}/>
    </section>
  );
}