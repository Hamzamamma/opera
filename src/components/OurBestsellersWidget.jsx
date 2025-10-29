import { useState } from 'react';
import { useRef } from 'react';
import './OurBestsellersWidget.css';

const OurBestsellersWidget = () => {
  const scrollContainerRef = useRef(null);
  const [favorites, setFavorites] = useState({});

  const bestsellers = [
    {
      id: 1,
      name: 'T-Shirt Unisex Softstyle',
      brand: 'By Gildan · 64000',
      image: 'https://images.printify.com/mockup/64f4f3e1c4e5e5.11405302/5000/64000.jpg',
      price: 'Da USD 8.47',
      premiumPrice: 'Da USD 6.00 con Printify Premium',
      sizes: '9 taglie',
      colors: '66 colori',
      providers: '21 fornitori di stampa',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Felpa Unisex Garment-Dyed',
      brand: 'By Comfort Colors® · 1566',
      image: 'https://images.printify.com/mockup/64f4f3e1c4e5e5.11405302/5000/1566.jpg',
      price: 'Da USD 30.64',
      premiumPrice: 'Da USD 23.34 con Printify Premium',
      sizes: '6 taglie',
      colors: '20 colori',
      providers: '4 fornitori di stampa',
      badge: 'Bestseller'
    },
    {
      id: 3,
      name: 'T-Shirt Unisex Heavy Cotton',
      brand: 'By Gildan · 5000',
      image: 'https://images.printify.com/mockup/64f4f3e1c4e5e5.11405302/5000/5000.jpg',
      price: 'Da USD 8.77',
      premiumPrice: 'Da USD 5.90 con Printify Premium',
      sizes: '8 taglie',
      colors: '70 colori',
      providers: '23 fornitori di stampa',
      badge: 'Bestseller'
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bestsellers-widget">
      <div className="bestsellers-header">
        <h3 className="bestsellers-title">I nostri Bestseller</h3>
        <a href="#" className="see-more-link">
          Vedi di più
          <span className="material-icons-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="bestsellers-carousel-container">
        <button
          className="bestsellers-nav left"
          onClick={() => scroll('left')}
          aria-label="Scorri a sinistra"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>

        <div className="bestsellers-carousel" ref={scrollContainerRef}>
          {bestsellers.map(product => (
            <div key={product.id} className="bestseller-card">
              <div className="bestseller-image-wrap">
                <div className="bestseller-image">
                  <div className="product-mockup">
                    <span className="material-icons-outlined">checkroom</span>
                  </div>
                </div>

                <button
                  className={`favorite-btn ${favorites[product.id] ? 'active' : ''}`}
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="Aggiungi ai preferiti"
                >
                  <span className="material-icons-outlined">
                    {favorites[product.id] ? 'favorite' : 'favorite_border'}
                  </span>
                </button>

                {product.badge && (
                  <div className="bestseller-badge">{product.badge}</div>
                )}
              </div>

              <div className="bestseller-info">
                <h4 className="bestseller-name">{product.name}</h4>
                <p className="bestseller-brand">{product.brand}</p>

                <div className="bestseller-pricing">
                  <p className="bestseller-price">{product.price}</p>
                  <p className="bestseller-premium-price">{product.premiumPrice}</p>
                </div>

                <div className="bestseller-details">
                  <span>{product.sizes}</span>
                  <span>·</span>
                  <span>{product.colors}</span>
                  <span>·</span>
                  <span>{product.providers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bestsellers-nav right"
          onClick={() => scroll('right')}
          aria-label="Scorri a destra"
        >
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default OurBestsellersWidget;
