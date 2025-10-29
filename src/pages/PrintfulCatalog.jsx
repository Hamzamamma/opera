import { useState, useEffect } from 'react';
import { getCatalogProducts, getCatalogCategories } from '../services/printfulApi';
import './PrintfulCatalog.css';

const PrintfulCatalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      const categoriesData = await getCatalogCategories();
      setCategories(categoriesData || []);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const productsData = await getCatalogProducts(selectedCategory);
      setProducts(productsData || []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading catalog:', err);
      setError('Impossibile caricare il catalogo. Verifica il tuo token API.');
      setLoading(false);
    }
  };

  // Filter products by search query
  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="printful-catalog-page">
      <div className="catalog-container">
        {/* Header */}
        <div className="catalog-header">
          <h1>Catalogo Printful</h1>
          <p className="catalog-subtitle">
            Esplora oltre 300 prodotti disponibili per la personalizzazione
          </p>
        </div>

        {/* Search & Filters */}
        <div className="catalog-filters">
          <div className="search-box">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              type="text"
              className="search-input"
              placeholder="Cerca prodotti nel catalogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {categories.length > 0 && (
            <div className="category-tabs">
              <button
                className={`category-tab ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                Tutti i prodotti
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Caricamento catalogo...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="material-icons-outlined">error</span>
            <h2>Errore</h2>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={loadProducts}>
              Riprova
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && filteredProducts.length > 0 && (
          <div className="catalog-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="catalog-card">
                <div className="catalog-image-wrap">
                  <img
                    src={product.image || '/placeholder.png'}
                    alt={product.title}
                    className="catalog-image"
                  />
                  {product.is_discontinued && (
                    <span className="product-badge discontinued">Non disponibile</span>
                  )}
                </div>

                <div className="catalog-details">
                  <div className="catalog-brand">{product.brand || 'Printful'}</div>
                  <h3 className="catalog-title">{product.title}</h3>
                  <p className="catalog-description">{product.description}</p>

                  <div className="catalog-meta">
                    <span className="catalog-type">
                      <span className="material-icons-outlined">category</span>
                      {product.type_name || 'Prodotto'}
                    </span>
                  </div>
                </div>

                <div className="catalog-actions">
                  <button
                    className="btn btn-outline"
                    disabled={product.is_discontinued}
                  >
                    <span className="material-icons-outlined">visibility</span>
                    <span>Vedi dettagli</span>
                  </button>
                  <button
                    className="btn btn-primary"
                    disabled={product.is_discontinued}
                  >
                    <span className="material-icons-outlined">add</span>
                    <span>Personalizza</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <span className="material-icons-outlined">inventory_2</span>
            </div>
            <h2>Nessun prodotto trovato</h2>
            <p>
              {searchQuery
                ? 'Prova a cercare con parole chiave diverse'
                : 'Nessun prodotto disponibile in questa categoria'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintfulCatalog;
