import './CourseCards.css';
import TermPage from './TermPage';

const CourseCards = ({ courses, selected, unselectables, toggleSelected, toggleUnselectables }) => (
    TermPage(courses, selected, unselectables, toggleSelected, toggleUnselectables)
);

export default CourseCards;
