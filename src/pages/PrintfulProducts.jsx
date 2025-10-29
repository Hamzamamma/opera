import { useState, useEffect } from 'react';
import { getSyncProducts, deleteSyncProduct } from '../services/printfulApi';
import './PrintfulProducts.css';

const PrintfulProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const productsData = await getSyncProducts(0, 100);
      setProducts(productsData || []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Impossibile caricare i prodotti. Verifica il tuo token API.');
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!confirm('Sei sicuro di voler eliminare questo prodotto?')) return;

    try {
      await deleteSyncProduct(productId);
      setProducts(products.filter(p => p.id !== productId));
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Errore durante l\'eliminazione del prodotto.');
    }
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'active' && !product.is_ignored) ||
      (filterStatus === 'inactive' && product.is_ignored);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="printful-products-page">
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
              className={`filter-tab ${filterStatus === 'active' ? 'active' : ''}`}
              onClick={() => setFilterStatus('active')}
            >
              Attivi ({products.filter(p => !p.is_ignored).length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'inactive' ? 'active' : ''}`}
              onClick={() => setFilterStatus('inactive')}
            >
              Inattivi ({products.filter(p => p.is_ignored).length})
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
                    src={product.thumbnail_url || '/placeholder.png'}
                    alt={product.name}
                    className="product-image"
                  />
                  {!product.is_ignored && (
                    <span className="product-badge active">Attivo</span>
                  )}
                  {product.is_ignored && (
                    <span className="product-badge inactive">Inattivo</span>
                  )}
                </div>

                <div className="product-details">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-meta">
                    <span className="product-variants">
                      <span className="material-icons-outlined">inventory</span>
                      {product.synced} varianti sincronizzate
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
                  <button
                    className="btn-icon"
                    title="Elimina"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
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
                : 'Inizia creando il tuo primo prodotto dal catalogo'}
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

export default PrintfulProducts;
