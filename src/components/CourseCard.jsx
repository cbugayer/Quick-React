import './CourseCard.css';
import Modal from './Modal';
import { useState } from 'react';

const [openEdit, setOpenEdit] = useState(false);
const openEditModal = () => setOpenEdit(true);
const closeEditModal = () => setOpenEdit(false);

const CourseCard = ({id, 
                    course, 
                    selected, 
                    unselectables, 
                    toggleSelected, 
                    toggleUnselectables}) => (


    
    // if the course is selected, clicking will unselect it and call toggleUnselectables
    // if the course is unselectable, clicking will do nothing
    <div className="product card m-1 p-2" onClick={() => 
        {unselectables.includes(id)
        ? null
        : (toggleSelected(id), toggleUnselectables(id))}}>
        <div className= {`card-body 
                            ${selected.includes(id) ? 'selected' : ''} 
                            ${unselectables.includes(id) ? 'unselectable' : ''}`}>
            <h5 className="card-title">{ course.term } CS { course.number}</h5>
            <h6 className="card-text">{ course.title }</h6>
        </div>
        <div className="card-footer">{ course.meets }</div>
        <button className="btn btn-outline-secondary" onClick={openEditModal}>Edit</button>
        <Modal open={openEdit} close={closeEditModal}> 
            <Edit id={id} course={course} />
        </Modal>
    </div>
);

export default CourseCard;