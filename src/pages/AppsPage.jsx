import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './AppsPage.css';

const AppsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'social-commerce', label: 'Social commerce' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'memberships', label: 'Memberships' },
    { id: 'social-feeds', label: 'Social feeds' },
    { id: 'email-marketing', label: 'Email marketing' },
    { id: 'other', label: 'Other' }
  ];

  const apps = [
    {
      id: 'youtube-product-shelf',
      name: 'YouTube Product Shelf',
      description: 'Promote featured products from your shop on your YouTube channels.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331252530203',
      category: 'social-commerce'
    },
    {
      id: 'twitch-gifting',
      name: 'Twitch gifting',
      description: 'Allow your viewers to gift products and memberships for chat when you\'re live.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331277761563',
      category: 'social-commerce'
    },
    {
      id: 'twitter-shops',
      name: 'X Shops',
      description: 'Show off your products on your X (Twitter) profile.',
      category: 'social-commerce'
    },
    {
      id: 'tiktok',
      name: 'TikTok feed',
      description: 'Highlight TikTok videos on your homepage and share thank you notes to your TikTok account.',
      category: 'social-feeds'
    },
    {
      id: 'tiktok-shop',
      name: 'TikTok Shop',
      description: 'Showcase and sell products from your shop directly to your fans on TikTok.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/20059966612763',
      category: 'social-commerce'
    },
    {
      id: 'meta-capi',
      name: 'Meta Ads',
      description: 'Send conversion events to Meta for running paid ad campaigns for your shop.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/37430330256539',
      category: 'other'
    },
    {
      id: 'instagram-feed',
      name: 'Instagram feed',
      description: 'Showcase your Instagram feed on your homepage.',
      category: 'social-feeds'
    },
    {
      id: 'meta',
      name: 'Instagram & Facebook Shop',
      description: 'Showcase and sell products from your shop directly to your fans on Instagram and Facebook.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331280410907',
      category: 'social-commerce'
    },
    {
      id: 'merchtrain',
      name: 'Twitch Merch Train',
      description: 'A hype train, but for merch. Give out rewards for rapid sequences of viewer purchases on your Twitch stream.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/39469007712027',
      badge: 'Beta',
      category: 'other'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Automate your workflows by connecting to thousands of apps via Zapier.',
      category: 'other'
    },
    {
      id: 'streamelements',
      name: 'StreamElements alerts',
      description: 'Show stream alerts for product purchases and gifts via StreamElements.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331283282331',
      category: 'alerts'
    },
    {
      id: 'streamlabs',
      name: 'Streamlabs alerts',
      description: 'Show stream alerts for product purchases and gifts via Streamlabs.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331283282331',
      category: 'alerts'
    },
    {
      id: 'spotify',
      name: 'Members-only audio on Spotify',
      description: 'Allow members to listen to your audio posts on Spotify.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331283282331',
      category: 'memberships'
    },
    {
      id: 'discord',
      name: 'Members-only Discord server',
      description: 'Allows you to offer access to your Discord server with your members.',
      category: 'memberships'
    },
    {
      id: 'twitch-memberships-discounts',
      name: 'Discounts for Twitch subs',
      description: 'Offer Twitch subscribers discounts on membership tiers.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/14314760750235',
      category: 'memberships'
    },
    {
      id: 'klaviyo',
      name: 'Klaviyo',
      description: 'Use your Klaviyo account to sync support emails and send custom emails.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/19419091421339',
      category: 'email-marketing'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Use Mailchimp to sync supporter emails and send custom emails.',
      category: 'email-marketing'
    },
    {
      id: 'kit',
      name: 'Kit',
      description: 'Use Kit to sync purchases and email lists.',
      category: 'email-marketing'
    },
    {
      id: 'beehiiv',
      name: 'beehiiv',
      description: 'Use your beehiiv account to sync supporter emails and newsletter signups.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/20819244391195',
      category: 'email-marketing'
    },
    {
      id: 'laylo',
      name: 'Laylo',
      description: 'Use Laylo to announce and promote your drops directly to your supporters.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/18537710201115',
      category: 'email-marketing'
    },
    {
      id: 'shipstation',
      name: 'ShipStation',
      description: 'Manage the shipping experience of products you\'re responsible for fulfilling.',
      link: 'https://help.fourthwall.com/hc/en-us/articles/18437332272411',
      category: 'other'
    },
    {
      id: 'echobrain',
      name: 'Customer Reviews by EchoBrain',
      description: 'Display customer reviews on your product pages with EchoBrain.',
      link: 'https://echo-brain.com/blog/documentation/fourthwall-integration-quick-start-guide/',
      badge: 'Third Party',
      category: 'other'
    },
    {
      id: 'vimmi',
      name: 'Vimmi Video Commerce',
      description: 'Live shopping and shoppable video platform for your store and socials.',
      link: 'https://help.vimmi.net/en/articles/11008840-vimmi-app-quick-start-guide',
      badge: 'Third Party',
      category: 'other'
    },
    {
      id: 'viasocket',
      name: 'Viasocket',
      description: 'viaSocket is an automation platform that connects your favorite apps to streamline workflows without requiring any code.',
      badge: 'Third Party',
      category: 'other'
    }
  ];

  const filteredApps = activeFilter === 'all'
    ? apps
    : apps.filter(app => app.category === activeFilter);

  return (
    <div className="fw-apps-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="fw-apps-main">
        {/* Header */}
        <div className="fw-apps-header">
          <h1>Apps</h1>
          <p>Elevate your Fourthwall experience with our apps and integrations.</p>
        </div>

        {/* Category Filters */}
        <div className="fw-apps-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`fw-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="fw-apps-grid">
          {filteredApps.map(app => (
            <div key={app.id} className="fw-app-card">
              <div className="fw-app-header">
                <h3>{app.name}</h3>
                {app.badge && (
                  <span className={`fw-app-badge ${app.badge === 'Beta' ? 'beta' : 'third-party'}`}>
                    {app.badge}
                  </span>
                )}
              </div>
              <p className="fw-app-description">
                {app.description}
                {app.link && (
                  <>
                    {' '}
                    <a href={app.link} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
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

export default AppsPage;
