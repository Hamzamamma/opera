import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PrintifyDemo from './components/PrintifyDemo';
import OrdersPage from './pages/OrdersPage';
import MyProductsPage from './pages/MyProductsPage';
import PrintfulDashboard from './pages/PrintfulDashboard';
import PrintfulCatalog from './pages/PrintfulCatalog';
import PrintfulProducts from './pages/PrintfulProducts';
import PrintfulOrders from './pages/PrintfulOrders';
import LandingPage from './pages/LandingPage';
import PrintifyTopBanner from './components/PrintifyTopBanner';
import PrintifySidebar from './components/PrintifySidebar';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing';

  return (
    <div className="app">
      {!isLandingPage && <PrintifyTopBanner />}
      {!isLandingPage && <PrintifySidebar />}

      <Routes>
        <Route path="/" element={<PrintifyDemo />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/products" element={<MyProductsPage />} />
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
