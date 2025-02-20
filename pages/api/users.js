// pages/api/users.js
export default async function handler(req, res) {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    if (req.method === 'GET') {
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const newUser = JSON.parse(req.body);
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      res.status(201).json(data);
    }
  }
  