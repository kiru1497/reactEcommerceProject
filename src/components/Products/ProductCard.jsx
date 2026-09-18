import { useContext } from "react";
import { Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <div className="product-category">{product.category}</div>
      </div>

      <div className="product-information">
        <div className="product-top">
          <h3>{product.title}</h3>

          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>

        <p>{product.description}</p>

        <Button
          className="add-product-button"
          onClick={() => addToCart(product)}
        >
          Add to cart
          <span>+</span>
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
