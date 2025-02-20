// pages/home.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.heroSection}>
        <Container className="text-center">
          <Row>
            <Col>
              <h1 className={styles.heroTitle}>Welcome to the Course Management System</h1>
              <p className={styles.heroSubtitle}>
                Your ultimate platform to manage courses, students, and users efficiently!
              </p>
              <Button variant="primary" size="lg" href="/courses" className={styles.heroButton}>
                Explore Courses
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
