import { useState } from 'react';
import './StoreQuickViewWidget.css';

const StoreQuickViewWidget = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`store-quick-view-widget ${isMinimized ? 'minimized' : ''}`}>
      <div className="widget-header">
        <div className="store-info-header">
          <div className="store-icon-large">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#39B54A"/>
              <path d="M12 20L17.5 25.5L28 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="store-details">
            <h2 className="store-name-large">Il mio nuovo negozio</h2>
            <span className="store-status">Attivo</span>
          </div>
        </div>
        <button
          className="minimize-btn"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? 'Espandi' : 'Riduci'}
        >
          <span className="material-icons-outlined">
            {isMinimized ? 'expand_more' : 'expand_less'}
          </span>
        </button>
      </div>

      {!isMinimized && (
        <div className="widget-content">
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-label">Prodotti pubblicati</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ordini in sospeso</span>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Tasso di successo</span>
              <span className="stat-value">-</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreQuickViewWidget;
