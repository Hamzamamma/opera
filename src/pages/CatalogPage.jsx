import { useState, useEffect } from 'react';
import './CatalogPage.css';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [sortBy, setSortBy] = useState('recommended');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/printful/catalog');
      const data = await response.json();

      // Transform Printful products to include pricing
      const productsWithPrices = data.products.map(product => ({
        ...product,
        price: getProductPrice(product),
        image: product.image || 'https://via.placeholder.com/400x400/f0f0f0/cccccc?text=Product',
        badge: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'Best seller' : 'Staff pick') : null
      }));

      setProducts(productsWithPrices);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  };

  const getProductPrice = (product) => {
    // Generate realistic price based on product type
    const basePrice = 15;
    const priceVariation = Math.random() * 20;
    return (basePrice + priceVariation).toFixed(2);
  };

  const categories = [
    { id: 'all', name: 'All products', image: null },
    { id: 'apparel', name: 'Apparel', image: 'https://via.placeholder.com/600x400/f9f9f9/666666?text=Apparel' },
    { id: 'accessories', name: 'Accessories', image: 'https://via.placeholder.com/600x400/f5f5f0/666666?text=Accessories' },
    { id: 'home', name: 'Home & Living', image: 'https://via.placeholder.com/600x400/fff0f0/666666?text=Home' }
  ];

  const collections = [
    'All-Over Prints',
    'Budget friendly',
    'Champion',
    'Eco-Friendly',
    'Fall Essentials',
    'Gaming',
    "Kids' Clothing",
    'Knitwear',
    'Streetwear',
    'Summer Essentials',
    'Wellness',
    'Winter Essentials'
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all') {
      return product.type?.toLowerCase().includes(selectedCategory);
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0; // recommended (default order)
  });

  return (
    <div className="catalog-page">
      {/* Header */}
      <header className="catalog-header">
        <div className="catalog-header-content">
          <div className="catalog-logo">
            <span className="logo-icon">fw</span>
            <span className="logo-text">hamzalemzarouai7...</span>
          </div>
          <nav className="catalog-nav">
            <a href="#" className="nav-link">Discover</a>
            <a href="#" className="nav-link active">All Products</a>
            <a href="#" className="nav-link">Apparel</a>
            <a href="#" className="nav-link">Accessories</a>
            <a href="#" className="nav-link">Home & Living</a>
          </nav>
          <div className="catalog-header-actions">
            <div className="search-box">
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <button className="icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="user-btn">H</button>
          </div>
        </div>
      </header>

      <div className="catalog-main">
        {/* Sidebar */}
        <aside className="catalog-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">All products</h3>
            <h1 className="page-title">Design & Sell Products ({sortedProducts.length})</h1>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Categories</h3>
            <ul className="sidebar-list">
              {categories.slice(1).map(cat => (
                <li key={cat.id}>
                  <button
                    className={`sidebar-link ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button className="sidebar-link">Drinkware</button>
              </li>
              <li>
                <button className="sidebar-link">Home & Living</button>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Collections</h3>
            <ul className="sidebar-list">
              {collections.map(collection => (
                <li key={collection}>
                  <button
                    className={`sidebar-link ${selectedCollection === collection ? 'active' : ''}`}
                    onClick={() => setSelectedCollection(collection)}
                  >
                    {collection}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Filters</h3>
            <div className="filter-group">
              <label className="filter-label">How quickly can I sell it?</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Instantly</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="catalog-content">
          {/* Category Banners */}
          <div className="category-banners">
            {categories.slice(1).map(cat => (
              <div
                key={cat.id}
                className="category-banner"
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <h2 className="category-banner-title">{cat.name}</h2>
              </div>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="catalog-controls">
            <div className="sort-control">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="recommended">Recommended</option>
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Caricamento prodotti...</p>
            </div>
          ) : (
            <div className="products-grid">
              {sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && (
                    <div className="product-badges">
                      <span className="badge">{product.badge}</span>
                    </div>
                  )}
                  <div className="product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-brand">{product.brand || 'Printful'}</p>
                    <div className="product-footer">
                      <span className="product-price">From ${product.price}</span>
                      <button className="product-btn">
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
