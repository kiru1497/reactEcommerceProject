import { useState, useMemo } from "react";

import { useParams, Link } from "react-router-dom";

import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import products from "../data/products";

import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = useMemo(() => {
    return products.find((item) => item.id === Number(productId));
  }, [productId]);

  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [showZoom, setShowZoom] = useState(false);

  const [reviews, setReviews] = useState(product?.reviews || []);

  const [showReviewForm, setShowReviewForm] = useState(false);

  const [reviewData, setReviewData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  if (!product) {
    return (
      <section className="product-not-found">
        <Container>
          <h1>Product not found</h1>

          <p>The product you're looking for doesn't exist.</p>

          <Link to="/products" className="back-to-products">
            ← Back to products
          </Link>
        </Container>
      </section>
    );
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  }

  function handleAddToCart() {
    addToCart(product, quantity);
  }

  function handleReviewChange(event) {
    const { name, value } = event.target;

    setReviewData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleReviewSubmit(event) {
    event.preventDefault();

    const newReview = {
      id: Date.now(),

      name: reviewData.name,

      rating: Number(reviewData.rating),

      comment: reviewData.comment,
    };

    setReviews((previousReviews) => [newReview, ...previousReviews]);

    setReviewData({
      name: "",
      rating: 5,
      comment: "",
    });

    setShowReviewForm(false);
  }

  return (
    <div className="product-details-page">
      <section className="product-details-section">
        <Container>
          <div className="product-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/products">Products</Link>

            <span>/</span>

            <span>{product.title}</span>
          </div>

          <Row className="product-main-row">
            {/* IMAGE SECTION */}

            <Col lg={7} className="product-gallery">
              <div className="product-gallery-layout">
                <div className="product-thumbnails">
                  {product.images.map((image, index) => (
                    <button
                      key={image}
                      className={
                        selectedImage === index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${product.title} ${index + 1}`} />
                    </button>
                  ))}
                </div>

                <button
                  className="main-product-image"
                  onClick={() => setShowZoom(true)}
                  aria-label="Zoom product image"
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                  />

                  <span className="zoom-label">⌕ Click to zoom</span>
                </button>
              </div>
            </Col>

            {/* PRODUCT INFORMATION */}

            <Col lg={5} className="product-details-information">
              <span className="details-category">{product.category}</span>

              <h1>{product.title}</h1>

              <div className="details-rating">
                <span className="stars">
                  {"★".repeat(Math.round(product.rating))}
                </span>

                <span>{product.rating}</span>

                <span className="rating-divider">|</span>

                <span>{reviews.length} reviews</span>
              </div>

              <div className="details-price">${product.price.toFixed(2)}</div>

              <p className="details-description">{product.longDescription}</p>

              <div className="product-specifications">
                <h3>Details</h3>

                <ul>
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="quantity-section">
                <span>Quantity</span>

                <div className="quantity-selector">
                  <button onClick={decreaseQuantity}>−</button>

                  <span>{quantity}</span>

                  <button onClick={increaseQuantity}>+</button>
                </div>
              </div>

              <Button className="details-add-button" onClick={handleAddToCart}>
                Add {quantity} {quantity === 1 ? "item" : "items"} to cart
                <span>→</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* REVIEWS */}

      <section className="reviews-section">
        <Container>
          <div className="reviews-heading">
            <div>
              <span>CUSTOMER FEEDBACK</span>

              <h2>Reviews</h2>
            </div>

            <Button
              className="add-review-button"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              + Add review
            </Button>
          </div>

          {showReviewForm && (
            <div className="review-form-wrapper">
              <Form onSubmit={handleReviewSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="review-form-group">
                      <Form.Label>Your name</Form.Label>

                      <Form.Control
                        type="text"
                        name="name"
                        value={reviewData.name}
                        onChange={handleReviewChange}
                        required
                        placeholder="Your name"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="review-form-group">
                      <Form.Label>Rating</Form.Label>

                      <Form.Select
                        name="rating"
                        value={reviewData.rating}
                        onChange={handleReviewChange}
                      >
                        <option value="5">5 — Excellent</option>

                        <option value="4">4 — Very good</option>

                        <option value="3">3 — Good</option>

                        <option value="2">2 — Average</option>

                        <option value="1">1 — Poor</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="review-form-group">
                  <Form.Label>Review</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="comment"
                    value={reviewData.comment}
                    onChange={handleReviewChange}
                    required
                    placeholder="Tell us what you think..."
                  />
                </Form.Group>

                <Button type="submit" className="submit-review-button">
                  Submit review
                </Button>
              </Form>
            </div>
          )}

          <div className="reviews-list">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <div className="review-card-header">
                  <div>
                    <h3>{review.name}</h3>

                    <div className="review-stars">
                      {"★".repeat(review.rating)}

                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>

                  <span>Verified customer</span>
                </div>

                <p>{review.comment}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* IMAGE ZOOM MODAL */}

      <Modal
        show={showZoom}
        onHide={() => setShowZoom(false)}
        centered
        size="xl"
        className="product-zoom-modal"
      >
        <Modal.Body>
          <button className="zoom-close" onClick={() => setShowZoom(false)}>
            ×
          </button>

          <img src={product.images[selectedImage]} alt={product.title} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductDetails;
