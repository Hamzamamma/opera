import { useState, useEffect } from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/printful/catalog');
      const data = await response.json();

      // Se API fallisce, usa dati mock
      if (data.error) {
        console.warn('Using mock data - API token needs update');
        setProducts(getMockProducts());
      } else {
        setProducts(data.products);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading catalog:', error);
      setProducts(getMockProducts());
      setLoading(false);
    }
  };

  // Mock data per demo con lifestyle images
  const getMockProducts = () => [
    { type: 'T-SHIRT', type_name: 'Unisex T-Shirt', image: 'https://files.cdn.printful.com/files/dad/dada4c266be266678bf99f52fe92f4be_preview.png' },
    { type: 'HOODIE', type_name: 'Unisex Hoodie', image: 'https://files.cdn.printful.com/files/82f/82f626e449478ee24bb2b8a48eb57f07_preview.png' },
    { type: 'MUG', type_name: 'White Glossy Mug', image: 'https://files.cdn.printful.com/files/8a0/8a0d576fb5c0e35c0082c2ed499a7bcd_preview.png' },
    { type: 'DAD HAT', type_name: 'Dad Hat', image: 'https://files.cdn.printful.com/files/f68/f681d2f2fd6ad522c337f7fd23c90985_preview.png' },
    { type: 'SWEATPANTS', type_name: 'Joggers', image: 'https://files.cdn.printful.com/files/6db/6dbbf7251eb778afdc4c53065595e3c7_preview.png' },
    { type: 'TOTE', type_name: 'Tote Bag', image: 'https://files.cdn.printful.com/files/45f/45f51cb95439f93d15a7c211e402f86f_preview.png' },
    { type: 'SWEATSHIRT', type_name: 'Unisex Sweatshirt', image: 'https://files.cdn.printful.com/files/d33/d33fb85e32f05e8fe89424de0a83b192_preview.png' }
  ];

  // Raggruppa prodotti per categoria - layout Fourthwall style
  const categories = [
    { name: 'T-shirts', type: 'T-SHIRT', image: products.find(p => p.type === 'T-SHIRT')?.image, span: 1 },
    { name: 'Drinkware', type: 'MUG', image: products.find(p => p.type === 'MUG')?.image, span: 1 },
    { name: 'Hoodies', type: 'HOODIE', image: products.find(p => p.type === 'HOODIE')?.image, span: 1 },
    { name: 'Hats', type: 'DAD HAT', image: products.find(p => p.type === 'DAD HAT')?.image, span: 1 },
    { name: 'Joggers', type: 'SWEATPANTS', image: products.find(p => p.type === 'SWEATPANTS')?.image, span: 1 },
    { name: 'Source unique products', type: 'TOTE', image: products.find(p => p.type === 'TOTE')?.image, span: 1 },
    { name: 'All products', type: 'ALL', image: products.find(p => p.type === 'SWEATSHIRT')?.image, span: 2 }
  ];

  if (loading) {
    return (
      <section className="catalog-section">
        <div className="catalog-loading">Loading catalog...</div>
      </section>
    );
  }

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        <div className="catalog-grid">
          {categories.map((category, index) => (
            category.image && (
              <div
                key={index}
                className={`catalog-card ${category.span === 2 ? 'catalog-card--wide' : ''}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="catalog-card__image"
                />
                <div className="catalog-card__overlay">
                  <h3 className="catalog-card__title">{category.name}</h3>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
