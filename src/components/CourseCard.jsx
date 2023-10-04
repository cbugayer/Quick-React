import './CourseCard.css';

const CourseCard = ({id, course, selected, unselectables, toggleSelected}) => (
    <div className="product card m-1 p-2" onClick={() => toggleSelected(id)}>
        <div className= {`card-body 
                            ${selected.includes(id) ? 'selected' : ''} 
                            ${unselectables.includes(id) ? 'unselectable' : ''}`}>
            <h5 className="card-title">{ course.term } CS { course.number}</h5>
            <h6 className="card-text">{ course.title }</h6>
        </div>
        <div className="card-footer">{ course.meets }</div>
    </div>
);

export default CourseCard;