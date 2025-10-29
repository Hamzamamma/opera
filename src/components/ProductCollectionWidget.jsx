import { useRef } from 'react';
import './ProductCollectionWidget.css';

const ProductCollectionWidget = () => {
  const scrollContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Tazza Accent Coffee (11oz, 15oz)',
      brand: 'By Generic brand',
      image: 'https://images.printify.com/api/catalog/635/5bd0b058dc6b24.png',
      price: 'Da USD 6.26',
      premiumPrice: 'Da USD 4.74 con Printify Premium',
      badge: null,
      badgeColor: null
    },
    {
      id: 2,
      name: 'Tazza in ceramica (11oz, 15oz)',
      brand: 'By Generic brand',
      image: 'https://images.printify.com/api/catalog/478/5bd0ae3f0a8569.png',
      price: 'Da USD 4.93',
      premiumPrice: 'Da USD 3.68 con Printify Premium',
      badge: null,
      badgeColor: null
    },
    {
      id: 3,
      name: 'Bottiglia d\'acqua in acciaio inox, Tappo standard',
      brand: 'By Generic brand',
      image: 'https://images.printify.com/api/catalog/887/5fc74a6af1bbbc.png',
      price: 'Da USD 23.57',
      premiumPrice: 'Da USD 17.08 con Printify Premium',
      badge: null,
      badgeColor: null
    }
  ];

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
    <div className="product-collection-widget">
      <div className="collection-header">
        <h3 className="collection-title">Crea di più per Drinkware & Kitchen</h3>
        <button className="change-collection-btn">
          Cambia collezione
          <span className="material-icons-outlined">restart_alt</span>
        </button>
      </div>

      <div className="carousel-container">
        <button
          className="carousel-nav left"
          onClick={() => scroll('left')}
          aria-label="Scorri a sinistra"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>

        <div className="product-carousel" ref={scrollContainerRef}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-brand">{product.brand}</p>

                <div className="product-pricing">
                  <p className="product-price">{product.price}</p>
                  <p className="product-premium-price">{product.premiumPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-nav right"
          onClick={() => scroll('right')}
          aria-label="Scorri a destra"
        >
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCollectionWidget;
