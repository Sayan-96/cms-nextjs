// src/app/page.jsx
"use client"

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header.jsx"; // Correct the path
import Footer from "../../components/Footer.jsx";
import CourseCard from "../../components/CourseCard.jsx";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
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
