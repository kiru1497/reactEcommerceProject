import { useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { signUpUser } from "../firebase/firebase";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    setLoading(true);

    try {
      await signUpUser({
        firstName,
        lastName,
        email,
        password,
      });

      // Signup successful.
      // Send the user to login.
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-eyebrow">JOIN US</span>

        <h1>Sign up</h1>

        <p className="auth-description">Create your account to get started.</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <div className="name-row">
            <Form.Group className="auth-form-group">
              <Form.Label>First name</Form.Label>

              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="auth-form-group">
              <Form.Label>Last name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </Form.Group>
          </div>

          <Form.Group className="auth-form-group">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="auth-form-group">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </Button>
        </Form>

        <p className="auth-switch">
          Already a user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
