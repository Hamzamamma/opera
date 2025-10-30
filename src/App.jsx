import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OrdersPage from './pages/OrdersPage';
import SiteDesignPage from './pages/SiteDesignPage';
import AppsPage from './pages/AppsPage';
import PromotionsPage from './pages/PromotionsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProductsPage from './pages/ProductsPage';
import MyProductsPage from './pages/MyProductsPage';
import PrintfulDashboard from './pages/PrintfulDashboard';
import PrintfulCatalog from './pages/PrintfulCatalog';
import PrintfulProducts from './pages/PrintfulProducts';
import PrintfulOrders from './pages/PrintfulOrders';
import LandingPage from './pages/LandingPage';
import './App.css';

function AppContent() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/site-design" element={<SiteDesignPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/promotions/promo-codes" element={<PromotionsPage />} />
        <Route path="/promotions/giveaway-links" element={<PromotionsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/myproducts" element={<MyProductsPage />} />
        <Route path="/printful" element={<PrintfulDashboard />} />
        <Route path="/printful/catalog" element={<PrintfulCatalog />} />
        <Route path="/printful/products" element={<PrintfulProducts />} />
        <Route path="/printful/orders" element={<PrintfulOrders />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
