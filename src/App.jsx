import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";


const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products/:category" element={<ProductList/>}/>
                    <Route path="/product/:productId" element={<ProductList/>}/>
                    <Route path="/cart" element={<Login/>}/>
                    <Route path="/login" element={ <Login />} /> 
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </Router>
    )
};

export default App;
