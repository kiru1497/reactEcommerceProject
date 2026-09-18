import { useState } from "react";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import Hero from "./components/UI/Hero";
import CategoryFilter from "./components/UI/CategoryFilter";
import Cart from "./components/UI/Cart";

import Products from "./components/Products/Products";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="app">

        <Header onCartClick={() => setShowCart(true)} />

        <main>

          <Hero />

          <section className="shop-section" id="shop">

            <div className="container">

              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              <Products
                selectedCategory={selectedCategory}
              />

            </div>

          </section>

          <section className="about-section" id="about">

            <div className="container">

              <div className="about-content">

                <div className="about-text">

                  <span className="eyebrow">
                    OUR PHILOSOPHY
                  </span>

                  <h2>
                    Designed for the
                    <span> everyday.</span>
                  </h2>

                  <p>
                    We believe great products should feel effortless.
                    Our collection combines timeless design, quality
                    materials and everyday functionality.
                  </p>

                  <p>
                    From your morning coffee to your weekend adventures,
                    everything is designed to become part of your routine.
                  </p>

                </div>

                <div className="about-image">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
                    alt="Minimal lifestyle product"
                  />
                </div>

              </div>

            </div>

          </section>

        </main>

        <Footer />

        <Cart
          show={showCart}
          onClose={() => setShowCart(false)}
        />

      </div>
    </CartProvider>
  );
}

export default App;