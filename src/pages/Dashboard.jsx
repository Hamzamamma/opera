import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [showMoreRecommendations, setShowMoreRecommendations] = useState(false);
  const [closedTips, setClosedTips] = useState([]);
  const [closedSuggestions, setClosedSuggestions] = useState([]);

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

  const guides = [
    { title: 'Getting Started on Fourthwall', link: '#' },
    { title: 'How to Get Your First Sales: Growing Income as a Creator', link: '#' },
    { title: '10 Tips to 10x Your Sales', link: '#' },
    { title: 'Promoting Your Brand on Social Media', link: '#' }
  ];

  const closeTip = (id) => {
    setClosedTips([...closedTips, id]);
  };

  const closeSuggestion = (id) => {
    setClosedSuggestions([...closedSuggestions, id]);
  };

  return (
    <div className="fw-dashboard">
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
          <Link to="/" className="fw-nav-link active">Home</Link>
          <Link to="/orders" className="fw-nav-link">Orders</Link>
          <Link to="/products" className="fw-nav-link">Products</Link>
          <Link to="/promotions" className="fw-nav-link">Promotions</Link>
          <Link to="#" className="fw-nav-link">Memberships</Link>
          <Link to="/site-design" className="fw-nav-link">Site design</Link>
          <Link to="/analytics" className="fw-nav-link">Analytics</Link>
          <Link to="/apps" className="fw-nav-link">Apps</Link>
          <Link to="#" className="fw-nav-link">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="fw-main">
        {/* Header */}
        <div className="fw-launch-header">
          <h1>You're just a few steps away from launch!</h1>
          <div className="fw-ready-card">
            <h4>You're ready to launch! 🎉</h4>
            <p>You can preview your progress at{' '}
              <a href="http://hamzalemzaroual7-gmail-com-shop.fourthwall.com" target="_blank" rel="noopener noreferrer">
                hamzalemzaroual7-gmail-com-shop.fourthwall.com
              </a>
            </p>
            <div className="fw-action-buttons">
              <button className="fw-btn fw-btn-primary">Go live now</button>
              <button className="fw-btn fw-btn-secondary">Schedule launch</button>
            </div>
          </div>
        </div>

        {/* Next Steps Carousel */}
        <section className="fw-section">
          <h3 className="fw-section-title">Next steps</h3>
          <div className="fw-carousel">
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
        </section>

        {/* Campaign Banner */}
        <section className="fw-campaign">
          <div className="fw-campaign-content">
            <h3>Earn sample credit in few steps</h3>
            <p>Use your credit for samples or personal orders before it expires Dec 31</p>
          </div>
          <div className="fw-campaign-actions">
            <button className="fw-btn fw-btn-primary">Enroll Now</button>
            <a href="#" className="fw-btn fw-btn-secondary">Learn More</a>
          </div>
        </section>

        {/* Products Section */}
        <section className="fw-section">
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

        {/* Order Samples Suggestion */}
        {!closedSuggestions.includes('orderSamples') && (
          <div className="fw-suggestion">
            <div className="fw-suggestion-content">
              <h3>Order products for yourself <span className="fw-credit-badge">+$5 sample credit</span></h3>
              <p>Order samples of your products for quality checks and promotion.</p>
              <button className="fw-btn fw-btn-primary">Order products for yourself</button>
            </div>
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('orderSamples')}>×</button>
          </div>
        )}

        {/* Integrations */}
        <section className="fw-section">
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

        {/* More Suggestions */}
        {!closedSuggestions.includes('referralLink') && (
          <div className="fw-suggestion">
            <div className="fw-suggestion-content">
              <h3>Add your referral link to your storefront</h3>
              <p>Make more when you refer other creators to Fourthwall. They get sample credit and their own custom Fourthwall storefront.</p>
              <button className="fw-btn fw-btn-primary">Add referrals to homepage</button>
            </div>
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('referralLink')}>×</button>
          </div>
        )}

        {!closedSuggestions.includes('freeShipping') && (
          <div className="fw-suggestion">
            <div className="fw-suggestion-content">
              <h3>Offer free shipping on large orders to increase sales</h3>
              <p>Offering free shipping on larger orders can boost sales by up to 50%.</p>
              <button className="fw-btn fw-btn-primary">Offer free shipping on large orders</button>
            </div>
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('freeShipping')}>×</button>
          </div>
        )}

        {/* Show More Button */}
        <div className="fw-show-more">
          <button onClick={() => setShowMoreRecommendations(!showMoreRecommendations)}>
            {showMoreRecommendations ? 'Show less recommendations' : 'Show more recommendations'}
          </button>
        </div>

        {/* Help & Support */}
        <section className="fw-section">
          <h3 className="fw-section-title">Help & support</h3>
          {!closedSuggestions.includes('discord') && (
            <div className="fw-suggestion fw-suggestion-discord">
              <div className="fw-suggestion-content">
                <h3>Join our Discord community <span className="fw-credit-badge">+$5 sample credit</span></h3>
                <p>Connect with fellow creators in the Fourthwall community</p>
                <button className="fw-btn fw-btn-primary fw-btn-discord">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M27.636 6.91S24.301 4.297 20.364 4l-.355.71c3.559.873 5.192 2.12 6.9 3.654C23.966 6.86 21.062 5.454 16 5.454S8.034 6.862 5.09 8.365C6.8 6.829 8.743 5.443 11.992 4.71L11.636 4c-4.13.39-7.272 2.91-7.272 2.91S.639 12.31 0 22.91c3.753 4.328 9.455 4.363 9.455 4.363l1.192-1.589c-2.024-.704-4.308-1.96-6.283-4.23 2.355 1.782 5.909 3.637 11.636 3.637s9.282-1.855 11.636-3.637c-1.974 2.27-4.258 3.526-6.283 4.23l1.192 1.589s5.702-.035 9.455-4.364c-.64-10.6-4.364-16-4.364-16ZM11.273 20c-1.407 0-2.546-1.302-2.546-2.91 0-1.606 1.14-2.908 2.546-2.908s2.545 1.302 2.545 2.909S12.679 20 11.273 20m9.454 0c-1.406 0-2.545-1.302-2.545-2.91 0-1.606 1.139-2.908 2.545-2.908 1.407 0 2.546 1.302 2.546 2.909S22.133 20 20.727 20"/>
                  </svg>
                  Verify and join Discord
                </button>
              </div>
              <button className="fw-suggestion-close" onClick={() => closeSuggestion('discord')}>×</button>
            </div>
          )}

          <div className="fw-suggestion">
            <div className="fw-suggestion-content">
              <h3>The Ultimate Launch Guide for You</h3>
              <p>From setting up your shop to driving sales, this guide covers everything you need to know about launching successfully on Fourthwall.</p>
              <button className="fw-btn fw-btn-secondary">Read the guide</button>
            </div>
            <div className="fw-suggestion-footer">
              <p><a href="https://mkbhd.com/" target="_blank" rel="noopener noreferrer">Marques Brownlee</a> powers his shop with Fourthwall</p>
            </div>
          </div>
        </section>

        {/* Guides & Tips */}
        <section className="fw-section">
          <h3 className="fw-section-title">Guides & tips</h3>
          <ul className="fw-guides-list">
            {guides.map((guide, index) => (
              <li key={index}>
                <a href={guide.link} target="_blank" rel="noopener noreferrer">
                  {guide.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M12 8.5V12.5C12 13.3284 11.3284 14 10.5 14H3.5C2.67157 14 2 13.3284 2 12.5V5.5C2 4.67157 2.67157 4 3.5 4H7.5M10 2H14M14 2V6M14 2L7 9"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
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

export default Dashboard;
