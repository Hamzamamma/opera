import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PromotionsPage.css';

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('promo-codes');
  const [closedTips, setClosedTips] = useState([]);

  const carouselTips = [
    { id: 'freeShipping', emoji: '🚛', text: 'Tip: Offer free shipping on orders over $75' },
    { id: 'abandonmentDiscount', emoji: '📨', text: 'Tip: Offer 5% off in checkout abandonment emails' },
    { id: 'claimFreeDomain', emoji: '💎', text: 'Claim your free Fourthwall Pro domain' }
  ];

  const closeTip = (id) => {
    setClosedTips([...closedTips, id]);
  };

  return (
    <div className="fw-promotions-page">
      {/* Sidebar */}
      <aside className="fw-sidebar">
        <div className="fw-sidebar__header">
          <div className="fw-sidebar__logo">fw</div>
          <div className="fw-sidebar__email">hamzalemzaroual7@gmail.com</div>
          <button className="fw-sidebar__badge">
            Coming soon
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <nav className="fw-sidebar__nav">
          <Link to="/" className="fw-nav-link">Home</Link>
          <Link to="/orders" className="fw-nav-link">Orders</Link>
          <Link to="/products" className="fw-nav-link">Products</Link>
          <Link to="/promotions" className="fw-nav-link active">Promotions</Link>
          <Link to="#" className="fw-nav-link">Memberships</Link>
          <Link to="/site-design" className="fw-nav-link">Site design</Link>
          <Link to="/analytics" className="fw-nav-link">Analytics</Link>
          <Link to="/apps" className="fw-nav-link">Apps</Link>
          <Link to="#" className="fw-nav-link">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="fw-promotions-main">
        {/* Header */}
        <div className="fw-promotions-header">
          <h1>Promotions</h1>
          <div className="fw-promotions-toolbar">
            <button className="fw-toolbar-btn" title="Filter">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeWidth="1.5" d="M19.892 23.196v-7.66L30 3H2l10.108 12.536V29z" />
              </svg>
            </button>
            <button className="fw-btn fw-btn-primary">Create promotion</button>
          </div>
        </div>

        {/* Carousel Tips */}
        <div className="fw-promotions-carousel">
          {carouselTips.filter(tip => !closedTips.includes(tip.id)).map(tip => (
            <div key={tip.id} className="fw-carousel-card">
              <div className="fw-carousel-content">
                <span className="fw-carousel-emoji">{tip.emoji}</span>
                <p>{tip.text}</p>
              </div>
              {tip.id !== 'claimFreeDomain' && (
                <button className="fw-close-btn" onClick={() => closeTip(tip.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="12" fill="none" viewBox="0 0 32 32">
                    <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1.5" d="M2 30 30 2m0 28L2 2" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="fw-promotions-tabs">
          <Link
            to="/promotions/promo-codes"
            className={`fw-tab ${activeTab === 'promo-codes' ? 'active' : ''}`}
            onClick={() => setActiveTab('promo-codes')}
          >
            Promo codes
          </Link>
          <Link
            to="/promotions/giveaway-links"
            className={`fw-tab ${activeTab === 'giveaway-links' ? 'active' : ''}`}
            onClick={() => setActiveTab('giveaway-links')}
          >
            Giveaway links
          </Link>
        </div>

        {/* Empty State */}
        {activeTab === 'promo-codes' && (
          <div className="fw-promotions-empty">
            <h2>You haven't created any promo codes yet.</h2>
            <button className="fw-btn fw-btn-primary">Create promo code</button>
          </div>
        )}

        {activeTab === 'giveaway-links' && (
          <div className="fw-promotions-empty">
            <h2>You haven't created any giveaway links yet.</h2>
            <button className="fw-btn fw-btn-primary">Create giveaway link</button>
          </div>
        )}
      </main>

      {/* Progress Bar */}
      <div className="fw-progress-bar">
        <div className="fw-progress-track">
          <div className="fw-progress-fill" style={{ width: '14.2857%' }}></div>
        </div>
        <div className="fw-progress-content">
          <div>
            <div className="fw-progress-label">Continue your launch guide:</div>
            <div className="fw-progress-title">Getting started</div>
          </div>
          <button className="fw-progress-close">
            <svg xmlns="http://www.w3.org/2000/svg" height="10" fill="none" viewBox="0 0 32 32">
              <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1.5" d="M2 30 30 2m0 28L2 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
