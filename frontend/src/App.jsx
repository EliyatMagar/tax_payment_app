import { Routes, Route } from 'react-router-dom';
import './index.css'; // Or the path to your Tailwind CSS file



import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PropertyList from './pages/PropertyList';
import TaxCalculator from './pages/TaxCalculator';
import PaymentPage from './pages/PaymentPage';
import PropertyAddForm from './pages/PropertyAddForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/properties" element={<PropertyList />} />
      <Route path="/property/add" element={<PropertyAddForm />} />   
      <Route path="/tax-calculator" element={<TaxCalculator />} />
      <Route path="/payment/:propertyId" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
