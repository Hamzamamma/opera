import { useState } from 'react';
import './SetupChecklistWidget.css';

const SetupChecklistWidget = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const checklistSteps = [
    {
      id: 'product_created',
      title: 'Prodotto creato',
      description: 'Crea il tuo primo prodotto',
      completed: true,
      progress: 100
    },
    {
      id: 'store_connected',
      title: 'Negozio connesso',
      description: 'Collega il tuo negozio e-commerce',
      completed: true,
      progress: 100
    },
    {
      id: 'sellers_club',
      title: 'Unisciti al Sellers Club',
      description: 'Connettiti con mentor nel Sellers Club',
      completed: false,
      progress: 0,
      highlighted: true,
      cta: 'Unisciti ora'
    }
  ];

  return (
    <div className={`setup-checklist-widget ${isMinimized ? 'minimized' : ''}`}>
      <div className="checklist-header">
        <h3 className="checklist-title">Checklist di configurazione</h3>
        <button
          className="minimize-btn"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? 'Espandi' : 'Riduci'}
        >
          <span className="material-icons-outlined">
            {isMinimized ? 'expand_more' : 'expand_less'}
          </span>
        </button>
      </div>

      {!isMinimized && (
        <div className="checklist-content">
          <div className="checklist-steps">
            {checklistSteps.map((step, index) => (
              <div
                key={step.id}
                className={`checklist-step ${step.completed ? 'completed' : ''} ${step.highlighted ? 'highlighted' : ''}`}
              >
                <div className="step-indicator">
                  {step.completed ? (
                    <div className="check-icon">
                      <span className="material-icons-outlined">check</span>
                    </div>
                  ) : (
                    <div className="step-number">{index + 1}</div>
                  )}
                </div>

                <div className="step-content">
                  <div className="step-info">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>

                  {!step.completed && step.cta && (
                    <a href="#" className="step-cta">
                      {step.cta}
                      <span className="material-icons-outlined">arrow_forward</span>
                    </a>
                  )}

                  {step.completed && (
                    <span className="done-label">Completato</span>
                  )}
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${step.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupChecklistWidget;
