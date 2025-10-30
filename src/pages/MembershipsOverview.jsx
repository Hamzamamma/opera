import { useState } from 'react';
import './MembershipsOverview.css';

const MembershipsOverview = () => {
  const [expandedStep, setExpandedStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Crea vantaggi e livelli',
      description: 'Crea la base delle tue Membership definendo livelli di abbonamento, prezzi e vantaggi unici.',
      buttonText: 'Crea livelli',
      buttonLink: '/admin/dashboard/memberships/perks/',
      completed: false,
      active: true
    },
    {
      id: 2,
      title: 'Crea il tuo primo post',
      description: 'Condividi contenuti esclusivi con i tuoi membri.',
      completed: false,
      active: false
    },
    {
      id: 3,
      title: 'Aggiungi Memberships alla homepage',
      description: 'Rendi visibile la sezione memberships sul tuo sito.',
      completed: false,
      active: false
    }
  ];

  const guides = [
    {
      title: 'Guida Rapida alle Membership',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331327040539-Memberships-Quick-Start-Guide'
    },
    {
      title: '5 Strategie di Membership dai Creator Fourthwall',
      link: 'https://fourthwall.com/blog/5-memberships-strategies-from-fourthwall-creators/'
    },
    {
      title: 'Vantaggi: Guida per Premiare i Tuoi Membri',
      link: 'https://help.fourthwall.com/hc/en-us/articles/13331279583387-Perks-A-Guide-to-Rewarding-Your-Members'
    }
  ];

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="memberships-overview">
      <div className="memberships-container">
        {/* Hero Section */}
        <div className="memberships-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Lancia membership che la tua community amerà
            </h1>
            <p className="hero-description">
              Permetti ai fan di supportarti con membership. Crea livelli e offri contenuti esclusivi, vantaggi e altro ancora.{' '}
              <a href="https://fourthwall.com/memberships" target="_blank" rel="noopener noreferrer" className="hero-link">
                Scopri di più
              </a>
            </p>
          </div>
          <div className="hero-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM46.2523 33.3607C47.4107 32.8233 47.4107 31.1766 46.2523 30.6392L22.5758 19.6553C21.5816 19.1941 20.4445 19.9201 20.4445 21.016L20.4445 42.9838C20.4445 44.0798 21.5816 44.8058 22.5758 44.3445L46.2523 33.3607Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Onboarding Steps */}
        <div className="onboarding-section">
          <ol className="steps-list">
            {steps.map((step) => (
              <li key={step.id} className={`step-item ${!step.active ? 'step-disabled' : ''}`}>
                <div className="step-number-container">
                  <div className={`step-number ${step.completed ? 'step-completed' : ''} ${step.active ? 'step-active' : ''}`}>
                    {step.completed ? (
                      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 18 12 10L31 4" vectorEffect="non-scaling-stroke"/>
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                </div>
                <div className="step-content">
                  <div className="step-header" onClick={() => step.active && toggleStep(step.id)}>
                    <h3 className="step-title">{step.title}</h3>
                    {step.active && (
                      <button className="step-toggle">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 32 32"
                          style={{ transform: expandedStep === step.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m1 8 15 16L31 8" vectorEffect="non-scaling-stroke"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  {step.active && expandedStep === step.id && (
                    <div className="step-details">
                      <p className="step-description">{step.description}</p>
                      {step.buttonText && (
                        <a href={step.buttonLink} className="step-button">
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
        <div className="guides-section">
          <h2 className="guides-title">Guide e suggerimenti</h2>
          <ul className="guides-list">
            {guides.map((guide, index) => (
              <li key={index} className="guide-item">
                <a href={guide.link} target="_blank" rel="noopener noreferrer" className="guide-link">
                  <span className="guide-text">{guide.title}</span>
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m14 1 16 15-16 15" vectorEffect="non-scaling-stroke"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="launch-guide-banner">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '14.2857%' }}></div>
        </div>
        <div className="launch-guide-content">
          <div className="launch-guide-text">
            <div className="launch-guide-label">Continua la tua guida di lancio:</div>
            <div className="launch-guide-step">Per iniziare</div>
          </div>
          <button className="close-button" aria-label="Chiudi">
            <svg width="10" height="10" viewBox="0 0 32 32" fill="none">
              <path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1.5" d="M2 30 30 2m0 28L2 2" vectorEffect="non-scaling-stroke"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipsOverview;
