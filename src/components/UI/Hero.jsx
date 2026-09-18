import { Container, Button } from "react-bootstrap";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85"
          alt="Concert"
        />
      </div>

      <div className="hero-overlay"></div>

      <Container>
        <div className="hero-content">
          <span className="hero-eyebrow">MUSIC • MERCH • MOMENTS</span>

          <h1>
            The
            <br />
            Generics
          </h1>

          <p>
            Music, objects and everyday essentials
            <br />
            made with intention.
          </p>

          <Button href="#shop" className="hero-button">
            Explore collection
            <span>→</span>
          </Button>
        </div>
      </Container>

      <div className="hero-scroll">
        Scroll to explore
        <span>↓</span>
      </div>
    </section>
  );
}

export default Hero;
