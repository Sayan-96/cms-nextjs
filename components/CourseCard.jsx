import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={course.image} className={styles.cardImage} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{course.title}</Card.Title>
        
        {/* Show short or full description based on state */}
        <Card.Text className={styles.cardDescription}>
          {showFullDescription ? course.description : `${course.description.substring(0, 100)}...`}
        </Card.Text>

        <div className={styles.cardFooter}>
          <span className={styles.cardRating}>
            <FaStar /> {course.rating}
          </span>
          <Button variant="primary" onClick={toggleDescription} className={styles.cardButton}>
            {showFullDescription ? 'Show Less' : 'View Details'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
