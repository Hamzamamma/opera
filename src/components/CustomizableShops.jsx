import { useEffect } from 'react';
import './CustomizableShops.css';

const CustomizableShops = () => {
  useEffect(() => {
    // Initialize gallery items with click handlers and 3D tilt effects
    const initGalleryItems = () => {
      const items = document.querySelectorAll('.gallery-item');

      items.forEach(item => {
        // Click handler - Open store in new tab
        const handleClick = () => {
          const storeUrl = item.getAttribute('data-store-url');
          const creatorName = item.getAttribute('data-creator');

          if (storeUrl) {
            console.log(`🛍️ Opening store for: ${creatorName || 'Creator'}`);
            console.log(`🔗 URL: ${storeUrl}`);

            window.open(storeUrl, '_blank', 'noopener,noreferrer');

            if (typeof gtag !== 'undefined') {
              gtag('event', 'store_click', {
                'creator_name': creatorName,
                'store_url': storeUrl
              });
            }
          }
        };

        // 3D tilt effect on hover
        const handleMouseMove = (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          item.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
          `;
        };

        const handleMouseLeave = () => {
          item.style.transform = '';
        };

        item.addEventListener('click', handleClick);
        item.addEventListener('mousemove', handleMouseMove);
        item.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          item.removeEventListener('click', handleClick);
          item.removeEventListener('mousemove', handleMouseMove);
          item.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    };

    // Vary animation speed per row
    const rows = document.querySelectorAll('.gallery-row');
    rows.forEach((row, index) => {
      const tracks = row.querySelectorAll('.gallery-track');
      const baseSpeed = 80;
      const speed = baseSpeed + (index * 10);
      tracks.forEach(track => {
        track.style.animationDuration = `${speed}s`;
      });
    });

    initGalleryItems();
  }, []);

  const stores = {
    row1: [
      {
        name: 'Will Neff',
        url: 'https://neffsauce.com/en-eur',
        image: '/images/shops/65eafb12612ddc6cd5b3f5c1_willneff.webp',
        alt: 'Will Neff - Neff Sauce Store'
      },
      {
        name: 'Makayla',
        url: 'https://shopthelastresort.com/en-eur',
        image: '/images/shops/65eaf04f95f2a5768d36130c_warislame.webp',
        alt: 'Makayla - The Last Resort Shop'
      },
      {
        name: 'CleanBois',
        url: 'https://cleanbois.com/',
        image: '/images/shops/65eb22d251469d9a787f236b_cleanbois.webp',
        alt: 'CleanBois Store'
      },
      {
        name: 'TenToesDown',
        url: 'https://tentoesdown.com/en-eur',
        image: '/images/shops/65eaf04f94118d61f57be63d_tentoesdown.webp',
        alt: 'TenToesDown Store'
      },
      {
        name: 'OnlyFins',
        url: 'https://onlyfins.com/',
        image: '/images/shops/65eaf04db996a3f3d127b59b_onlyfins.webp',
        alt: 'OnlyFins Store'
      },
      {
        name: 'Armchair History',
        url: 'https://armchairhistory.com/en-eur',
        image: '/images/shops/65e8c1afa94e9b4eb85be059_armchair.webp',
        alt: 'Armchair History Store'
      },
      {
        name: 'Charlotte Dobre',
        url: 'https://charlottedobre.com/',
        image: '/images/shops/6674544c74d4647b1214bce0_charlotte dobre.webp',
        alt: 'Charlotte Dobre Store'
      }
    ],
    row2: [
      {
        name: 'NY Shop',
        url: 'https://nyshop.fourthwall.com/en-eur',
        image: '/images/shops/65eaf18d98756154df4af2c9_nyshop.webp',
        alt: 'NY Shop'
      },
      {
        name: 'Big Think',
        url: 'https://bigthink.com/en-eur',
        image: '/images/shops/65e8c24e435d377ea8bc4453_bigthink.webp',
        alt: 'Big Think Store'
      },
      {
        name: 'Sour Boys',
        url: 'https://sourboysofficial.com/',
        image: '/images/shops/65eb1fbb87e2eeb123487cf8_sourboys.webp',
        alt: 'Sour Boys Store'
      },
      {
        name: 'ICMAP',
        url: 'https://icmap.com/',
        image: '/images/shops/65e8c1f9fddc8c81df5df799_icmap.webp',
        alt: 'I Could Murder A Podcast Store'
      },
      {
        name: 'Sunny Sixteen',
        url: 'https://sunnysixteen.com/',
        image: '/images/shops/65eaeb82dfecbb91a0f332fa_sunnysxiteen.webp',
        alt: 'Sunny Sixteen Store'
      },
      {
        name: 'Face Over Matter',
        url: 'https://faceovermatter.com/',
        image: '/images/shops/65eaf04d1b2f6b0794256cf9_faceovermatter.webp',
        alt: 'Face Over Matter Store'
      },
      {
        name: 'Ben & Emil',
        url: 'https://benandemilshow.com/en-eur',
        image: '/images/shops/65e8c26feded3ce8ae5c3788_ben&emil.webp',
        alt: 'Ben & Emil Show Store'
      }
    ]
  };

  return (
    <section className="customizable-shops-section">
      <div className="container">
        <div className="templates-header">
          <h2 className="templates-title">
            Negozi completamente personalizzabili,<br />
            100% tuoi
          </h2>
          <p className="templates-subtitle">
            Personalizza facilmente il tuo design, layout e dominio per creare un brand unico come te.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Gallery */}
      <div className="gallery-carousel">
        {/* Row 1 (scrolls right →) */}
        <div className="gallery-row gallery-row--right">
          <div className="gallery-track">
            {stores.row1.map((store, index) => (
              <div
                key={`row1-${index}`}
                className="gallery-item gallery-item--large"
                data-store-url={store.url}
                data-creator={store.name}
              >
                <img src={store.image} alt={store.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Duplicate for infinite scroll */}
          <div className="gallery-track" aria-hidden="true">
            {stores.row1.map((store, index) => (
              <div
                key={`row1-dup-${index}`}
                className="gallery-item gallery-item--large"
                data-store-url={store.url}
                data-creator={store.name}
              >
                <img src={store.image} alt={store.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (scrolls left ←) */}
        <div className="gallery-row gallery-row--left">
          <div className="gallery-track">
            {stores.row2.map((store, index) => (
              <div
                key={`row2-${index}`}
                className="gallery-item gallery-item--large"
                data-store-url={store.url}
                data-creator={store.name}
              >
                <img src={store.image} alt={store.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Duplicate for infinite scroll */}
          <div className="gallery-track" aria-hidden="true">
            {stores.row2.map((store, index) => (
              <div
                key={`row2-dup-${index}`}
                className="gallery-item gallery-item--large"
                data-store-url={store.url}
                data-creator={store.name}
              >
                <img src={store.image} alt={store.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableShops;
