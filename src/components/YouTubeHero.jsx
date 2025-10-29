import './YouTubeHero.css';

const YouTubeHero = () => {
  const testimonials = [
    {
      name: 'DJENTBEARD',
      handle: '@djentbeard',
      avatar: '/images/youtube-testimonials/djentbeard.webp',
      quote: '@FourthwallHQ sono i migliori del settore'
    },
    {
      name: 'Philip DeFranco',
      handle: '@PhillyD',
      avatar: '/images/youtube-testimonials/phillyd.webp',
      quote: 'Solo il mio parere molto parziale, MA se usi Spring e/o hai generalmente bisogno di abbigliamento, merchandise e/o servizi di membership dovresti usare Fourthwall.com Hanno soluzioni per creator piccoli e grandi.'
    },
    {
      name: 'Patrick Stirling',
      handle: '@PatrickStirling',
      avatar: '/images/youtube-testimonials/patrick.webp',
      quote: 'Per tutte le cose che @FourthwallHQ fa in background per rendermi le cose più facili, funzionalità rivolte al pubblico come queste hanno probabilmente un impatto molto maggiore di quanto realizzi. È fantastico poter ringraziare direttamente chi mi supporta.'
    },
    {
      name: 'Muaaz',
      handle: '@mws',
      avatar: '/images/youtube-testimonials/muaaz.webp',
      quote: 'Non posso raccomandare @FourthwallHQ abbastanza, provateli assolutamente - vi daranno ragione'
    },
    {
      name: 'Nightowl',
      handle: '@ajsarsfield',
      avatar: '/images/youtube-testimonials/nightowl.webp',
      quote: '@FourthwallHQ è una grande raccomandazione.. soprattutto se fai anche live streaming, la qualità è ottima, molte opzioni di merchandise'
    },
    {
      name: 'CodyRiffs',
      handle: '@codyriffs',
      avatar: '/images/youtube-testimonials/codyriffs.webp',
      quote: 'Ho appena ricevuto un paio di felpe dalla mia Winter Collection e sono così COMODE! Un grande ringraziamento a @FourthwallHQ per fornire articoli di qualità straordinaria ai creator 😊'
    },
    {
      name: 'YuuriVoice',
      handle: '@YuuriVoice',
      avatar: '/images/youtube-testimonials/yuuri.webp',
      quote: 'Ho visto cosa sta preparando Fourthwall e posso confermare che per chiunque voglia costruire una piattaforma di membership e merchandise, hanno tutti gli strumenti giusti, le funzionalità e la visione per avere successo. Le loro funzionalità superano Patreon.'
    },
    {
      name: 'Nythical',
      handle: '@Nythical_',
      avatar: '/images/youtube-testimonials/nythical.webp',
      quote: 'Amo fourthwall! Lo consiglierei a qualsiasi creator, è di gran lunga l\'opzione migliore là fuori'
    },
    {
      name: 'ArielJade',
      handle: '@ArielJadeLive',
      avatar: '/images/youtube-testimonials/arieljade.webp',
      quote: 'RAGAZZI. @FourthwallHQ è letteralmente il MIGLIOR negozio di merchandise che ho trovato come imprenditore creativo. Sto progettando come un matto. Nuovo merchandise Crew disponibile ora!'
    },
    {
      name: 'Aura',
      handle: '@aurahack',
      avatar: '/images/youtube-testimonials/aura.webp',
      quote: 'C\'è molta più varietà che posso fare ora rispetto a solo t-shirt e canotta grazie alle cose offerte da @FourthwallHQ *e* i miei personaggi OC diventano i modelli dall\'inizio quindi sono davvero emozionato!! HO UN MARCHIO DI MODA ORA :DDD'
    },
    {
      name: 'Moni',
      handle: '@monistreams',
      avatar: '/images/youtube-testimonials/moni.webp',
      quote: 'Grazie a @FourthwallHQ per averlo reso così facile! Il servizio clienti è fantastico e la qualità del prodotto è eccellente'
    }
  ];

  return (
    <section className="youtube-hero-section">
      <div className="youtube-hero-container">
        {/* Left: Content */}
        <div className="youtube-hero-content">
          <h1 className="youtube-hero-title">Lancia il tuo negozio YouTube</h1>
          <p className="youtube-hero-description">
            Crea una vetrina personalizzata per vendere merchandise, prodotti digitali e altro ancora al tuo pubblico.
          </p>
          <a href="#" className="youtube-hero-btn">Inizia ora</a>
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="youtube-testimonials-slider">
          <div className="youtube-slider-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-${index}`} className="youtube-testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-user">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect width="48" height="48" fill="%23ddd"/%3E%3C/svg%3E';
                      }}
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-handle">{testimonial.handle}</div>
                    </div>
                  </div>
                  <div className="twitter-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4.52604C19.2746 4.84115 18.6633 4.85156 18.0155 4.53993C18.8514 4.05208 18.8897 3.7092 19.1918 2.78733C18.4094 3.23958 17.5423 3.56858 16.62 3.74566C15.8822 2.98003 14.8298 2.5 13.6651 2.5C11.4284 2.5 9.61593 4.26736 9.61593 6.44444C9.61593 6.75347 9.65158 7.05469 9.72019 7.34375C6.35537 7.17969 3.37106 5.60938 1.37409 3.22222C1.02566 3.80469 0.826056 4.48264 0.826056 5.20573C0.826056 6.57465 1.54161 7.78125 2.62698 8.48872C1.96311 8.46788 1.33933 8.2908 0.793976 7.99566C0.793085 8.01215 0.793085 8.02778 0.793085 8.04514C0.793085 9.9566 2.18856 11.5503 4.04206 11.9132C3.44858 12.0703 2.82303 12.0946 2.21262 11.9818C2.72857 13.5477 4.22385 14.6884 5.99537 14.7205C4.26216 16.0434 2.11371 16.5946 0 16.3533C1.79291 17.4722 3.91998 18.125 6.20745 18.125C13.6553 18.125 17.7277 12.1146 17.7277 6.90191C17.7277 6.73003 17.725 6.56076 17.717 6.39149C18.5074 5.83594 19.4573 5.31771 20 4.52604Z" fill="#FDFCFB"/>
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-dup-${index}`} className="youtube-testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-user">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect width="48" height="48" fill="%23ddd"/%3E%3C/svg%3E';
                      }}
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-handle">{testimonial.handle}</div>
                    </div>
                  </div>
                  <div className="twitter-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4.52604C19.2746 4.84115 18.6633 4.85156 18.0155 4.53993C18.8514 4.05208 18.8897 3.7092 19.1918 2.78733C18.4094 3.23958 17.5423 3.56858 16.62 3.74566C15.8822 2.98003 14.8298 2.5 13.6651 2.5C11.4284 2.5 9.61593 4.26736 9.61593 6.44444C9.61593 6.75347 9.65158 7.05469 9.72019 7.34375C6.35537 7.17969 3.37106 5.60938 1.37409 3.22222C1.02566 3.80469 0.826056 4.48264 0.826056 5.20573C0.826056 6.57465 1.54161 7.78125 2.62698 8.48872C1.96311 8.46788 1.33933 8.2908 0.793976 7.99566C0.793085 8.01215 0.793085 8.02778 0.793085 8.04514C0.793085 9.9566 2.18856 11.5503 4.04206 11.9132C3.44858 12.0703 2.82303 12.0946 2.21262 11.9818C2.72857 13.5477 4.22385 14.6884 5.99537 14.7205C4.26216 16.0434 2.11371 16.5946 0 16.3533C1.79291 17.4722 3.91998 18.125 6.20745 18.125C13.6553 18.125 17.7277 12.1146 17.7277 6.90191C17.7277 6.73003 17.725 6.56076 17.717 6.39149C18.5074 5.83594 19.4573 5.31771 20 4.52604Z" fill="#FDFCFB"/>
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeHero;
