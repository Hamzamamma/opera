import './YouTubeSteps.css';
import shopImage from '../assets/images/youtube-product-shelf.webp';
import connectImage from '../assets/images/youtube-connect.webp';
import promoteImage from '../assets/images/youtube-promote.webp';

const YouTubeSteps = () => {
  return (
    <section className="youtube-steps-section">
      <div className="youtube-container">
        <h1 className="youtube-title">Vendi su YouTube in tre semplici passaggi</h1>

        <div className="youtube-grid">
          {/* Card 1: Crea il tuo negozio */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={shopImage} alt="Crea il tuo negozio" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">1. CREA IL TUO NEGOZIO</h2>
              <p className="youtube-card-desc">
                Fourthwall ti permette di creare un negozio senza bisogno di codice. Usa gli strumenti drag-and-drop per costruire un sito unico. Trova il prodotto perfetto per i tuoi fan e carica il tuo design.
              </p>
              <a href="#" className="youtube-card-link">Inizia ora →</a>
            </div>
          </article>

          {/* Card 2: Collega gli account */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={connectImage} alt="Collega gli account" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">2. COLLEGA GLI ACCOUNT</h2>
              <p className="youtube-card-desc">
                Collega il tuo negozio Fourthwall al tuo account YouTube. Puoi farlo navigando nella tua dashboard e trovando YouTube sotto "App". Segui la nostra guida per le istruzioni complete.
              </p>
              <a href="#" className="youtube-card-link">Connetti →</a>
            </div>
          </article>

          {/* Card 3: Promuovi il tuo negozio */}
          <article className="youtube-card">
            <div className="youtube-card-visual">
              <img src={promoteImage} alt="Promuovi il tuo negozio" className="card-main-image" />
            </div>
            <div className="youtube-card-content">
              <h2 className="youtube-card-title">3. PROMUOVI IL TUO NEGOZIO</h2>
              <p className="youtube-card-desc">
                Infine, promuovi il tuo nuovo negozio e i prodotti personalizzati sui tuoi social media. Annuncia il tuo sito nei tuoi video e fai sapere alle persone che possono fare acquisti mentre guardano i tuoi contenuti.
              </p>
              <a href="#" className="youtube-card-link">Scopri di più →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSteps;
