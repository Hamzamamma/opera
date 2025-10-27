import DashboardSidebar from './DashboardSidebar';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Benvenuto nel tuo pannello di controllo Fourthwall</p>
        </div>

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.923 2.651H6.63A2.13 2.13 0 0 0 4.5 6.28a2.11 2.11 0 0 0 1.343 1.98 1 1 0 0 0 .091.029l3.37.842a.632.632 0 0 1-.27 1.207H5.249v1.5h1.828v.799h1.5v-.8h.441a2.131 2.131 0 0 0 .79-4.12 1 1 0 0 0-.088-.027l-3.368-.842A.61.61 0 0 1 6 6.288v-.005a.63.63 0 0 1 .632-.632h3.774v-1.5H8.577V3.36h-1.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Vendite Totali</p>
                <p className="stat-value">€0,00</p>
                <p className="stat-change">+0% questo mese</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fillRule="evenodd" d="M3.947 1.17A1.75 1.75 0 0 1 5.084.75h6c.435 0 .854.162 1.176.454l3.121 2.834c.607.55.75 1.449.345 2.16l-.607 1.067a1.73 1.73 0 0 1-2.533.535.23.23 0 0 0-.366.185V13.5a1.75 1.75 0 0 1-1.75 1.75H5.715a1.75 1.75 0 0 1-1.75-1.75V8.025a.252.252 0 0 0-.403-.198c-.805.597-1.951.4-2.506-.441L.33 6.28a1.75 1.75 0 0 1 .324-2.293zm2.011 1.08c.094.202.221.417.388.624.405.502.98.876 1.754.876.675 0 1.257-.362 1.7-.887a3.3 3.3 0 0 0 .408-.613zm5.703.437c-.174.395-.42.791-.714 1.141-.625.744-1.593 1.422-2.847 1.422-1.327 0-2.301-.665-2.921-1.433a4.5 4.5 0 0 1-.674-1.15L1.628 5.128a.25.25 0 0 0-.047.328L2.31 6.56a.25.25 0 0 0 .36.062c1.149-.851 2.796-.042 2.796 1.403V13.5c0 .138.112.25.25.25h4.755a.25.25 0 0 0 .25-.25V7.985c0-1.421 1.618-2.236 2.76-1.39a.23.23 0 0 0 .335-.071l.607-1.067a.25.25 0 0 0-.05-.308z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Ordini</p>
                <p className="stat-value">0</p>
                <p className="stat-change">Nessun ordine ancora</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fillRule="evenodd" d="M7.297.738a.76.76 0 0 1 1.406 0l1.833 4.473 4.751.387a.76.76 0 0 1 .437 1.331l-3.628 3.155 1.11 4.72a.76.76 0 0 1-1.141.82L8 13.105l-4.065 2.52a.76.76 0 0 1-1.14-.82l1.109-4.72L.276 6.93a.76.76 0 0 1 .437-1.331l4.751-.387zM8 2.978 6.68 6.2a.76.76 0 0 1-.642.47l-3.452.28 2.64 2.295a.76.76 0 0 1 .24.748l-.802 3.415 2.936-1.82a.76.76 0 0 1 .8 0l2.936 1.82-.802-3.415a.76.76 0 0 1 .24-.748l2.64-2.294-3.452-.281a.76.76 0 0 1-.642-.47z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Membri</p>
                <p className="stat-value">0</p>
                <p className="stat-change">Inizia il tuo primo abbonamento</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#FEE2E2', color: '#DC2626' }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25zm11.23 4.007L10.146 9.89a1.75 1.75 0 0 1-2.328.575L5.782 9.318a.25.25 0 0 0-.336.088L4.29 11.292l-1.278-.784L4.168 8.62a1.75 1.75 0 0 1 2.35-.61l2.036 1.147a.25.25 0 0 0 .333-.082l2.833-4.383z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Visitatori</p>
                <p className="stat-value">0</p>
                <p className="stat-change">Ultimi 30 giorni</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-section">
            <h2 className="section-title">Azioni Rapide</h2>
            <div className="quick-actions-grid">
              <button className="action-card">
                <div className="action-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-.75 5.63V4.132h1.5V7.13h3.117v1.5H8.75v3.238h-1.5V8.629H4.133v-1.5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3 className="action-title">Crea Prodotto</h3>
                  <p className="action-description">Aggiungi un nuovo prodotto al tuo negozio</p>
                </div>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M.002 1.498A1.43 1.43 0 0 1 1.498.002l5.419.251c.356.017.693.166.945.418L15.58 8.39a1.43 1.43 0 0 1 0 2.024l-5.167 5.168a1.43 1.43 0 0 1-2.024 0L.67 7.862a1.43 1.43 0 0 1-.418-.945zm1.501.005.248 5.318 7.65 7.65 5.07-5.07-7.65-7.65zM4.87 4.136a.733.733 0 1 0 0 1.466.733.733 0 0 0 0-1.466m-2.233.733a2.233 2.233 0 1 1 4.466 0 2.233 2.233 0 0 1-4.466 0" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3 className="action-title">Nuova Promozione</h3>
                  <p className="action-description">Crea uno sconto o codice promozionale</p>
                </div>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25zm1.75-.25a.25.25 0 0 0-.25.25v3.567h13V1.75a.25.25 0 0 0-.25-.25zM14.5 6.817h-3.333V14.5h3.083a.25.25 0 0 0 .25-.25zM9.667 14.5V6.817H6.333V14.5zm-4.834 0V6.817H1.5v7.433c0 .138.112.25.25.25z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3 className="action-title">Personalizza Negozio</h3>
                  <p className="action-description">Modifica il design del tuo sito</p>
                </div>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M7.297.738a.76.76 0 0 1 1.406 0l1.833 4.473 4.751.387a.76.76 0 0 1 .437 1.331l-3.628 3.155 1.11 4.72a.76.76 0 0 1-1.141.82L8 13.105l-4.065 2.52a.76.76 0 0 1-1.14-.82l1.109-4.72L.276 6.93a.76.76 0 0 1 .437-1.331l4.751-.387zM8 2.978 6.68 6.2a.76.76 0 0 1-.642.47l-3.452.28 2.64 2.295a.76.76 0 0 1 .24.748l-.802 3.415 2.936-1.82a.76.76 0 0 1 .8 0l2.936 1.82-.802-3.415a.76.76 0 0 1 .24-.748l2.64-2.294-3.452-.281a.76.76 0 0 1-.642-.47z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3 className="action-title">Piano Abbonamenti</h3>
                  <p className="action-description">Configura abbonamenti mensili</p>
                </div>
              </button>
            </div>
          </div>

          {/* Getting Started */}
          <div className="getting-started-section">
            <h2 className="section-title">Primi Passi</h2>
            <div className="checklist-card">
              <div className="checklist-item">
                <input type="checkbox" id="step1" />
                <label htmlFor="step1">
                  <span className="checklist-text">Aggiungi il tuo primo prodotto</span>
                </label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="step2" />
                <label htmlFor="step2">
                  <span className="checklist-text">Personalizza il design del tuo negozio</span>
                </label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="step3" />
                <label htmlFor="step3">
                  <span className="checklist-text">Configura metodi di pagamento</span>
                </label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="step4" />
                <label htmlFor="step4">
                  <span className="checklist-text">Collega i tuoi account social</span>
                </label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="step5" />
                <label htmlFor="step5">
                  <span className="checklist-text">Pubblica il tuo negozio</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
