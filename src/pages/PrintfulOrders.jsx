import { useState, useEffect } from 'react';
import { getOrders } from '../services/printfulApi';
import './PrintfulOrders.css';

const PrintfulOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    loadOrders();
  }, [filterStatus]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const ordersData = await getOrders(0, 100, filterStatus);
      setOrders(ordersData || []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading orders:', err);
      setError('Impossibile caricare gli ordini. Verifica il tuo token API.');
      setLoading(false);
    }
  };

  // Filter orders by search query
  const filteredOrders = orders.filter(order =>
    order.id?.toString().includes(searchQuery) ||
    order.recipient?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.recipient?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusLabel = (status) => {
    const statusLabels = {
      'draft': 'Bozza',
      'pending': 'In attesa',
      'failed': 'Fallito',
      'canceled': 'Annullato',
      'onhold': 'In sospeso',
      'inprocess': 'In lavorazione',
      'partial': 'Parziale',
      'fulfilled': 'Completato'
    };
    return statusLabels[status] || status;
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      'draft': 'draft',
      'pending': 'pending',
      'failed': 'failed',
      'canceled': 'canceled',
      'onhold': 'onhold',
      'inprocess': 'inprocess',
      'partial': 'partial',
      'fulfilled': 'fulfilled'
    };
    return statusClasses[status] || 'default';
  };

  return (
    <div className="printful-orders-page">
      <div className="orders-container">
        {/* Header */}
        <div className="orders-header">
          <h1>Ordini Printful</h1>
          <div className="header-actions">
            <button className="btn btn-primary">
              <span className="material-icons-outlined">add</span>
              <span>Crea ordine</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="orders-filters">
          <div className="search-box">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              type="text"
              className="search-input"
              placeholder="Cerca per ID ordine, nome cliente o email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${filterStatus === '' ? 'active' : ''}`}
              onClick={() => setFilterStatus('')}
            >
              Tutti ({orders.length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'draft' ? 'active' : ''}`}
              onClick={() => setFilterStatus('draft')}
            >
              Bozze
            </button>
            <button
              className={`filter-tab ${filterStatus === 'pending' ? 'active' : ''}`}
              onClick={() => setFilterStatus('pending')}
            >
              In attesa
            </button>
            <button
              className={`filter-tab ${filterStatus === 'fulfilled' ? 'active' : ''}`}
              onClick={() => setFilterStatus('fulfilled')}
            >
              Completati
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Caricamento ordini...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="material-icons-outlined">error</span>
            <h2>Errore</h2>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={loadOrders}>
              Riprova
            </button>
          </div>
        )}

        {/* Orders Table */}
        {!loading && !error && filteredOrders.length > 0 && (
          <div className="orders-table-wrap">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ID Ordine</th>
                  <th>Data</th>
                  <th>Cliente</th>
                  <th>Prodotti</th>
                  <th>Totale</th>
                  <th>Stato</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <span className="order-id">#{order.id}</span>
                    </td>
                    <td>
                      {new Date(order.created * 1000).toLocaleDateString('it-IT', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </td>
                    <td>
                      <div className="customer-info">
                        <div className="customer-name">
                          {order.recipient?.name || 'N/A'}
                        </div>
                        <div className="customer-email">
                          {order.recipient?.email || ''}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="order-items">
                        {order.items?.length || 0} prodotti
                      </span>
                    </td>
                    <td>
                      <span className="order-total">
                        ${order.retail_costs?.total || '0.00'}
                      </span>
                    </td>
                    <td>
                      <span className={`order-status ${getStatusClass(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                    </td>
                    <td>
                      <div className="order-actions">
                        <button className="btn-icon" title="Visualizza">
                          <span className="material-icons-outlined">visibility</span>
                        </button>
                        <button className="btn-icon" title="Modifica">
                          <span className="material-icons-outlined">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredOrders.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <span className="material-icons-outlined">shopping_cart</span>
            </div>
            <h2>Nessun ordine trovato</h2>
            <p>
              {searchQuery
                ? 'Prova a cercare con parole chiave diverse'
                : 'Non hai ancora nessun ordine. Inizia a vendere!'}
            </p>
            {!searchQuery && (
              <button className="btn btn-primary">
                <span className="material-icons-outlined">add</span>
                <span>Crea il tuo primo ordine</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintfulOrders;
