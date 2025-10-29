import { useState, useEffect } from 'react';
import { getStoreInfo, getSyncProducts, getOrders } from '../services/printfulApi';
import './PrintfulDashboard.css';

const PrintfulDashboard = () => {
  const [storeInfo, setStoreInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load store info, products, and orders in parallel
      const [storeData, productsData, ordersData] = await Promise.all([
        getStoreInfo(),
        getSyncProducts(0, 10),
        getOrders(0, 10)
      ]);

      setStoreInfo(storeData);
      setProducts(productsData || []);
      setOrders(ordersData || []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Impossibile caricare i dati del dashboard. Verifica il tuo token API.');
      setLoading(false);
    }
  };

  // Calculate statistics
  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'draft').length,
    completedOrders: orders.filter(o => o.status === 'fulfilled').length
  };

  return (
    <div className="printful-dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <h1>Dashboard Printful</h1>
          <button className="btn btn-primary" onClick={loadDashboardData}>
            <span className="material-icons-outlined">refresh</span>
            <span>Aggiorna</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Caricamento dashboard...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="material-icons-outlined">error</span>
            <h2>Errore</h2>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={loadDashboardData}>
              Riprova
            </button>
          </div>
        )}

        {/* Dashboard Content */}
        {!loading && !error && (
          <>
            {/* Store Info Card */}
            {storeInfo && (
              <div className="store-info-card">
                <div className="store-info-header">
                  <div className="store-icon">
                    <span className="material-icons-outlined">storefront</span>
                  </div>
                  <div className="store-details">
                    <h2>{storeInfo.name || 'Il mio negozio Printful'}</h2>
                    <p className="store-email">{storeInfo.website || 'printful.com'}</p>
                    <span className="store-currency">Valuta: {storeInfo.currency || 'USD'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Statistics Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon products">
                  <span className="material-icons-outlined">inventory_2</span>
                </div>
                <div className="stat-content">
                  <h3>{stats.totalProducts}</h3>
                  <p>Prodotti totali</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orders">
                  <span className="material-icons-outlined">local_shipping</span>
                </div>
                <div className="stat-content">
                  <h3>{stats.totalOrders}</h3>
                  <p>Ordini totali</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon pending">
                  <span className="material-icons-outlined">schedule</span>
                </div>
                <div className="stat-content">
                  <h3>{stats.pendingOrders}</h3>
                  <p>Ordini in attesa</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon completed">
                  <span className="material-icons-outlined">check_circle</span>
                </div>
                <div className="stat-content">
                  <h3>{stats.completedOrders}</h3>
                  <p>Ordini completati</p>
                </div>
              </div>
            </div>

            {/* Recent Products & Orders */}
            <div className="dashboard-grid">
              {/* Recent Products */}
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Prodotti recenti</h2>
                  <a href="/printful/products" className="view-all-link">
                    Vedi tutti
                    <span className="material-icons-outlined">arrow_forward</span>
                  </a>
                </div>

                {products.length > 0 ? (
                  <div className="recent-products-list">
                    {products.slice(0, 5).map(product => (
                      <div key={product.id} className="recent-product-item">
                        <div className="product-image-wrap">
                          <img
                            src={product.thumbnail_url || '/placeholder.png'}
                            alt={product.name}
                            className="product-thumbnail"
                          />
                        </div>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <p className="product-variants">
                            {product.synced} varianti sincronizzate
                          </p>
                        </div>
                        <span className={`product-status ${product.is_ignored ? 'inactive' : 'active'}`}>
                          {product.is_ignored ? 'Inattivo' : 'Attivo'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-section">
                    <span className="material-icons-outlined">inventory_2</span>
                    <p>Nessun prodotto trovato</p>
                  </div>
                )}
              </div>

              {/* Recent Orders */}
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Ordini recenti</h2>
                  <a href="/printful/orders" className="view-all-link">
                    Vedi tutti
                    <span className="material-icons-outlined">arrow_forward</span>
                  </a>
                </div>

                {orders.length > 0 ? (
                  <div className="recent-orders-list">
                    {orders.slice(0, 5).map(order => (
                      <div key={order.id} className="recent-order-item">
                        <div className="order-icon">
                          <span className="material-icons-outlined">receipt</span>
                        </div>
                        <div className="order-info">
                          <h4>Ordine #{order.id}</h4>
                          <p className="order-date">
                            {new Date(order.created * 1000).toLocaleDateString('it-IT')}
                          </p>
                        </div>
                        <div className="order-details">
                          <span className="order-total">${order.retail_costs?.total || '0.00'}</span>
                          <span className={`order-status ${order.status}`}>
                            {order.status === 'draft' && 'Bozza'}
                            {order.status === 'pending' && 'In attesa'}
                            {order.status === 'fulfilled' && 'Completato'}
                            {order.status === 'canceled' && 'Annullato'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-section">
                    <span className="material-icons-outlined">shopping_cart</span>
                    <p>Nessun ordine trovato</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PrintfulDashboard;
