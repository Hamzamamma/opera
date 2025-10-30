import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SiteDesignPage.css';

const SiteDesignPage = () => {
  const [activeView, setActiveView] = useState('desktop');
  const [activeTab, setActiveTab] = useState('layout');
  const [selectedPage, setSelectedPage] = useState('home');
  const [sections, setSections] = useState([
    { id: 'header', name: 'Header', icon: 'header', visible: true, draggable: true },
    { id: 'hero-1', name: 'Image banner', icon: 'image', visible: true, draggable: true },
    { id: 'newsletter-1', name: 'Newsletter', icon: 'newsletter', visible: true, draggable: true },
    { id: 'footer', name: 'Footer', icon: 'footer', visible: true, draggable: true }
  ]);

  const toggleSectionVisibility = (id) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, visible: !section.visible } : section
    ));
  };

  const renderIcon = (iconType) => {
    const icons = {
      header: (
        <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="none" viewBox="0 0 32 32">
          <path stroke="currentColor" strokeWidth="1.5" d="M1 15.5v4m30-4v4m-30 9V31h2.5M31 28.5V31h-2.5M1 22.5v4m30-4v4M6.5 31h4m3.5 0h4m3.5 0h4M1 1h30v12H1z" />
        </svg>
      ),
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="none" viewBox="0 0 32 33">
          <path stroke="currentColor" strokeWidth="1.5" d="M0 32h8m-8-7h11m18-9L19.01 2l-5.242 6.196L10.12 5.96 3 16zm-9 16h7a4 4 0 0 0 0-8h-7a4 4 0 0 0 0 8Z" />
        </svg>
      ),
      newsletter: (
        <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="none" viewBox="0 0 32 32">
          <path stroke="currentColor" strokeWidth="1.5" d="M31 6v21.5H1V6m30 0V5H1v1m30 0L15.988 19.453 1 6" />
        </svg>
      ),
      footer: (
        <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="none" viewBox="0 0 32 32">
          <path stroke="currentColor" strokeWidth="1.5" d="M1 16.5v-4m30 4v-4m-30-9V1h2.5M31 3.5V1h-2.5M1 9.5v-4m30 4v-4M6.5 1h4M14 1h4m3.5 0h4M1 31h30V19H1z" />
        </svg>
      )
    };
    return icons[iconType];
  };

  return (
    <div className="fw-site-design">
      {/* Top Header */}
      <header className="fw-site-design-header">
        <div className="fw-header-left">
          <Link to="/" className="fw-logo">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="none" viewBox="0 0 128 79">
              <path fill="currentColor" fillRule="evenodd" d="m61.886 20.376 7.748 39.773 6.871-39.773h18.547l6.764 39.773 7.747-39.773H128L114.472 79H93.634L85.78 35.74 77.924 79H56.977L43.45 20.376zM47.786 0 45.06 12.64h-5.13c-6.436 0-7.854.328-8.945 4.794l-.546 2.943h12.983l-2.73 12.748H27.713L18.002 79H0l9.71-45.875H1.637l2.728-12.748h7.964l.873-3.706C16.04 2.833 22.802 0 38.512 0z" clipRule="evenodd" />
            </svg>
          </Link>

          <div className="fw-page-dropdown">
            <button className="fw-dropdown-btn">
              <span>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" />
              </svg>
            </button>
          </div>
        </div>

        <div className="fw-header-right">
          <button className="fw-more-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
              <path stroke="currentColor" strokeWidth="1.5" d="M4.5 16A1.75 1.75 0 1 1 1 16a1.75 1.75 0 0 1 3.5 0Zm13.25 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM31 16a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z" />
            </svg>
          </button>
          <button className="fw-btn fw-btn-secondary" disabled>Save</button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="fw-site-design-main">
        {/* Top Toolbar */}
        <div className="fw-design-toolbar">
          <div className="fw-toolbar-left">
            <div className="fw-page-dropdown-mobile">
              <button className="fw-dropdown-btn">
                <span>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 32 32">
                  <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" />
                </svg>
              </button>
            </div>

            <div className="fw-view-switcher">
              <button
                className={`fw-view-btn ${activeView === 'desktop' ? 'active' : ''}`}
                onClick={() => setActiveView('desktop')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v8.633a1.75 1.75 0 0 1-1.75 1.75h-3.567V14.5h1.667V16h-8.7v-1.5h1.667v-2.367H1.75A1.75 1.75 0 0 1 0 10.383zm6.817 10.383V14.5h2.366v-2.367zM1.75 1.5a.25.25 0 0 0-.25.25v8.633c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                className={`fw-view-btn ${activeView === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveView('mobile')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 32 32">
                  <path stroke="currentColor" strokeWidth="1.5" d="M13 25h6zM6 1h20v30H6z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="fw-toolbar-right">
            <div className="fw-coming-soon-badge">
              <span>Coming soon</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" />
              </svg>
            </div>
            <button className="fw-btn fw-btn-secondary" disabled>Save</button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="fw-preview-area">
          <div className={`fw-preview-frame ${activeView}`}>
            <div className="fw-preview-content">
              <div className="fw-preview-placeholder">
                <p>Site preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="fw-bottom-panel">
          <div className="fw-panel-handle">
            <button className="fw-handle-btn">
              <div className="fw-handle-bar"></div>
            </button>
          </div>

          <div className="fw-panel-content">
            {/* Tabs */}
            <div className="fw-panel-tabs">
              <button
                className={`fw-panel-tab ${activeTab === 'layout' ? 'active' : ''}`}
                onClick={() => setActiveTab('layout')}
              >
                Layout
              </button>
              <button
                className={`fw-panel-tab ${activeTab === 'style' ? 'active' : ''}`}
                onClick={() => setActiveTab('style')}
              >
                Style
              </button>
              <button
                className={`fw-panel-tab ${activeTab === 'pages' ? 'active' : ''}`}
                onClick={() => setActiveTab('pages')}
              >
                Pages
              </button>
              <button
                className={`fw-panel-tab ${activeTab === 'theme' ? 'active' : ''}`}
                onClick={() => setActiveTab('theme')}
              >
                Theme
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'layout' && (
              <div className="fw-layout-content">
                {/* Page Selector */}
                <div className="fw-page-selector">
                  <button className="fw-dropdown-btn">
                    <span>Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 32 32">
                      <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" />
                    </svg>
                  </button>
                </div>

                {/* Sections List */}
                <div className="fw-sections-list">
                  {/* Header Section */}
                  <div className="fw-section-group">
                    <div className="fw-section-item">
                      <div className="fw-section-info">
                        {renderIcon('header')}
                        <span className="fw-section-name">Header</span>
                      </div>
                      <div className="fw-section-actions">
                        <button className="fw-drag-handle">
                          <svg xmlns="http://www.w3.org/2000/svg" height="12" fill="none" viewBox="0 0 32 32">
                            <path stroke="currentColor" strokeWidth="1.5" d="M22 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM22 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 22 1ZM10 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 10 1Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="fw-add-section-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.75 5.63V4.132h1.5V7.13h3.117v1.5H8.75v3.238h-1.5V8.629H4.133v-1.5z" clipRule="evenodd" />
                      </svg>
                      Add header section
                    </button>
                  </div>

                  {/* Page Sections */}
                  <div className="fw-section-group">
                    {sections.filter(s => s.id.includes('hero') || s.id.includes('newsletter')).map(section => (
                      <div key={section.id} className="fw-section-item">
                        <div className="fw-section-info">
                          {renderIcon(section.icon)}
                          <span className="fw-section-name">{section.name}</span>
                        </div>
                        <div className="fw-section-actions">
                          <button
                            className="fw-visibility-btn"
                            onClick={() => toggleSectionVisibility(section.id)}
                          >
                            {section.visible ? (
                              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 34 32">
                                <path stroke="currentColor" strokeWidth="1.5" d="M16.998 5C7.128 4.935 1 15.996 1 15.996s6.133 11.066 15.998 11c9.865.066 16.002-11 16.002-11S26.867 4.935 16.998 5Z" />
                                <path stroke="currentColor" strokeWidth="1.5" d="M21.5 16.001a4.5 4.5 0 1 1-9-.002 4.5 4.5 0 0 1 9 .002Z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 34 32">
                                <path stroke="currentColor" strokeWidth="1.5" d="M28.707 4.707 6.08 27.334M16.998 5C7.128 4.935 1 15.996 1 15.996s6.133 11.066 15.998 11c9.865.066 16.002-11 16.002-11S26.867 4.936 16.998 5ZM21.5 16.001a4.5 4.5 0 1 1-9-.002 4.5 4.5 0 0 1 9 .002Z" />
                              </svg>
                            )}
                          </button>
                          <button className="fw-drag-handle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" fill="none" viewBox="0 0 32 32">
                              <path stroke="currentColor" strokeWidth="1.5" d="M22 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM22 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 22 1ZM10 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 10 1Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="fw-add-section-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.75 5.63V4.132h1.5V7.13h3.117v1.5H8.75v3.238h-1.5V8.629H4.133v-1.5z" clipRule="evenodd" />
                      </svg>
                      Add page section
                    </button>
                  </div>

                  {/* Footer Section */}
                  <div className="fw-section-group">
                    <div className="fw-section-item">
                      <div className="fw-section-info">
                        {renderIcon('footer')}
                        <span className="fw-section-name">Footer</span>
                      </div>
                      <div className="fw-section-actions">
                        <button className="fw-drag-handle">
                          <svg xmlns="http://www.w3.org/2000/svg" height="12" fill="none" viewBox="0 0 32 32">
                            <path stroke="currentColor" strokeWidth="1.5" d="M22 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM22 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 22 1ZM10 27.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-13.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 10 1Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="fw-add-section-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.75 5.63V4.132h1.5V7.13h3.117v1.5H8.75v3.238h-1.5V8.629H4.133v-1.5z" clipRule="evenodd" />
                      </svg>
                      Add footer section
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'style' && (
              <div className="fw-tab-placeholder">
                <p>Style settings coming soon</p>
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="fw-tab-placeholder">
                <p>Pages management coming soon</p>
              </div>
            )}

            {activeTab === 'theme' && (
              <div className="fw-tab-placeholder">
                <p>Theme settings coming soon</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SiteDesignPage;
