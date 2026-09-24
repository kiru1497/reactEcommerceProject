import { useContext, useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../firebase/firebase";

import { AuthContext } from "../context/AuthContext";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    setLoading(true);

    try {
      const data = await loginUser(email, password);

      login(data);

      navigate("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-eyebrow">WELCOME BACK</span>

        <h1>Login</h1>

        <p className="auth-description">Sign in to continue shopping.</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>

        <p className="auth-switch">
          Not a user? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
