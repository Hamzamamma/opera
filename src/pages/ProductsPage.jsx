import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      name: 'Comfort Colors Garment-Dyed Heavyweight T-Shirt',
      colors: 45,
      price: '$15.40',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Cotton Heritage Unisex Premium Hoodie',
      colors: 15,
      price: '$26.95',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Yupoong Classic Dad Hat',
      colors: 10,
      price: '$15.65',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'White Glossy Mug',
      colors: null,
      price: '$5.95',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Kiss Cut Stickers',
      colors: null,
      price: '$2.29',
      image: '/api/placeholder/300/300'
    }
  ];

  const integrations = [
    {
      name: 'YouTube Product Shelf',
      description: 'Promote products from your shop on your YouTube channels.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331252530203',
      action: 'Connect'
    },
    {
      name: 'TikTok Shop',
      description: 'Sell products from your shop directly to your fans on TikTok.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/20059966612763',
      action: 'Connect'
    },
    {
      name: 'Instagram & Facebook Shop',
      description: 'Sell products directly to your fans on Instagram or Facebook.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331280410907',
      action: 'Manage'
    },
    {
      name: 'Twitch gifting',
      description: 'Allow your viewers to gift products for chat when you\'re live.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331277761563',
      action: 'Connect'
    },
    {
      name: 'StreamElements alerts',
      description: 'Show stream alerts for product purchases and gifts.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331283282331',
      action: 'Connect'
    },
    {
      name: 'Streamlabs alerts',
      description: 'Show stream alerts for product purchases and gifts.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331283282331',
      action: 'Connect'
    }
  ];

  return (
    <div className="fw-products-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="fw-products-main">
        {/* Header */}
        <div className="fw-products-header">
          <h1>Products</h1>
          <div className="fw-products-toolbar">
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
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="fw-btn fw-btn-primary">Create new product</button>
          </div>
        </div>

        {/* Empty State */}
        <div className="fw-products-empty">
          <h3>You haven't created any products yet</h3>
          <p>Here are a few recommendations to help you get started</p>
        </div>

        {/* Create First Product Section */}
        <section className="fw-products-section">
          <div className="fw-section-header">
            <div className="fw-section-title-group">
              <h3>Create your first product</h3>
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
        <section className="fw-products-section">
          <div className="fw-integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="fw-integration-card">
                <h4>{integration.name}</h4>
                <p>
                  {integration.description}
                  {integration.link && (
                    <>
                      {' '}
                      <a href={integration.link} target="_blank" rel="noreferrer">
                        Learn more
                      </a>
                    </>
                  )}
                </p>
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

export default ProductsPage;
