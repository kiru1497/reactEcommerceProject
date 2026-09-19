import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import { submitContactForm } from "../firebase/firebase";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        submittedAt: new Date().toISOString(),
      });

      setMessage({
        type: "success",
        text: "Thank you. Your message has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-section">
        <Container>
          <Row className="contact-wrapper">
            {/* Left side */}
            <Col lg={5} className="contact-introduction">
              <span className="contact-eyebrow">GET IN TOUCH</span>

              <h1>
                Let's start
                <span> a conversation.</span>
              </h1>

              <p>
                Have a question about our products, music or anything else? Send
                us your details and we'll get back to you.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <span>Email</span>

                  <a href="mailto:hello@thegenerics.com">
                    hello@thegenerics.com
                  </a>
                </div>

                <div className="contact-detail">
                  <span>Phone</span>

                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
            </Col>

            {/* Right side */}
            <Col lg={7} className="contact-form-column">
              <div className="contact-form-card">
                <div className="form-heading">
                  <span>CONTACT US</span>

                  <h2>Tell us about yourself.</h2>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="form-group" controlId="contactName">
                    <Form.Label>Name</Form.Label>

                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                    />
                  </Form.Group>

                  <Form.Group className="form-group" controlId="contactEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="form-group" controlId="contactPhone">
                    <Form.Label>Phone number</Form.Label>

                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9+\-\s()]{7,20}"
                    />
                  </Form.Group>

                  {message.text && (
                    <div
                      className={
                        message.type === "success"
                          ? "form-message success"
                          : "form-message error"
                      }
                    >
                      {message.text}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send message"}

                    {!isSubmitting && <span>→</span>}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
