import CourseCard from './CourseCard';
import './CourseCards.css';

const CourseCards = ({ courses }) => (
    <div className="product-list">
        { courses.map(course => <CourseCard key={course.id} course={course} />) }
    </div>
);

export default CourseCards;