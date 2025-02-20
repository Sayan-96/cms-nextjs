// pages/home.jsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row>
          {courses.map((course) => (
            <Col md={4} key={course.id}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
