import './App.css';
import {Routes , Route , Navigate } from 'react-router-dom'
import ProductContextProvider from './context/ProductContextProvider'
import Store from './components/Store'
import ProductsDetails from './components/ProductsDetails';
import CartContextProvider from './context/CartContextProvider';
import Hamburger from './components/hamburger';
import Footer from './components/footer'
// import Navbara from './components/shared/Navbar';

import ShopCart from './components/ShopCart' ;
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <ProductContextProvider>
        <Hamburger />
        {/* <Navbara /> */}

        <Routes>
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
        <Footer  />
      </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
