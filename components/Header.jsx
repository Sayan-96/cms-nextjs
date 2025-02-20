// components/Header.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className={styles.customNavbar}>
      <Container>
        <Navbar.Brand href="/">CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} href="/" passHref className={styles.navLink}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="/courses" passHref className={styles.navLink}>
                Courses
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="/login" passHref className={styles.navLink}>
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="/register" passHref className={styles.navLink}>
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
