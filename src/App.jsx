import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Cart from "./components/UI/Cart";

import ProtectedRoute from "./components/Auth/ProtectedRoute";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Routes>
            {/* Authentication pages */}

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            {/* Protected application */}

            <Route element={<ProtectedRoute />}>
              <Route
                path="/home"
                element={
                  <>
                    <Header onCartClick={() => setShowCart(true)} />

                    <main>
                      <Home />
                    </main>

                    <Footer />

                    <Cart show={showCart} onClose={() => setShowCart(false)} />
                  </>
                }
              />

              <Route
                path="/products"
                element={
                  <>
                    <Header onCartClick={() => setShowCart(true)} />

                    <main>
                      <ProductsPage />
                    </main>

                    <Footer />

                    <Cart show={showCart} onClose={() => setShowCart(false)} />
                  </>
                }
              />

              <Route
                path="/product/:productId"
                element={
                  <>
                    <Header onCartClick={() => setShowCart(true)} />

                    <main>
                      <ProductDetails />
                    </main>

                    <Footer />

                    <Cart show={showCart} onClose={() => setShowCart(false)} />
                  </>
                }
              />

              <Route
                path="/about"
                element={
                  <>
                    <Header onCartClick={() => setShowCart(true)} />

                    <main>
                      <About />
                    </main>

                    <Footer />
                  </>
                }
              />

              <Route
                path="/contact"
                element={
                  <>
                    <Header onCartClick={() => setShowCart(true)} />

                    <main>
                      <Contact />
                    </main>

                    <Footer />
                  </>
                }
              />
            </Route>

            {/* Initial page */}

            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
