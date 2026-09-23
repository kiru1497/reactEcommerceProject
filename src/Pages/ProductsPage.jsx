import { useState, useMemo } from "react";

import { Container, Row, Col } from "react-bootstrap";

import CategoryFilter from "../components/UI/CategoryFilter";
import ProductCard from "../components/Products/ProductCard";

import products from "../data/products";

import "./ProductsPage.css";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="products-page">
      <section className="products-page-header">
        <Container>
          <span>THE COLLECTION</span>

          <h1>Everything we make.</h1>

          <p>
            Explore music, merchandise and everyday objects from The Generics.
          </p>
        </Container>
      </section>

      <section className="products-page-content">
        <Container>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="products-page-result">
            <span>Showing {filteredProducts.length} products</span>
          </div>

          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} lg={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProductsPage;
