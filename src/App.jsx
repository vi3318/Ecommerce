import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Hoodies from './pages/AllHoodies'
import Shirts from './pages/AllShirts';
import About from './pages/About';
import Success from './pages/Success';
import Product from './pages/Product';
import Signout from './redux/Signout'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/products/hoodies" element={<Hoodies />} />
        <Route path="/products/shirts" element={<Shirts />} />
      </Routes>
    </Router>
  );
};

export default App;
