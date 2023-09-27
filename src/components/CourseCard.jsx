import './CourseCard.css';

const CourseCard = ({ course }) => (
    <div className="card m-1 p-2=">
        <div className="card-body">
            <h5 className="card-title">{ course.term } CS { course.number}</h5>
            <h6 className="card-text">{ course.title }</h6>
        </div>
        <div className="card-footer">{ course.meets }</div>
    </div>
);

export default CourseCard;