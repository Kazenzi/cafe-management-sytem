import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/navbar'; 
import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
