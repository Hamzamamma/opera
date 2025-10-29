import { useState } from 'react';
import './OrdersPage.css';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('printify');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'on-hold', label: 'On hold' },
    { id: 'in-production', label: 'In production' },
    { id: 'ready-to-ship', label: 'Ready to ship' },
    { id: 'on-the-way', label: 'On the way' }
  ];

  return (
    <div className="orders-page">
      <div className="orders-container">
        {/* Header */}
        <div className="orders-header">
          <h1>Orders</h1>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <span>CSV Import / Export</span>
              <span className="material-icons-outlined">expand_more</span>
            </button>
            <button className="btn btn-primary">
              <span>Create order</span>
              <span className="material-icons-outlined">expand_more</span>
            </button>
          </div>
        </div>

        {/* Settings Bar */}
        <div className="settings-bar">
          <div className="settings-left">
            <div className="setting-item">
              <span className="setting-label">Routing:</span>
              <span className="setting-value">Disabled</span>
              <span className="info-icon">i</span>
            </div>

            <div className="setting-item">
              <span className="setting-label">Approval:</span>
              <span className="setting-value">Automatic</span>
              <span className="info-icon">i</span>
            </div>

            <div className="setting-item">
              <span className="setting-label">Tracking notifications:</span>
              <span className="setting-value">Automatic</span>
              <span className="info-icon">i</span>
            </div>

            <div className="setting-item">
              <span className="setting-label">Delayed orders:</span>
              <span className="setting-value">Manual</span>
              <span className="info-icon">i</span>
            </div>
          </div>

          <div className="settings-right">
            <a href="#" className="link-settings">Go to settings</a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="nav-arrows-bar">
          <div className="nav-arrows">
            <button className="nav-arrow disabled">
              <span className="material-icons-outlined">chevron_left</span>
            </button>
            <button className="nav-arrow disabled">
              <span className="material-icons-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="orders-tabs">
          <div
            className={`tab ${activeTab === 'printify' ? 'active' : ''}`}
            onClick={() => setActiveTab('printify')}
          >
            Printify orders
          </div>
          <div
            className={`tab ${activeTab === 'other' ? 'active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            Other orders
          </div>
        </div>

        {/* Filters */}
        <div className="orders-filters">
          <div className="search-box">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search by order number, customer, or product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-pills">
            {filters.map(filter => (
              <div
                key={filter.id}
                className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </div>
            ))}
            <div className="filter-pill-more">
              <span>···</span>
            </div>

            <div className="time-filter">
              <span>Anytime</span>
              <span className="material-icons-outlined">expand_more</span>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="table-wrapper">
          <div className="table-header">
            <div><input type="checkbox" /></div>
            <div>Order</div>
            <div>Sent to production</div>
            <div>Customer</div>
            <div>Total cost</div>
            <div>Tracking</div>
            <div>Status</div>
          </div>
        </div>

        {/* Empty State */}
        <div className="empty-state">
          <div className="empty-icon">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L30 20L40 80L90 80L100 40L35 40" stroke="#39b549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="45" cy="90" r="5" fill="#39b549"/>
              <circle cx="85" cy="90" r="5" fill="#39b549"/>
              <path d="M35 40L40 60L80 60L85 40" stroke="#39b549" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
            </svg>
          </div>

          <h2>Your order list is empty</h2>
          <p>
            Try ordering <a href="#">product samples</a> and see your products before your customers do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
