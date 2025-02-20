// pages/login.jsx
import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Header from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users');
    const users = await response.json();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert('Login successful');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <h1 className="mt-5">Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
