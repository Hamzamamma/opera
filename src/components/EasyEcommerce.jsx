import './EasyEcommerce.css';

const EasyEcommerce = () => {
  const features = [
    {
      id: 1,
      title: 'Strumenti di gestione semplici',
      description: 'Traccia i tuoi ordini, gestisci i prodotti e monitora le vendite in tempo reale con una dashboard intelligente e intuitiva che mantiene tutto chiaro, sia su desktop che su mobile.',
      imageType: 'dashboard'
    },
    {
      id: 2,
      title: 'Produzione globale, consegna locale',
      description: 'La nostra rete di produzione mondiale garantisce che i tuoi prodotti vengano realizzati e spediti da luoghi vicini ai tuoi clienti, riducendo significativamente i tempi e i costi di consegna.',
      imageType: 'map'
    },
    {
      id: 3,
      title: 'Progetta il prodotto perfetto',
      description: 'Vai oltre la personalizzazione di base. Il nostro product designer ti aiuta a creare pezzi veramente unici con strumenti integrati, supporto artistico professionale e rendering iper-realistici.',
      imageType: 'designer'
    },
    {
      id: 4,
      title: 'Vendi e coinvolgi su ogni piattaforma',
      description: 'Siamo integrati con YouTube, Instagram, TikTok, Twitch, Spotify e altre piattaforme per aiutarti a vendere prodotti, premiare i fan e far crescere il tuo brand ovunque tu crei.',
      imageType: 'platforms'
    }
  ];

  return (
    <section className="easy-ecommerce-section">
      <div className="easy-ecommerce-container">
        <h2 className="easy-ecommerce-title">
          Rendiamo l'ecommerce facile,<br />
          nessuna esperienza necessaria
        </h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className={`feature-image feature-image-${feature.imageType}`}>
                {/* Placeholder per immagine */}
              </div>
              <div className="feature-content">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyEcommerce;
