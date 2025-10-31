import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './MembershipsPage.css';

const MembershipsPage = () => {
  const [expandedStep, setExpandedStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Create perks and tiers',
      description: 'Create a foundation of your Memberships by defining subscription tiers, pricing and unique benefits.',
      buttonText: 'Create tiers',
      buttonLink: '/admin/dashboard/memberships/perks/',
      completed: false,
      active: true
    },
    {
      id: 2,
      title: 'Create your first post',
      description: 'Share exclusive content with your members.',
      completed: false,
      active: false
    },
    {
      id: 3,
      title: 'Add Memberships to your homepage',
      description: 'Make the memberships section visible on your site.',
      completed: false,
      active: false
    }
  ];

  const guides = [
    {
      title: 'Memberships Quick Start Guide',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331327040539-Memberships-Quick-Start-Guide?utm_source=onboarding'
    },
    {
      title: '5 Memberships Strategies from Fourthwall Creators',
      link: 'https://fourthwall.com/blog/5-memberships-strategies-from-fourthwall-creators/?utm_source=onboarding'
    },
    {
      title: 'Perks: A Guide to Rewarding Your Members',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331279583387-Perks-A-Guide-to-Rewarding-Your-Members?utm_source=onboarding'
    }
  ];

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="fw-memberships-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="fw-memberships-main">
        {/* Hero Section */}
        <div className="fw-memberships-hero">
          <div className="fw-hero-content">
            <h1>Launch memberships your community will love</h1>
            <p>
              Allow fans to support you with memberships. Create tiers and offer exclusive content, perks and more.{' '}
              <a href="https://fourthwall.com/memberships" target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </p>
          </div>
          <div className="fw-hero-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM46.2523 33.3607C47.4107 32.8233 47.4107 31.1766 46.2523 30.6392L22.5758 19.6553C21.5816 19.1941 20.4445 19.9201 20.4445 21.016L20.4445 42.9838C20.4445 44.0798 21.5816 44.8058 22.5758 44.3445L46.2523 33.3607Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Onboarding Steps */}
        <div className="fw-steps-section">
          <ol className="fw-steps-list">
            {steps.map((step) => (
              <li key={step.id} className={`fw-step-item ${!step.active ? 'fw-step-disabled' : ''}`}>
                <div className="fw-step-number-container">
                  <div className={`fw-step-number ${step.completed ? 'fw-step-completed' : ''} ${step.active ? 'fw-step-active' : ''}`}>
                    {step.completed ? (
                      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="m1 18 12 10L31 4" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                </div>
                <div className="fw-step-content">
                  <div
                    className="fw-step-header"
                    onClick={() => step.active && toggleStep(step.id)}
                    style={{ cursor: step.active ? 'pointer' : 'default' }}
                  >
                    <h3 className="fw-step-title">{step.title}</h3>
                    {step.active && (
                      <button className="fw-step-toggle">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 32 32"
                          style={{
                            transform: expandedStep === step.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {step.active && expandedStep === step.id && (
                    <div className="fw-step-details">
                      <p className="fw-step-description">{step.description}</p>
                      {step.buttonText && (
                        <a href={step.buttonLink} className="fw-btn fw-btn-primary">
                          {step.buttonText}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Guides Section */}
        <div className="fw-guides-section">
          <h2 className="fw-guides-title">Guides & tips</h2>
          <ul className="fw-guides-list">
            {guides.map((guide, index) => (
              <li key={index} className="fw-guide-item">
                <a href={guide.link} target="_blank" rel="noopener noreferrer" className="fw-guide-link">
                  <span className="fw-guide-text">{guide.title}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M12 8.5V12.5C12 13.3284 11.3284 14 10.5 14H3.5C2.67157 14 2 13.3284 2 12.5V5.5C2 4.67157 2.67157 4 3.5 4H7.5M10 2H14M14 2V6M14 2L7 9"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
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

export default MembershipsPage;
