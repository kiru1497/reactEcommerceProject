import { useState } from "react";

import Hero from "../components/UI/Hero";
import CategoryFilter from "../components/UI/CategoryFilter";
import Products from "../components/Products/Products";

import "./Home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="home-page">
      <Hero />

      <section className="shop-section" id="shop">
        <div className="container">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <Products selectedCategory={selectedCategory} />
        </div>
      </section>
    </div>
  );
}

export default Home;
