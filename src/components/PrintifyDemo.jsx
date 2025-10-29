import StoreQuickViewWidget from './StoreQuickViewWidget';
import SetupChecklistWidget from './SetupChecklistWidget';
import ProductCollectionWidget from './ProductCollectionWidget';
import NewsWidget from './NewsWidget';
import OrderSampleWidget from './OrderSampleWidget';
import OurBestsellersWidget from './OurBestsellersWidget';
import StartSomethingGreatWidget from './StartSomethingGreatWidget';
import './PrintifyDemo.css';

const PrintifyDemo = () => {
  return (
    <main className="printify-main-content">
      <div className="demo-container">
        <StoreQuickViewWidget />
        <SetupChecklistWidget />
        <ProductCollectionWidget />
        <NewsWidget />
        <OrderSampleWidget />
        <OurBestsellersWidget />
        <StartSomethingGreatWidget />
      </div>
    </main>
  );
};

export default PrintifyDemo;
