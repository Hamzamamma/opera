import './OrderSampleWidget.css';

const OrderSampleWidget = () => {
  return (
    <div className="order-sample-widget">
      <div className="sample-image">
        <div className="tshirt-mockup">
          <span className="material-icons-outlined">checkroom</span>
        </div>
      </div>

      <div className="sample-content">
        <h2 className="sample-heading">
          Vuoi vedere il tuo prodotto dal vivo? Ordina un campione per toccare, sentire e vedere!
        </h2>
        <button className="sample-order-btn">
          Ordina un campione
          <span className="material-icons-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default OrderSampleWidget;
