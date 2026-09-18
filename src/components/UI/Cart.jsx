import { useContext, useMemo } from "react";
import { Offcanvas, Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

import "./Cart.css";

function Cart({ show, onClose }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement="end"
      className="cart-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h3>Your cart is empty</h3>

            <p>Looks like you haven't added anything yet.</p>

            <Button onClick={onClose} className="continue-shopping">
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h4>{item.title}</h4>

                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </div>

                    <span className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </span>

                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Total</span>

                <strong>${totalPrice.toFixed(2)}</strong>
              </div>

              <Button className="checkout-button">Checkout</Button>

              <p className="checkout-note">
                Taxes and shipping calculated at checkout.
              </p>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
