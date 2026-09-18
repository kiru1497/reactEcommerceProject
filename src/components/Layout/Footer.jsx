import { Container } from "react-bootstrap";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <h2>The Generics</h2>

            <p>Simple things. Beautifully made.</p>
          </div>

          <div className="footer-links">
            <a href="#">Instagram</a>

            <a href="#">YouTube</a>

            <a href="#">Spotify</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 The Generics</span>

          <span>Built with React</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
