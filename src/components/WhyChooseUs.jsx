import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Qualità resa facile',
      description: 'Scegli tra centinaia di prodotti di alta qualità che puoi progettare e iniziare a vendere immediatamente. Che tu voglia vendere print-on-demand (POD) o fare un drop in edizione limitata, Opera ti copre con la migliore qualità di stampa. Imposta i tuoi prezzi e scegli i tuoi margini.',
      link: '#',
      alignment: 'right'
    },
    {
      id: 2,
      title: 'Constructor di negozio personalizzato',
      description: 'È la tua community — il tuo brand dovrebbe essere in primo piano. Opera ti dà il controllo completo del tuo negozio online con un constructor di siti web personalizzato senza codice. Metti in evidenza i tuoi social, mostra i video recenti e lancia un bellissimo negozio unico come te.',
      link: '#',
      alignment: 'left'
    },
    {
      id: 3,
      title: 'Integrazioni e-commerce',
      description: 'Opera supporta nativamente YouTube Product Shelf, Twitch Gifting, Instagram checkout e molte altre integrazioni per aiutarti a lanciare la tua esperienza di shopping perfetta.',
      link: '#',
      alignment: 'right'
    },
    {
      id: 4,
      title: 'YouTube Product Shelf',
      description: 'Rendiamo facile configurare YouTube Product Shelf per mostrare i tuoi prodotti preferiti dal tuo negozio Opera nei tuoi video o sotto di essi.',
      link: '#',
      alignment: 'left'
    },
    {
      id: 5,
      title: 'Noi gestiamo la parte difficile',
      description: 'Dalla gestione del supporto clienti all\'aiutarti a tracciare un percorso per raggiungere i tuoi obiettivi, Opera è il tuo partner in ogni fase del percorso.',
      link: '#',
      alignment: 'right'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Perché i creator scelgono Opera</h2>

        <div className="features-list">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-item feature-${feature.alignment}`}
            >
              <div className="feature-image-container">
                {/* Placeholder per immagine */}
                <div className="feature-image-placeholder"></div>
              </div>
              <div className="feature-text-container">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href={feature.link} className="feature-link">
                  Scopri di più →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
