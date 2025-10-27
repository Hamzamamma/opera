import './CustomProducts.css';
import heroImage from '../assets/images/custom-products-hero.webp';
import whyQuality from '../assets/images/why-quality.webp';
import whyBrandControl from '../assets/images/why-brand-control.webp';
import whyShipping from '../assets/images/why-shipping.webp';
import whyUseCases from '../assets/images/why-use-cases.avif';

const CustomProducts = () => {
  return (
    <>
      <section className="custom-hero">
        <div className="custom-hero-container">
          {/* Left: Content */}
          <div className="custom-hero-content">
            <h1 className="custom-hero-title">Prodotti Brandizzati Personalizzati per la Tua Azienda</h1>

            <p className="custom-hero-description">
              Crea merchandising aziendale premium senza problemi — per il tuo team, i tuoi clienti o i tuoi più grandi fan.
            </p>

            <div className="custom-hero-cta">
              <a href="#" className="custom-btn custom-btn-primary-lg">
                Inizia Ora
              </a>
            </div>

            <p className="custom-hero-note">
              Qualità premium. Spedizione veloce. Nessun minimo.
            </p>
          </div>

          {/* Right: Visual */}
          <div className="custom-hero-visual">
            <img src={heroImage} alt="Prodotti brandizzati" className="custom-hero-image" />
          </div>
        </div>
      </section>

      {/* Why Businesses Section */}
      <section className="why-businesses">
        <div className="why-container">
          <div className="why-header">
            <h1 className="why-title">Perché le Aziende Usano Fourthwall</h1>
            <p className="why-subtitle">Fidato da team in rapida crescita presso startup, agenzie e altro</p>
          </div>

          <div className="why-grid">
            {/* Card 1: Set up in minutes */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyQuality} alt="Configurazione in minuti" className="why-card-image" />
              </div>
              <h3 className="why-card-title">Configurazione in minuti</h3>
              <p className="why-card-desc">
                Usa il nostro builder senza codice per creare una vetrina brandizzata e prodotti che riflettono la tua azienda.
              </p>
            </article>

            {/* Card 2: Sell or send with one link */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyBrandControl} alt="Vendi o invia con un link" className="why-card-image" />
              </div>
              <h3 className="why-card-title">Vendi o invia con un link</h3>
              <p className="why-card-desc">
                Spedisci gadget aziendali direttamente ai dipendenti o rendi pubblico il tuo negozio per clienti, fan e partner.
              </p>
            </article>

            {/* Card 3: No inventory required */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyShipping} alt="Nessun inventario richiesto" className="why-card-image" />
              </div>
              <h3 className="why-card-title">Nessun inventario richiesto</h3>
              <p className="why-card-desc">
                Che si tratti di stampa su richiesta o di una consegna personalizzata, ci occupiamo di produzione, stoccaggio, imballaggio e spedizione—così non devi farlo tu.
              </p>
            </article>

            {/* Card 4: For teams and customers */}
            <article className="why-card">
              <div className="why-icon-wrapper">
                <img src={whyUseCases} alt="Per team e clienti" className="why-card-image" />
              </div>
              <h3 className="why-card-title">Per team <span className="why-highlight">e</span> clienti</h3>
              <p className="why-card-desc">
                Perfetto per regali di onboarding, premi interni, merchandising per eventi, kit per influencer o qualsiasi altra cosa di cui potresti aver bisogno.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomProducts;
