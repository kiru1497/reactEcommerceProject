import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";

import ProductCard from "./ProductCard";

import products from "../../data/products";

import "./Products.css";

function Products({ selectedCategory }) {
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="products-container">
      <div className="products-header">
        <div>
          <span className="products-eyebrow">THE COLLECTION</span>

          <h2>Curated products</h2>
        </div>

        <span className="product-count">
          {filteredProducts.length} products
        </span>
      </div>

      <Row className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
