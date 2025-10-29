import { useState } from 'react';
import './PrintifyTopBanner.css';

const PrintifyTopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="printify-top-banner">
      <div className="banner-content">
        <span className="banner-text">
          Ottieni fino al 20% di sconto su tutti i prodotti con Printify Premium.
        </span>
        <a href="#" className="banner-link">
          Ottienilo ora
        </a>
      </div>
      <button
        className="banner-close"
        onClick={() => setIsVisible(false)}
        aria-label="Chiudi banner"
      >
        <span className="material-icons-outlined">close</span>
      </button>
    </div>
  );
};

export default PrintifyTopBanner;
