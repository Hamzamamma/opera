import './Hero.css';

const Hero = () => {
  const shopRow1 = [
    { id: 1, class: 'shop-1' },
    { id: 2, class: 'shop-2' },
    { id: 3, class: 'shop-dark' },
    { id: 4, class: 'shop-3' },
    { id: 5, class: 'shop-4' },
    { id: 6, class: 'shop-light' },
    { id: 7, class: 'shop-5' },
  ];

  const shopRow2 = [
    { id: 1, class: 'shop-6' },
    { id: 2, class: 'shop-7' },
    { id: 3, class: 'shop-dark' },
    { id: 4, class: 'shop-8' },
    { id: 5, class: 'shop-1' },
    { id: 6, class: 'shop-light' },
    { id: 7, class: 'shop-2' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Prodotti e negozi che la tua community adorerà
        </h1>
        <p className="hero-description">
          Unisciti a oltre 200.000 creator che utilizzano Fourthwall per creare prodotti di alta qualità e negozi straordinari.
        </p>
        <a href="#" className="hero-button">
          Inizia ora
        </a>
        <p className="hero-subtext">
          Nessun costo mensile. Nessuna carta di credito richiesta.
        </p>
      </div>

      {/* Carousel negozi */}
      <div className="hero-carousel">
        {/* Prima riga - Scroll a sinistra */}
        <div className="scroll-container">
          <div className="scroll-track">
            {shopRow1.map((shop, index) => (
              <div key={`row1-${index}`} className={`shop-preview ${shop.class}`}></div>
            ))}
            {shopRow1.map((shop, index) => (
              <div key={`row1-dup-${index}`} className={`shop-preview ${shop.class}`}></div>
            ))}
          </div>
        </div>

        {/* Seconda riga - Scroll a destra */}
        <div className="scroll-container">
          <div className="scroll-track scroll-track-reverse">
            {shopRow2.map((shop, index) => (
              <div key={`row2-${index}`} className={`shop-preview ${shop.class}`}></div>
            ))}
            {shopRow2.map((shop, index) => (
              <div key={`row2-dup-${index}`} className={`shop-preview ${shop.class}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
