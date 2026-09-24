import { useContext } from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { AuthContext } from "../../context/AuthContext";

import "./Header.css";

function Header({ onCartClick }) {
  const { totalQuantity } = useContext(CartContext);

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login");
  }

  return (
    <header>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="brand">
            The Generics
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navigation"
            className="navbar-toggle"
          />

          <Navbar.Collapse id="main-navigation">
            <Nav className="mx-auto navigation-links">
              <Nav.Link as={Link} to="/home">
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

            <div className="header-actions">
              <Button className="cart-button" onClick={onCartClick}>
                <span>Cart</span>

                <span className="cart-count">{totalQuantity}</span>
              </Button>

              <Button className="logout-button" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
