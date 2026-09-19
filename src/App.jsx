import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Cart from "./components/UI/Cart";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="app">
        <Header onCartClick={() => setShowCart(true)} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <Cart show={showCart} onClose={() => setShowCart(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
