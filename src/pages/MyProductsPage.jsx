import { useState, useEffect } from 'react';
import { getShops, getProducts } from '../services/printifyApi';
import './MyProductsPage.css';

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shopId, setShopId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // First, get the shops
      const shopsData = await getShops();
      if (!shopsData || shopsData.length === 0) {
        setError('No shops found');
        setLoading(false);
        return;
      }

      // Use the first shop
      const firstShop = shopsData[0];
      setShopId(firstShop.id);

      // Get products for this shop
      const productsData = await getProducts(firstShop.id);
      setProducts(productsData.data || []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Failed to load products. Please check your API token.');
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'published' && product.is_locked) ||
      (filterStatus === 'draft' && !product.is_locked);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="my-products-page">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h1>I miei prodotti</h1>
          <div className="header-actions">
            <button className="btn btn-primary">
              <span className="material-icons-outlined">add</span>
              <span>Crea prodotto</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="products-filters">
          <div className="search-box">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              type="text"
              className="search-input"
              placeholder="Cerca prodotti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${filterStatus === 'all' ? 'active' : ''}`}
              onClick={() => setFilterStatus('all')}
            >
              Tutti ({products.length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'published' ? 'active' : ''}`}
              onClick={() => setFilterStatus('published')}
            >
              Pubblicati ({products.filter(p => p.is_locked).length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'draft' ? 'active' : ''}`}
              onClick={() => setFilterStatus('draft')}
            >
              Bozze ({products.filter(p => !p.is_locked).length})
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Caricamento prodotti...</p>
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
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <img
                    src={product.images?.[0]?.src || '/placeholder.png'}
                    alt={product.title}
                    className="product-image"
                  />
                  {product.is_locked && (
                    <span className="product-badge published">Pubblicato</span>
                  )}
                  {!product.is_locked && (
                    <span className="product-badge draft">Bozza</span>
                  )}
                </div>

                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-meta">
                    <span className="product-variants">
                      {product.variants?.length || 0} varianti
                    </span>
                  </div>
                </div>

                <div className="product-actions">
                  <button className="btn-icon" title="Modifica">
                    <span className="material-icons-outlined">edit</span>
                  </button>
                  <button className="btn-icon" title="Duplica">
                    <span className="material-icons-outlined">content_copy</span>
                  </button>
                  <button className="btn-icon" title="Elimina">
                    <span className="material-icons-outlined">delete</span>
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
                : 'Inizia creando il tuo primo prodotto'}
            </p>
            {!searchQuery && (
              <button className="btn btn-primary">
                <span className="material-icons-outlined">add</span>
                <span>Crea il tuo primo prodotto</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProductsPage;
