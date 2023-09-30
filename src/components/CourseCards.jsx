import './CourseCards.css';
import TermPage from './TermPage';

const CourseCards = ({ courses, selected, toggleSelected }) => (
    TermPage(courses, selected, toggleSelected)
);

export default CourseCards;
