import './MembershipSection.css';

const MembershipSection = () => {
  return (
    <section className="membership-section">
      <div className="membership-content">
        <div className="membership-text">
          <h2 className="membership-title">
            Offri abbonamenti<br />
            mensili
          </h2>
          <p className="membership-description">
            Offri vantaggi esclusivi, contenuti riservati, stream solo per abbonati,
            accesso VIP su Discord ai membri. Tutti gli strumenti integrati perfettamente
            ti permettono di tracciare, coinvolgere e premiare i tuoi sostenitori.
          </p>
          <div className="membership-buttons">
            <a href="#" className="btn btn-primary">Inizia ora</a>
            <a href="#" className="btn btn-secondary">Esplora strumenti abbonamenti</a>
          </div>
        </div>
        <div className="membership-preview">
          {/* Gaming membership preview mockup */}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
