import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('last7days');
  const [groupBy, setGroupBy] = useState('DAY');

  return (
    <div className="fw-analytics-page">
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
          <Link to="/promotions" className="fw-nav-link">Promotions</Link>
          <Link to="#" className="fw-nav-link">Memberships</Link>
          <Link to="/site-design" className="fw-nav-link">Site design</Link>
          <Link to="/analytics" className="fw-nav-link active">Analytics</Link>
          <Link to="/apps" className="fw-nav-link">Apps</Link>
          <Link to="#" className="fw-nav-link">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="fw-analytics-main">
        {/* Header */}
        <div className="fw-analytics-header">
          <h1>Analytics</h1>
          <button className="fw-more-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
              <path stroke="currentColor" strokeWidth="1.5" d="M4.5 16A1.75 1.75 0 1 1 1 16a1.75 1.75 0 0 1 3.5 0Zm13.25 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM31 16a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z" />
            </svg>
          </button>
        </div>

        {/* Filters */}
        <div className="fw-analytics-filters">
          <div className="fw-filter-group">
            <label>Date range (CET)</label>
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="last90days">Last 90 days</option>
              <option value="weekToDate">Week to date</option>
              <option value="monthToDate">Month to date</option>
              <option value="lastMonth">Last month</option>
              <option value="yearToDate">Year to date</option>
              <option value="lastYear">Last year</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="fw-filter-group">
            <label>Group by</label>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
              <option value="HOUR">Hour</option>
              <option value="DAY">Day</option>
            </select>
          </div>
        </div>

        {/* Google Analytics Banner */}
        <div className="fw-ga-banner">
          <div className="fw-ga-content">
            <strong>Connect Google Analytics to see views and other advanced analytics</strong>
            <p>See how many people visit your site along with other advanced analytics</p>
          </div>
          <button className="fw-btn fw-btn-primary">Connect for free</button>
        </div>

        {/* Analytics Cards Grid */}
        <div className="fw-analytics-grid">
          {/* Profit Card */}
          <div className="fw-analytics-card large">
            <div className="fw-card-header">
              <div className="fw-card-title">Profit</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-value">$0</div>
            <div className="fw-chart-placeholder">
              <svg viewBox="0 0 400 120" className="fw-chart">
                <line x1="0" y1="120" x2="400" y2="120" stroke="#e5e5e5" strokeWidth="1"/>
                <polyline points="0,120 57,120 114,120 171,120 228,120 285,120 342,120 400,120"
                  fill="none" stroke="#000" strokeWidth="2"/>
              </svg>
              <div className="fw-chart-legend">Oct 24 - Oct 30, 2025</div>
            </div>
          </div>

          {/* Orders Card */}
          <div className="fw-analytics-card">
            <div className="fw-card-header">
              <div className="fw-card-title">Orders</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-value">0</div>
            <div className="fw-chart-placeholder">
              <svg viewBox="0 0 400 120" className="fw-chart">
                <line x1="0" y1="120" x2="400" y2="120" stroke="#e5e5e5" strokeWidth="1"/>
                <polyline points="0,120 57,120 114,120 171,120 228,120 285,120 342,120 400,120"
                  fill="none" stroke="#000" strokeWidth="2"/>
              </svg>
              <div className="fw-chart-legend">Oct 24 - Oct 30, 2025</div>
            </div>
          </div>

          {/* Average Order Value Card */}
          <div className="fw-analytics-card">
            <div className="fw-card-header">
              <div className="fw-card-title">Average shop order value</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-value"></div>
            <div className="fw-chart-placeholder">
              <svg viewBox="0 0 400 120" className="fw-chart">
                <line x1="0" y1="120" x2="400" y2="120" stroke="#e5e5e5" strokeWidth="1"/>
                <polyline points="0,120 57,120 114,120 171,120 228,120 285,120 342,120 400,120"
                  fill="none" stroke="#000" strokeWidth="2"/>
              </svg>
              <div className="fw-chart-legend">Oct 24 - Oct 30, 2025</div>
            </div>
          </div>

          {/* Top Products Card */}
          <div className="fw-analytics-card">
            <div className="fw-card-header">
              <div className="fw-card-title">Top products by units sold</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-date">Oct 24 - Oct 30, 2025</div>
            <div className="fw-card-value"></div>
            <div className="fw-empty-data">
              No contributions found in this date range.
            </div>
          </div>

          {/* Sales by Country Card */}
          <div className="fw-analytics-card">
            <div className="fw-card-header">
              <div className="fw-card-title">Sales by country</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-date">Oct 24 - Oct 30, 2025</div>
            <div className="fw-card-value"></div>
            <div className="fw-empty-data">
              No contributions found in this date range.
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="fw-analytics-card">
            <div className="fw-card-header">
              <div className="fw-card-title">Payment method used</div>
              <a href="#" className="fw-full-report">Full report</a>
            </div>
            <div className="fw-card-date">Oct 24 - Oct 30, 2025</div>
            <div className="fw-card-value"></div>
            <div className="fw-empty-data">
              No data found in this date range.
            </div>
          </div>
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

export default AnalyticsPage;
