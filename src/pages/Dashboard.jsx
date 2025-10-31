import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [closedBanners, setClosedBanners] = useState([]);
  const [closedSuggestions, setClosedSuggestions] = useState([]);

  // Top banner tips
  const bannerTips = [
    {
      id: 'tryInteracting',
      text: 'Try Interacting to collaborate on products easily',
      bgColor: '#d1f4e0',
      link: 'See how'
    },
    {
      id: 'getBlackFriday',
      text: 'Get Black Friday or producer abandonment emails ready',
      bgColor: '#dbeafe',
      link: 'Learn More'
    }
  ];

  // Product mockup data
  const products = [
    {
      name: 'Comfort Colors Garment-Dyed Heavyweight T-Shirt',
      colors: 45,
      price: '$15.40',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      name: 'Cotton Heritage Unisex Premium Hoodie',
      colors: 15,
      price: '$26.95',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop'
    },
    {
      name: 'Yupoong Classic Dad Hat',
      colors: 10,
      price: '$15.65',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop'
    },
    {
      name: 'White Glossy Mug',
      price: '$5.95',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop'
    },
    {
      name: 'Kiss Cut Stickers',
      price: '$2.29',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop'
    }
  ];

  // Apps/Integrations
  const apps = [
    {
      id: 'youtube',
      icon: '🎥',
      name: 'YouTube Shop',
      description: 'Sell & promote products on your YouTube channel',
      action: 'Connect',
      bgColor: '#fee2e2'
    },
    {
      id: 'tiktok',
      icon: '🎵',
      name: 'TikTok Shop',
      description: 'Sell your products on TikTok Shop',
      action: 'Connect',
      bgColor: '#dbeafe'
    },
    {
      id: 'instagram',
      icon: '📱',
      name: 'Instagram & Facebook Shop',
      description: 'Tag products in your Instagram & Facebook posts',
      action: 'Manage',
      bgColor: '#fce7f3'
    }
  ];

  // Blog articles
  const articles = [
    {
      id: 'independence',
      title: 'Keeping Your Brand Independence',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop',
      date: 'Oct 15, 2024'
    },
    {
      id: 'yearInReview',
      title: 'More Ways Than Ever Before',
      subtitle: 'Fourthwall Year in Review',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
      featured: true,
      bgColor: '#ef4444'
    },
    {
      id: 'pricingGuide',
      title: '10 Ways to Price Your Merch',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop',
      date: 'Oct 8, 2024'
    },
    {
      id: 'broadcast',
      title: 'In Loving Your Broadcast: Sound Advice',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop',
      date: 'Oct 1, 2024'
    }
  ];

  const closeBanner = (id) => {
    setClosedBanners([...closedBanners, id]);
  };

  const closeSuggestion = (id) => {
    setClosedSuggestions([...closedSuggestions, id]);
  };

  const copyReferralLink = () => {
    const link = 'https://link.fourthwall.com/join/hamzalemzaroual7-gmail-com';
    navigator.clipboard.writeText(link).then(() => {
      alert('Referral link copied to clipboard!');
    });
  };

  return (
    <div className="fw-dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Top Header Bar */}
      <header className="fw-top-header">
        <div className="fw-top-header-content">
          <button className="fw-btn fw-btn-create">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Create
          </button>
          <div className="fw-top-header-actions">
            <button className="fw-icon-btn" aria-label="Messages">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </button>
            <div className="fw-user-avatar">H</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="fw-main">
        {/* Stats Cards */}
        <div className="fw-stats-grid">
          <div className="fw-stat-card">
            <div className="fw-stat-value">$0</div>
            <div className="fw-stat-label">
              Estimated profit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
          <div className="fw-stat-card">
            <div className="fw-stat-value">0</div>
            <div className="fw-stat-label">
              Orders
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
          <div className="fw-stat-card">
            <div className="fw-stat-value">0</div>
            <div className="fw-stat-label">
              Average order value
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Top Banner Tips */}
        {bannerTips.filter(tip => !closedBanners.includes(tip.id)).map(tip => (
          <div key={tip.id} className="fw-top-banner" style={{ backgroundColor: tip.bgColor }}>
            <p>{tip.text}</p>
            <div className="fw-top-banner-actions">
              <button className="fw-link-btn">{tip.link}</button>
              <button className="fw-close-btn" onClick={() => closeBanner(tip.id)} aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                  <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Sample Credit Banner */}
        <div className="fw-sample-credit-banner">
          <div className="fw-sample-content">
            <div className="fw-sample-title">Earn sample credit in few steps</div>
            <div className="fw-sample-text">Use your credit for samples or personal orders before it expires Dec 31</div>
          </div>
          <div className="fw-sample-actions">
            <button className="fw-btn fw-btn-primary">Enroll Now</button>
            <button className="fw-btn fw-btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Create Product Section */}
        <section className="fw-create-product-section">
          <div className="fw-create-header">
            <div>
              <h2 className="fw-create-title">
                Create your first product
                <span className="fw-credit-badge">+$5 sample credit</span>
              </h2>
            </div>
            <div className="fw-create-actions">
              <button className="fw-btn fw-btn-secondary">Browse all products</button>
              <button className="fw-btn fw-btn-primary">Create product</button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="fw-section fw-products-section">
          <div className="fw-products-grid">
            {products.map((product, index) => (
              <div key={index} className="fw-product-card">
                <div className="fw-product-image">
                  <img src={product.image} alt={product.name} />
                  {product.colors && (
                    <span className="fw-product-badge">{product.colors} colors</span>
                  )}
                </div>
                <div className="fw-product-info">
                  <h4>{product.name}</h4>
                  <p className="fw-product-price">From {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apps Section */}
        <section className="fw-section">
          <h3 className="fw-section-title">Apps to help your growth</h3>
          <div className="fw-apps-grid">
            {apps.map((app) => (
              <div key={app.id} className="fw-app-card" style={{ backgroundColor: app.bgColor }}>
                <div className="fw-app-icon">{app.icon}</div>
                <div className="fw-app-info">
                  <h4>{app.name}</h4>
                  <p>{app.description}</p>
                </div>
                <button className="fw-btn fw-btn-secondary fw-btn-sm">{app.action}</button>
              </div>
            ))}
          </div>
          <div className="fw-apps-footer">
            <button className="fw-link-btn">See all apps</button>
          </div>
        </section>

        {/* Add Referral Link Suggestion */}
        {!closedSuggestions.includes('addReferral') && (
          <div className="fw-suggestion-card">
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('addReferral')} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
              </svg>
            </button>
            <h3>Add your referral link to your storefront</h3>
            <p>Make more when you refer other creators to Fourthwall. They get sample credit and you get sample credit once they sell product.</p>
            <button className="fw-btn fw-btn-primary">Add referrals to homepage</button>
          </div>
        )}

        {/* Free Shipping Offer */}
        {!closedSuggestions.includes('freeShipping') && (
          <div className="fw-offer-card">
            <div className="fw-offer-content">
              <h3>Offer free shipping on large orders to increase sales</h3>
              <p>When customers need to spend more to reach you will, on average, they spend 25% more per order. Make your customer look forward to getting that freebie (starting at 50 carts).</p>
              <button className="fw-btn fw-btn-primary">Offer free shipping on large orders</button>
            </div>
            <div className="fw-offer-image">
              <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=400&fit=crop" alt="Shipping boxes" />
            </div>
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('freeShipping')} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
              </svg>
            </button>
          </div>
        )}

        {/* Abandoned Checkout Suggestion */}
        {!closedSuggestions.includes('abandonedCheckout') && (
          <div className="fw-suggestion-card">
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('abandonedCheckout')} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
              </svg>
            </button>
            <h3>Boost sales with a discount to abandoned checkout emails</h3>
            <p>Automatically email a discount code to customers who abandoned their carts to help recover lost orders.</p>
            <button className="fw-btn fw-btn-primary">Add discount to abandoned checkout emails</button>
          </div>
        )}

        {/* Referral Link Card */}
        {!closedSuggestions.includes('referFriends') && (
          <div className="fw-referral-card">
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('referFriends')} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
              </svg>
            </button>
            <h3>Refer up to 3 of your friends</h3>
            <p>You each get $10 in sample credit once they make 3 or more sales.</p>
            <div className="fw-referral-input-group">
              <input
                type="text"
                value="https://link.fourthwall.com/join/hamzalemzaroual7-gmail-com"
                readOnly
                className="fw-referral-input"
              />
              <button className="fw-btn fw-btn-primary" onClick={copyReferralLink}>Copy link</button>
            </div>
          </div>
        )}

        {/* Discord Community */}
        {!closedSuggestions.includes('discord') && (
          <div className="fw-discord-card">
            <div className="fw-discord-content">
              <h3>Join our Discord community</h3>
              <p>Verify your email to join our community on Discord</p>
              <button className="fw-btn fw-btn-discord">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M27.636 6.91S24.301 4.297 20.364 4l-.355.71c3.559.873 5.192 2.12 6.9 3.654C23.966 6.86 21.062 5.454 16 5.454S8.034 6.862 5.09 8.365C6.8 6.829 8.743 5.443 11.992 4.71L11.636 4c-4.13.39-7.272 2.91-7.272 2.91S.639 12.31 0 22.91c3.753 4.328 9.455 4.363 9.455 4.363l1.192-1.589c-2.024-.704-4.308-1.96-6.283-4.23 2.355 1.782 5.909 3.637 11.636 3.637s9.282-1.855 11.636-3.637c-1.974 2.27-4.258 3.526-6.283 4.23l1.192 1.589s5.702-.035 9.455-4.364c-.64-10.6-4.364-16-4.364-16ZM11.273 20c-1.407 0-2.546-1.302-2.546-2.91 0-1.606 1.14-2.908 2.546-2.908s2.545 1.302 2.545 2.909S12.679 20 11.273 20m9.454 0c-1.406 0-2.545-1.302-2.545-2.91 0-1.606 1.139-2.908 2.545-2.908 1.407 0 2.546 1.302 2.546 2.909S22.133 20 20.727 20"/>
                </svg>
                Verify and join Discord
              </button>
            </div>
            <div className="fw-discord-preview">
              <div className="fw-discord-window">
                <div className="fw-discord-header">
                  <div className="fw-discord-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="#5865f2">
                      <path d="M27.636 6.91S24.301 4.297 20.364 4l-.355.71c3.559.873 5.192 2.12 6.9 3.654C23.966 6.86 21.062 5.454 16 5.454S8.034 6.862 5.09 8.365C6.8 6.829 8.743 5.443 11.992 4.71L11.636 4c-4.13.39-7.272 2.91-7.272 2.91S.639 12.31 0 22.91c3.753 4.328 9.455 4.363 9.455 4.363l1.192-1.589c-2.024-.704-4.308-1.96-6.283-4.23 2.355 1.782 5.909 3.637 11.636 3.637s9.282-1.855 11.636-3.637c-1.974 2.27-4.258 3.526-6.283 4.23l1.192 1.589s5.702-.035 9.455-4.364c-.64-10.6-4.364-16-4.364-16ZM11.273 20c-1.407 0-2.546-1.302-2.546-2.91 0-1.606 1.14-2.908 2.546-2.908s2.545 1.302 2.545 2.909S12.679 20 11.273 20m9.454 0c-1.406 0-2.545-1.302-2.545-2.91 0-1.606 1.139-2.908 2.545-2.908 1.407 0 2.546 1.302 2.546 2.909S22.133 20 20.727 20"/>
                    </svg>
                  </div>
                </div>
                <div className="fw-discord-body">
                  <div className="fw-discord-sidebar"></div>
                  <div className="fw-discord-main"></div>
                </div>
              </div>
            </div>
            <button className="fw-suggestion-close" onClick={() => closeSuggestion('discord')} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="none" viewBox="0 0 32 32">
                <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
              </svg>
            </button>
          </div>
        )}

        {/* Work in Progress Section */}
        <section className="fw-section">
          <div className="fw-wip-banner">
            <div className="fw-wip-icon">🚧</div>
            <div className="fw-wip-content">
              <h4>Work in progress</h4>
              <p>Please come back again soon!</p>
            </div>
          </div>
        </section>

        {/* Getting Started Video Section */}
        <section className="fw-section">
          <h3 className="fw-section-title">Getting Started with Fourthwall</h3>
          <div className="fw-video-card">
            <div className="fw-video-thumbnail">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop" alt="Getting started video" />
              <button className="fw-play-btn" aria-label="Play video">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.95"/>
                  <path d="M18 14L34 24L18 34V14Z" fill="#000"/>
                </svg>
              </button>
            </div>
            <div className="fw-video-info">
              <h4>The Ultimate Launch Guide for You</h4>
              <p>From setting up your shop to driving sales, this guide covers everything you need to know about launching successfully on Fourthwall.</p>
              <button className="fw-btn fw-btn-secondary">Read the guide</button>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="fw-section">
          <h3 className="fw-section-title">Guides & tips</h3>
          <div className="fw-blog-grid">
            {articles.map((article) => (
              <article key={article.id} className={`fw-blog-card ${article.featured ? 'fw-blog-featured' : ''}`}>
                <div className="fw-blog-image" style={article.featured ? { backgroundColor: article.bgColor } : {}}>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="fw-blog-content">
                  {article.subtitle && <span className="fw-blog-subtitle">{article.subtitle}</span>}
                  <h4>{article.title}</h4>
                  {article.date && <span className="fw-blog-date">{article.date}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Progress Bar */}
      <div className="fw-progress-bar">
        <div className="fw-progress-track">
          <div className="fw-progress-fill" style={{ width: '20%' }}></div>
        </div>
        <div className="fw-progress-content">
          <div className="fw-progress-info">
            <div className="fw-progress-label">Continue your launch guide:</div>
            <div className="fw-progress-title">Getting started</div>
          </div>
          <button className="fw-progress-close" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="none" viewBox="0 0 32 32">
              <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2" d="M2 30 30 2m0 28L2 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
