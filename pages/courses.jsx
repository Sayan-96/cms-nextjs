// pages/courses.jsx
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import styles from './Courses.module.css';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch with hands-on projects and exercises.',
    image: 'https://i.postimg.cc/kXJcPYSN/download.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Dive deep into JavaScript, closures, and asynchronous programming.',
    image: 'https://i.postimg.cc/pTMfGsxF/4591e3a3-3621-44ce-b5ea-dfd1f5586291.png',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Master Python and use it to analyze and visualize data.',
    image: 'https://i.postimg.cc/qvt2pPvK/lead-custom-image-ela271.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Node.js for Backend Development',
    description: 'Learn backend development with Node.js and Express.',
    image: 'https://i.postimg.cc/vmtTyhf9/node-js-development-company.png',
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Machine Learning with TensorFlow',
    description: 'Dive into the world of AI and machine learning using TensorFlow.',
    image: 'https://i.postimg.cc/44SdXm78/Tensorflow-1024x569.jpg',
    rating: 4.9,
  },
  {
    id: 6,
    title: 'UI/UX Design for Beginners',
    description: 'Learn the basics of UI/UX design principles and tools.',
    image: 'https://i.postimg.cc/5NQtyb8f/OIP.jpg',
    rating: 4.4,
  },
];

const Courses = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Available Courses</h1>
      <Row className={styles.courseRow}>
        {courses.map((course) => (
          <Col sm={12} md={4} lg={4} key={course.id} className="mb-4">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
