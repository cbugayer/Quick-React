import './CourseCard.css';

const CourseCard = ({ course }) => (
    <div className="card m-1 p-2=">
        <div className="card-body">
            <h5 className="card-title">{ course.title }</h5>
            <p className="card-text">{ course.description }</p>
        </div>
        <div className="card-footer">{ course.meets }</div>
    </div>
);

export default CourseCard;