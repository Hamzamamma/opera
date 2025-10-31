import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './OrdersPage.css';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [closedTips, setClosedTips] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const carouselTips = [
    { id: 'freeShipping', emoji: '🚛', text: 'Tip: Offer free shipping on orders over $75' },
    { id: 'abandonmentDiscount', emoji: '📨', text: 'Tip: Offer 5% off in checkout abandonment emails' },
    { id: 'claimFreeDomain', emoji: '💎', text: 'Claim your free Fourthwall Pro domain' }
  ];

  const products = [
    { name: 'Comfort Colors Garment-Dyed Heavyweight T-Shirt', colors: 45, price: '$15.40', image: '/api/placeholder/200/200' },
    { name: 'Cotton Heritage Unisex Premium Hoodie', colors: 15, price: '$26.95', image: '/api/placeholder/200/200' },
    { name: 'Yupoong Classic Dad Hat', colors: 10, price: '$15.65', image: '/api/placeholder/200/200' },
    { name: 'White Glossy Mug', colors: null, price: '$5.95', image: '/api/placeholder/200/200' },
    { name: 'Kiss Cut Stickers', colors: null, price: '$2.29', image: '/api/placeholder/200/200' }
  ];

  const integrations = [
    { name: 'YouTube Product Shelf', description: 'Promote products from your shop on your YouTube channels.', action: 'Connect' },
    { name: 'TikTok Shop', description: 'Sell products from your shop directly to your fans on TikTok.', action: 'Connect' },
    { name: 'Instagram & Facebook Shop', description: 'Sell products directly to your fans on Instagram or Facebook.', action: 'Manage' },
    { name: 'Twitch gifting', description: 'Allow your viewers to gift products for chat when you\'re live.', action: 'Connect' },
    { name: 'StreamElements alerts', description: 'Show stream alerts for product purchases and gifts.', action: 'Connect' },
    { name: 'Streamlabs alerts', description: 'Show stream alerts for product purchases and gifts.', action: 'Connect' }
  ];

  const closeTip = (id) => {
    setClosedTips([...closedTips, id]);
  };

  return (
    <div className="fw-orders-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="fw-orders-main">
        {/* Header */}
        <div className="fw-orders-header">
          <h1>Orders</h1>
          <div className="fw-orders-toolbar">
            <button className="fw-toolbar-btn" title="Export">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeWidth="1.5" d="M31 22.407V31H1v-8.593m3.8-11.44L16 22.355l11.2-11.39M16 21.881V1" />
              </svg>
            </button>
            <button className="fw-toolbar-btn" title="Filter">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeWidth="1.5" d="M19.892 23.196v-7.66L30 3H2l10.108 12.536V29z" />
              </svg>
            </button>
            <div className="fw-search-box">
              <svg className="fw-search-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M19.64 19.63 31 31m-19.09-8.17a10.91 10.91 0 1 0 0-21.83 10.91 10.91 0 0 0 0 21.83Z" />
              </svg>
              <input
                type="text"
                placeholder="Search orders"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Carousel Tips */}
        <div className="fw-orders-carousel">
          {carouselTips.filter(tip => !closedTips.includes(tip.id)).map(tip => (
            <div key={tip.id} className="fw-carousel-card">
              <div className="fw-carousel-content">
                <span className="fw-carousel-emoji">{tip.emoji}</span>
                <p>{tip.text}</p>
              </div>
              <button className="fw-close-btn" onClick={() => closeTip(tip.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" fill="none" viewBox="0 0 32 32">
                  <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1.5" d="M2 30 30 2m0 28L2 2" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="fw-orders-tabs">
          <button
            className={`fw-tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={`fw-tab ${activeTab === 'donations' ? 'active' : ''}`}
            onClick={() => setActiveTab('donations')}
          >
            Donations
          </button>
        </div>

        {/* Empty State */}
        <div className="fw-orders-empty">
          <h3>You haven't received any orders yet</h3>
          <p>Here are a few recommendations to help you get your first sales</p>
        </div>

        {/* Products Section */}
        <section className="fw-orders-section">
          <div className="fw-section-header">
            <div>
              <h3>Create another product</h3>
              <span className="fw-credit-badge">+$5 sample credit</span>
            </div>
            <div className="fw-section-actions">
              <button className="fw-btn fw-btn-secondary">Browse all products</button>
              <button className="fw-btn fw-btn-primary">Create product</button>
            </div>
          </div>
          <div className="fw-products-grid">
            {products.map((product, index) => (
              <div key={index} className="fw-product-card">
                <div className="fw-product-image" style={{ background: '#f5f5f5' }}>
                  {product.colors && (
                    <span className="fw-product-colors">{product.colors} colors</span>
                  )}
                </div>
                <div className="fw-product-info">
                  <h4>{product.name}</h4>
                  <p>From {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="fw-orders-section">
          <div className="fw-integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="fw-integration-card">
                <h4>{integration.name}</h4>
                <p>{integration.description}</p>
                <button className="fw-btn fw-btn-secondary">{integration.action}</button>
              </div>
            ))}
          </div>
        </section>
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

export default OrdersPage;
