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
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/65eafb12612ddc6cd5b3f5c1_willneff.webp',
        alt: 'Will Neff - Neff Sauce Store'
      },
      {
        name: 'Makayla',
        url: 'https://shopthelastresort.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/67154862e2dc3db4e6c04deb_makayla.webp',
        alt: 'Makayla - The Last Resort Shop'
      },
      {
        name: 'CleanBois',
        url: 'https://cleanbois.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/6711d51a5d45d0c8ca64eb7a_cleanbois.webp',
        alt: 'CleanBois Store'
      },
      {
        name: 'TenToesDown',
        url: 'https://tentoesdown.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/66fe55754e0385fa73eb0f13_tentoesdown.webp',
        alt: 'TenToesDown Store'
      },
      {
        name: 'OnlyFins',
        url: 'https://onlyfins.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/6711e0fb1b7cb6c30a6d6f49_onlyfins.webp',
        alt: 'OnlyFins Store'
      },
      {
        name: 'Armchair History',
        url: 'https://armchairhistory.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/6711eaf98a8fed1b1c1fe6a6_armchairhistory.webp',
        alt: 'Armchair History Store'
      },
      {
        name: 'Charlotte Dobre',
        url: 'https://charlottedobre.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/6711ee2afecb82fe8e61cf68_charlottedobre.webp',
        alt: 'Charlotte Dobre Store'
      }
    ],
    row2: [
      {
        name: 'NY Shop',
        url: 'https://nyshop.fourthwall.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f6a22b19ab6f16df04f09_nyshop.webp',
        alt: 'NY Shop'
      },
      {
        name: 'Big Think',
        url: 'https://bigthink.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f6e4c4bdb0063b8a83f91_bigthink.webp',
        alt: 'Big Think Store'
      },
      {
        name: 'Sour Boys',
        url: 'https://sourboysofficial.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f711c2ff5bfa31fc82c3b_sourboys.webp',
        alt: 'Sour Boys Store'
      },
      {
        name: 'ICMAP',
        url: 'https://icmap.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f75a22ff5bfa31fc8c82a_icmap.webp',
        alt: 'I Could Murder A Podcast Store'
      },
      {
        name: 'Sunny Sixteen',
        url: 'https://sunnysixteen.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f796e14c2c76ad4a99406_sunnysixteen.webp',
        alt: 'Sunny Sixteen Store'
      },
      {
        name: 'Face Over Matter',
        url: 'https://faceovermatter.com/',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/670f7b42c83f6fd52e0cc9f1_faceovermatter.webp',
        alt: 'Face Over Matter Store'
      },
      {
        name: 'Ben & Emil',
        url: 'https://benandemilshow.com/en-eur',
        image: 'https://fourthwall.com/webflow-cdn/63ff7c6ecc83f97ec5fe9155/6714c4a03feb0b09feb79a63_ben%26emil.webp',
        alt: 'Ben & Emil Show Store'
      }
    ]
  };

  return (
    <section className="customizable-shops-section">
      <div className="container">
        <div className="templates-header">
          <h2 className="templates-title">
            Fully-customizable shops,<br />
            100% owned by you
          </h2>
          <p className="templates-subtitle">
            Easily customize your design, layout, and domain to create a brand that's as unique as you are.
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
