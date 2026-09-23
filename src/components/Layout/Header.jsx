import { useContext } from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./Header.css";

function Header({ onCartClick }) {
  const { totalQuantity } = useContext(CartContext);

  return (
    <header>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            The Generics
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navigation"
            className="navbar-toggle"
          />

          <Navbar.Collapse id="main-navigation">
            <Nav className="mx-auto navigation-links">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/products">
                Shop
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
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
