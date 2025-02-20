// pages/register.jsx
import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Header from '../components/Header';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { email, password };

    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setMessage('Registration successful');
  };

  return (
    <div>
      <Header />
      <Container>
        <h1 className="mt-5">Register</h1>
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleRegister}>
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
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
