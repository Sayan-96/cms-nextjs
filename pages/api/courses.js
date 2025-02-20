// pages/api/courses.js
export default async function handler(req, res) {
    const response = await fetch('http://localhost:3000/courses');
    const courses = await response.json();
    if (req.method === 'GET') {
      res.status(200).json(courses);
    } else if (req.method === 'POST') {
      const newCourse = JSON.parse(req.body);
      const response = await fetch('http://localhost:3000/courses', {
        method: 'POST',
        body: JSON.stringify(newCourse),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      res.status(201).json(data);
    }
  }
  