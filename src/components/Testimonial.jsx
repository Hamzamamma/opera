import { useState } from 'react';
import './Testimonial.css';
import mkbhdShop from '../assets/images/mkbhd-shop.webp';
import mkbhdProfile from '../assets/images/mkbhd-profile.webp';
import kalshiShop from '../assets/images/kalshi-shop.webp';
import kalshiLogo from '../assets/images/kalshi-logo.webp';
import philShop from '../assets/images/phil-shop.webp';
import philProfile from '../assets/images/phil-profile.webp';
import icmapShop from '../assets/images/icmap-shop.webp';
import icmapProfile from '../assets/images/icmap-profile.webp';
import harryShop from '../assets/images/harry-shop.webp';
import harryProfile from '../assets/images/harry-profile.webp';
import charlotteShop from '../assets/images/charlotte-shop.webp';
import charlotteProfile from '../assets/images/charlotte-profile.webp';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Lavorare con Fourthwall è un'esperienza fantastica. Gestiscono logistica, produzione e, cosa più importante, la qualità del servizio clienti. Posso concentrarmi su ciò che conta: lo consiglierei a tutti i creator.",
      author: "MKBHD",
      link: "mkbhd.com",
      storeUrl: "https://mkbhd.com",
      shopImage: mkbhdShop,
      overlayImage: mkbhdProfile
    },
    {
      quote: "Grazie per aver reso così facile il lancio di un negozio. Non riesco a sottolineare abbastanza quanto fenomenale sia stato questo processo, o quanto tempo Fourthwall ci ha fatto risparmiare. Sono un grande fan.",
      author: "Shannon Magiera",
      role: "Head of VIP and Onboarding Operations",
      link: "shop.kalshi.com",
      storeUrl: "https://shop.kalshi.com",
      shopImage: kalshiShop,
      overlayImage: kalshiLogo
    },
    {
      quote: "Fourthwall mi ha stupito. Non solo stavo vendendo di più, ma i miei fan erano molto più felici. Era un prodotto di qualità superiore su un sito dall'aspetto migliore e molto più facile da gestire. Non vedo l'ora di lanciare le mie membership.",
      author: "Phil DeFranco",
      link: "beautifulbastard.com",
      storeUrl: "https://beautifulbastard.com",
      shopImage: philShop,
      overlayImage: philProfile
    },
    {
      quote: "Su Patreon, avevamo funzionalità che ci hanno permesso di crescere, ma Fourthwall le ha ampliate. Siamo stati molto felici di fare il salto. Ora abbiamo un sito semplice e facile da usare che ci permette di connetterci direttamente con i membri.",
      author: "I Could Murder A Podcast",
      link: "icmap.co.uk",
      storeUrl: "https://icmap.co.uk",
      shopImage: icmapShop,
      overlayImage: icmapProfile
    },
    {
      quote: "Sono rimasto sbalordito dalla reazione dei miei fan al mio nuovo sito e negozio. È stato un cambiamento radicale. Il reddito aggiuntivo mi ha anche permesso di espandere il mio team e produrre contenuti migliori per i miei fan.",
      author: "Harry Mack",
      link: "shop.harrymackofficial.com",
      storeUrl: "https://shop.harrymackofficial.com",
      shopImage: harryShop,
      overlayImage: harryProfile
    },
    {
      quote: "Lavoro con Fourthwall da anni e sono sempre stati molto disponibili e divertenti con cui collaborare. Adoro anche la loro app! Mi permette di inviare video di ringraziamento a tutti coloro che acquistano il mio merchandising.",
      author: "Charlotte Dobre",
      link: "shop.charlottedobre.net",
      storeUrl: "https://shop.charlottedobre.net",
      shopImage: charlotteShop,
      overlayImage: charlotteProfile
    }
  ];

  const currentTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-shop">
          <div className="shop-preview">
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="shop-link">
              <img src={currentTestimonial.shopImage} alt={`${currentTestimonial.author} Shop`} className="shop-screenshot" />
            </a>
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="profile-link">
              <img src={currentTestimonial.overlayImage} alt={currentTestimonial.author} className="profile-overlay" />
            </a>
          </div>
        </div>

        <div className="testimonial-content">
          <p className="quote-text">
            "{currentTestimonial.quote}"
          </p>

          <div className="quote-author">
            <div className="author-name">{currentTestimonial.author}</div>
            {currentTestimonial.role && (
              <div className="author-role">{currentTestimonial.role}</div>
            )}
            <a href={currentTestimonial.storeUrl} target="_blank" rel="noopener noreferrer" className="author-link">
              {currentTestimonial.link} →
            </a>
          </div>

          <div className="nav-arrows">
            <button className="arrow-btn" onClick={handlePrev}>
              <span>←</span>
            </button>
            <button className="arrow-btn" onClick={handleNext}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
