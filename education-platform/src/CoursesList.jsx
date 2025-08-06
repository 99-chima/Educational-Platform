import { Row, Col } from 'react-bootstrap';
import CourseCard from './CourseCard';

const CoursesList = ({ course }) => {
  // Add this safety check:
  if (!course || course.length === 0) {
    return <p>No courses found.</p>;
  }

  return (
    <Row>
      {course.map(courseItem => (
        <Col key={courseItem.id}>
          <CourseCard course={courseItem} />
        </Col>
      ))}
    </Row>
  );
};

export default CoursesList;