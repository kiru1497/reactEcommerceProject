import { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

import "./Header.css";

function Header({ onCartClick }) {
  const { totalQuantity } = useContext(CartContext);

  return (
    <header>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand href="#" className="brand">
            The Generics
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navigation"
            className="navbar-toggle"
          />

          <Navbar.Collapse id="main-navigation">
            <Nav className="mx-auto navigation-links">
              <Nav.Link href="#">Home</Nav.Link>

              <Nav.Link href="#shop">Shop</Nav.Link>

              <Nav.Link href="#about">About</Nav.Link>
            </Nav>

            <Button className="cart-button" onClick={onCartClick}>
              <span>Cart</span>

              <span className="cart-count">{totalQuantity}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
