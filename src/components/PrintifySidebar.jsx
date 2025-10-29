import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PrintifySidebar.css';

const PrintifySidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      id: 'notifications',
      label: 'Notifiche',
      icon: 'notifications',
      link: '#',
      hasUnread: true
    },
    {
      id: 'catalog',
      label: 'Catalogo',
      icon: 'content_paste',
      link: '#',
      hasDropdown: true
    },
    {
      id: 'products',
      label: 'I miei prodotti',
      icon: 'sell',
      link: '/products'
    },
    {
      id: 'orders',
      label: 'Ordini',
      icon: 'local_shipping',
      link: '/orders'
    },
    {
      id: 'wallet',
      label: 'Portafoglio',
      icon: 'attach_money',
      link: '#',
      hasDropdown: true
    },
    {
      id: 'insights',
      label: 'Insights',
      icon: 'insert_chart',
      link: '#'
    },
    {
      id: 'settings',
      label: 'Impostazioni negozio',
      icon: 'settings',
      link: '#'
    },
    {
      id: 'branding',
      label: 'Branding',
      icon: 'favorite_border',
      link: '#'
    }
  ];

  const printfulMenuItems = [
    {
      id: 'printful-dashboard',
      label: 'Dashboard Printful',
      icon: 'dashboard',
      link: '/printful'
    },
    {
      id: 'printful-catalog',
      label: 'Catalogo Printful',
      icon: 'shopping_bag',
      link: '/printful/catalog'
    },
    {
      id: 'printful-products',
      label: 'Prodotti Printful',
      icon: 'inventory',
      link: '/printful/products'
    },
    {
      id: 'printful-orders',
      label: 'Ordini Printful',
      icon: 'receipt_long',
      link: '/printful/orders'
    }
  ];

  const bottomMenuItems = [
    {
      id: 'sellers-club',
      label: 'Sellers Club',
      icon: 'groups',
      link: '#',
      external: true
    },
    {
      id: 'premium',
      label: 'Printify Premium',
      icon: 'workspace_premium',
      link: '#'
    },
    {
      id: 'help',
      label: 'Serve aiuto?',
      icon: 'help',
      link: '#',
      hasDropdown: true
    }
  ];

  return (
    <aside className={`printify-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Header con Logo */}
      <div className="sidebar-header">
        <a href="#" className="logo-link">
          <svg width="127" height="34" viewBox="0 0 127 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="printify-logo">
            <path d="M32.9116 7.69097C30.7483 8.06883 29.587 8.89143 28.8716 12.6797V7.5669L21.8364 9.77847V24.905H29.579V16.9409C29.579 15.7646 30.3421 14.7237 31.4629 14.3716L34.5453 13.4024V7.56851C34.5453 7.56851 33.3178 7.62088 32.9108 7.69178L32.9116 7.69097Z" fill="currentColor"/>
            <path d="M59.5294 7.06582H59.5286C56.6659 7.06582 54.5858 8.68039 53.6014 10.6406V7.41468L46.0776 9.78014V24.9059H53.8202V14.6843C53.8202 13.1632 54.6487 12.6161 55.5257 12.6161C56.4027 12.6161 57.0116 13.1019 57.0116 14.387V24.9059H64.7541V13.4468C64.7541 9.15171 62.8928 7.06582 59.5294 7.06582Z" fill="currentColor"/>
            <path d="M92.8641 7.007V7.56694H90.8646V12.9456H92.8641V24.9067H100.607V12.9456H103.939V7.56694H100.607V7.0215C100.607 6.02488 101.413 5.21679 102.407 5.21679H103.939V0.513259H99.3437C95.7647 0.513259 92.8641 3.42013 92.8641 7.007Z" fill="currentColor"/>
            <path d="M36.0021 24.9066H43.7447V10.5125L36.0021 12.9456V24.9066Z" fill="currentColor"/>
            <path d="M13.3509 0.999012H0V7.56687H12.3625C12.9326 7.56687 13.4316 7.99066 13.4841 8.56027C13.5108 8.84064 13.4308 9.10571 13.2774 9.31599C13.1425 9.50049 12.9503 9.6431 12.7218 9.714L0 13.7118V24.9058H8.29089V17.8038C9.81551 17.3244 11.3425 16.8507 12.8607 16.3503C14.7309 15.734 16.6965 15.2248 18.2647 13.9704C19.8927 12.6668 20.7632 10.4915 20.7632 8.42733C20.7632 4.32403 17.445 0.999012 13.3509 0.999012Z" fill="currentColor"/>
          </svg>
        </a>
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Espandi sidebar' : 'Nascondi sidebar'}
        >
          <span className="material-icons-outlined">
            {isCollapsed ? 'unfold_more' : 'unfold_less'}
          </span>
        </button>
      </div>

      {/* Store Selector */}
      <div className="store-selector">
        <button className="store-selector-btn">
          <div className="store-info">
            <div className="store-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#39B54A"/>
                <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="store-name">Il mio nuovo negozio</span>
          </div>
          <span className="material-icons-outlined">unfold_more</span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map(item => {
            const isActive = item.link !== '#' && location.pathname === item.link;
            const Component = item.link !== '#' ? Link : 'a';
            const linkProps = item.link !== '#' ? { to: item.link } : { href: item.link };

            return (
              <li key={item.id} className="menu-item">
                <Component
                  {...linkProps}
                  className={`menu-link ${isActive ? 'active' : ''}`}
                >
                  <span className="material-icons-outlined menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                  {item.hasUnread && <span className="unread-badge"></span>}
                  {item.hasDropdown && (
                    <span className="material-icons-outlined dropdown-icon">chevron_right</span>
                  )}
                </Component>
              </li>
            );
          })}
        </ul>

        {/* Printful Section */}
        <div className="menu-section-divider">
          <span className="section-title">Printful</span>
        </div>
        <ul className="menu-list">
          {printfulMenuItems.map(item => {
            const isActive = item.link !== '#' && location.pathname === item.link;
            const Component = item.link !== '#' ? Link : 'a';
            const linkProps = item.link !== '#' ? { to: item.link } : { href: item.link };

            return (
              <li key={item.id} className="menu-item">
                <Component
                  {...linkProps}
                  className={`menu-link ${isActive ? 'active' : ''}`}
                >
                  <span className="material-icons-outlined menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </Component>
              </li>
            );
          })}
        </ul>

        {/* Bottom Menu */}
        <ul className="menu-list bottom-menu">
          {bottomMenuItems.map(item => (
            <li key={item.id} className="menu-item">
              <a
                href={item.link}
                className="menu-link"
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <span className="material-icons-outlined menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
                {item.hasDropdown && (
                  <span className="material-icons-outlined dropdown-icon">chevron_right</span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Account Section */}
        <div className="account-section">
          <a href="#" className="account-link">
            <div className="account-icon">
              <span className="material-icons-outlined">account_circle</span>
            </div>
            <div className="account-info">
              <span className="account-label">Account</span>
              <span className="account-email">hamzalemzaroual...</span>
            </div>
            <span className="material-icons-outlined dropdown-icon">chevron_right</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default PrintifySidebar;
