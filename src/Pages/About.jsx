import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="eyebrow">OUR PHILOSOPHY</span>

              <h1>
                Designed for the
                <span> everyday.</span>
              </h1>

              <p>
                We believe great products should feel effortless. Our collection
                combines timeless design, quality materials and everyday
                functionality.
              </p>

              <p>
                From your morning coffee to your weekend adventures, everything
                is designed to become part of your routine.
              </p>
            </div>

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
                alt="Minimal lifestyle product"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
