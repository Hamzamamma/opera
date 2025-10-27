import { useState } from 'react';
import './FeaturesSection.css';
import globalMapImg from '../assets/images/global-map.avif';
import dashboardImg from '../assets/images/dashboard.webp';
import platformsImg from '../assets/images/platforms.webp';
import hoodieImg from '../assets/images/hoodie-design.webp';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('Orders');

  const platforms = [
    {
      name: 'Instagram Shop',
      desc: 'Vendi i tuoi prodotti direttamente ai tuoi fan su Instagram',
      icon: '📷',
      gradient: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)'
    },
    {
      name: 'StreamElements',
      desc: 'Mostra stream e acquisti tramite alert',
      icon: 'S',
      gradient: 'linear-gradient(135deg, #00C9FF, #92FE9D)',
      textColor: '#000'
    },
    {
      name: 'YouTube Product Shelf',
      desc: 'Promuovi prodotti dal tuo negozio sul tuo canale YouTube',
      icon: '▶',
      gradient: '#FF0000'
    },
    {
      name: 'Spotify',
      desc: 'Merch per artisti',
      icon: '🎵',
      gradient: '#1DB954'
    },
    {
      name: 'Twitch Product Gifting',
      desc: 'Consenti agli spettatori di regalare prodotti',
      icon: '📺',
      gradient: '#9146FF'
    },
    {
      name: 'X (Twitter)',
      desc: 'Link shop in bio',
      icon: '𝕏',
      gradient: '#1DA1F2'
    },
    {
      name: 'TikTok Shop',
      desc: 'Vendi prodotti dal tuo negozio direttamente ai tuoi fan su TikTok',
      icon: '♪',
      gradient: '#000',
      border: '2px solid #FF0050'
    },
    {
      name: 'Discord',
      desc: 'Drop esclusivi per membri',
      icon: '💬',
      gradient: '#5865F2'
    }
  ];

  const orders = [
    { name: 'Patricia Smith', product: 'Premium Bundle Pack', price: '$89.00', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { name: 'Michael Chen', product: 'Creator Edition Hoodie', price: '$64.50', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
    { name: 'Sarah Johnson', product: 'Limited Edition Tee', price: '$34.99', gradient: 'linear-gradient(135deg, #30cfd0, #330867)' }
  ];

  return (
    <section className="features-section">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title-main">Rendiamo l'ecommerce facile,</h2>
        <p className="section-subtitle-main">nessuna esperienza necessaria</p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {/* Feature 1: Easy Management Tools */}
        <div className="feature-card">
          <h3 className="feature-title">Strumenti di gestione semplici</h3>
          <p className="feature-description">
            Traccia i tuoi ordini, gestisci i prodotti e monitora le vendite in tempo reale con una
            dashboard intelligente e intuitiva che mantiene tutto chiaro, sia su desktop che su app.
          </p>

          <div className="dashboard-image-container">
            <img src={dashboardImg} alt="Dashboard Preview" className="dashboard-image" />
          </div>
        </div>

        {/* Feature 2: Global Manufacturing */}
        <div className="feature-card">
          <h3 className="feature-title">Produzione globale, consegna locale</h3>
          <p className="feature-description">
            La nostra rete di produzione mondiale garantisce che i tuoi prodotti siano realizzati e
            spediti da luoghi vicini ai tuoi clienti, riducendo significativamente i tempi e i costi di consegna.
          </p>

          <div className="world-map">
            <img src={globalMapImg} alt="Global Manufacturing Map" className="map-image" />
          </div>
        </div>

        {/* Feature 3: Design Tool */}
        <div className="feature-card">
          <h3 className="feature-title">Progetta il prodotto perfetto</h3>
          <p className="feature-description">
            Vai oltre la personalizzazione di base. Il nostro designer di prodotti ti aiuta a creare
            pezzi davvero unici con strumenti integrati, supporto di artisti professionisti e rendering iper-realistici.
          </p>

          <div className="hoodie-image-container">
            <img src={hoodieImg} alt="Product Design Tool" className="hoodie-image" />
          </div>
        </div>

        {/* Feature 4: Platform Integrations */}
        <div className="feature-card">
          <h3 className="feature-title">Vendi e coinvolgi su ogni piattaforma</h3>
          <p className="feature-description">
            Siamo integrati con YouTube, Instagram, TikTok, Twitch, Spotify e altre
            piattaforme per aiutarti a vendere prodotti, premiare i fan e far crescere il tuo brand
            ovunque crei contenuti.
          </p>

          <div className="platforms-image-container">
            <img src={platformsImg} alt="Platform Integrations" className="platforms-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
