import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";

import ProductCard from "./ProductCard";

import "./Products.css";

const products = [
  {
    id: 1,
    title: "Midnight Bloom",
    category: "Music",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=85",
    description:
      "A collection of atmospheric sounds for late nights and slow mornings.",
  },

  {
    id: 2,
    title: "After Dark",
    category: "Music",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=85",
    description: "An intimate collection of warm, textured sounds.",
  },

  {
    id: 3,
    title: "Infinite",
    category: "Music",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=85",
    description:
      "Four carefully produced tracks inspired by movement and space.",
  },

  {
    id: 4,
    title: "Blue Hour",
    category: "Music",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=85",
    description: "A cinematic listening experience for quiet evenings.",
  },

  {
    id: 5,
    title: "Signature Tee",
    category: "Merch",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    description: "Heavyweight cotton tee with a minimal Generics logo.",
  },

  {
    id: 6,
    title: "Everyday Mug",
    category: "Merch",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=85",
    description: "A simple ceramic mug made for your everyday coffee ritual.",
  },
];

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
