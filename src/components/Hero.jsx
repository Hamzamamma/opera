import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const carouselColumns = [
    {
      type: 'double',
      items: [
        { name: 'Santagato Studios', url: 'https://shop.santagatostudios.com/', image: '/images/hero/santagato-b.webp' },
        { name: 'Santagato Studios', url: 'https://shop.santagatostudios.com/', image: '/images/hero/santagato-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'NY Mag', url: 'https://shop.nymag.com/', image: '/images/hero/nymag-a.webp', showLabel: true }
      ]
    },
    {
      type: 'double',
      items: [
        { name: 'NY Mag', url: 'https://shop.nymag.com/', image: '/images/hero/nymag-b.webp' },
        { name: 'NY Mag', url: 'https://shop.nymag.com/', image: '/images/hero/nymag-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'MKBHD', url: 'https://mkbhd.com/', image: '/images/hero/mkbhd-a.webp', showLabel: true }
      ]
    },
    {
      type: 'double',
      items: [
        { name: 'MKBHD', url: 'https://mkbhd.com/', image: '/images/hero/mkbhd-b.webp' },
        { name: 'MKBHD', url: 'https://mkbhd.com/', image: '/images/hero/mkbhd-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'Harry Mack', url: 'https://shop.harrymackofficial.com/', image: '/images/hero/harry-a.webp', showLabel: true }
      ]
    },
    {
      type: 'double',
      items: [
        { name: 'Harry Mack', url: 'https://shop.harrymackofficial.com/', image: '/images/hero/harry-b.webp' },
        { name: 'Harry Mack', url: 'https://shop.harrymackofficial.com/', image: '/images/hero/harry-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'Mads Mitch', url: 'https://madsmitch.com/', image: '/images/hero/mads-a.webp', showLabel: true }
      ]
    },
    {
      type: 'double',
      items: [
        { name: 'Mads Mitch', url: 'https://madsmitch.com/', image: '/images/hero/mads-b.webp' },
        { name: 'Mads Mitch', url: 'https://madsmitch.com/', image: '/images/hero/mads-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'Phil DeFranco', url: 'https://beautifulbastard.com/', image: '/images/hero/phil-a.webp', showLabel: true }
      ]
    },
    {
      type: 'double',
      items: [
        { name: 'Phil DeFranco', url: 'https://beautifulbastard.com/', image: '/images/hero/phil-b.webp' },
        { name: 'Phil DeFranco', url: 'https://beautifulbastard.com/', image: '/images/hero/phil-c.webp' }
      ]
    },
    {
      type: 'single',
      items: [
        { name: 'Charlotte Dobre', url: 'https://shop.charlottedobre.net/', image: '/images/hero/charlotte-a.webp', showLabel: true }
      ]
    }
  ];

  useEffect(() => {
    const carousel = document.querySelector('.main-carousel-wrapper');
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      carousel.scrollLeft = scrollAmount;

      // Reset quando arriva alla fine
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="homepage-hero">
      <div className="hero-heading">
        <h1 className="heading-2xl">Prodotti e negozi che la tua community amerà</h1>
        <div className="hero-desc">
          Unisciti a oltre 200.000 creator che usano Fourthwall per creare prodotti di alta qualità e negozi straordinari.
        </div>
        <a href="#" className="hero-button-primary large">Inizia ora</a>
        <div className="hero-under-button">Nessun canone mensile. Non serve carta di credito.</div>
      </div>

      <div className="creator-carousel">
        <div className="main-carousel-wrapper">
          <div className="main-carousel">
            <div className="main-carousel-blur">
              <div className="main-carousel-pages">
                <div className="carousel-grid">
                  {carouselColumns.map((column, colIndex) => (
                    <div key={colIndex} className="main-carousel-column">
                      {column.type === 'double' ? (
                        <div className="_50-50-carousel">
                          <div className="carousel-item-upper">
                            <img
                              src={column.items[0].image}
                              alt={column.items[0].name}
                              className="main-carousel-item-image"
                              loading="lazy"
                            />
                            <a
                              href={column.items[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="carousel-item-link"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={column.items[1].image}
                              alt={column.items[1].name}
                              className="main-carousel-item-image"
                              loading="lazy"
                            />
                            <a
                              href={column.items[1].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="carousel-item-link"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="carousel-item">
                          <img
                            src={column.items[0].image}
                            alt={column.items[0].name}
                            className="main-carousel-item-image"
                            loading="lazy"
                          />
                          <a
                            href={column.items[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-item-link"
                          >
                            {column.items[0].showLabel && `${column.items[0].name} ↗`}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Duplicate for infinite scroll */}
                  {carouselColumns.map((column, colIndex) => (
                    <div key={`dup-${colIndex}`} className="main-carousel-column">
                      {column.type === 'double' ? (
                        <div className="_50-50-carousel">
                          <div className="carousel-item-upper">
                            <img
                              src={column.items[0].image}
                              alt={column.items[0].name}
                              className="main-carousel-item-image"
                              loading="lazy"
                            />
                            <a
                              href={column.items[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="carousel-item-link"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={column.items[1].image}
                              alt={column.items[1].name}
                              className="main-carousel-item-image"
                              loading="lazy"
                            />
                            <a
                              href={column.items[1].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="carousel-item-link"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="carousel-item">
                          <img
                            src={column.items[0].image}
                            alt={column.items[0].name}
                            className="main-carousel-item-image"
                            loading="lazy"
                          />
                          <a
                            href={column.items[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-item-link"
                          >
                            {column.items[0].showLabel && `${column.items[0].name} ↗`}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
