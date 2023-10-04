import './CourseCards.css';
import TermPage from './TermPage';

const CourseCards = ({ courses, selected, unselectables, toggleSelected }) => (
    TermPage(courses, selected, unselectables, toggleSelected)
);

export default CourseCards;
