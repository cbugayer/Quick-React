import './CourseCard.css';
import Modal from './Modal';
import { useState } from 'react';
import Edit from './Edit';
import { useAuthState } from '../utilities/firebase';

const CourseCard = ({id, 
                    course, 
                    selected, 
                    unselectables, 
                    toggleSelected, 
                    toggleUnselectables}) => {
    
    const [auth] = useAuthState();
    console.log(auth);
    const [openEdit, setOpenEdit] = useState(false);
    const openEditModal = () => setOpenEdit(true);
    const closeEditModal = () => setOpenEdit(false);
                        

    return (
        // if the course is selected, clicking will unselect it and call toggleUnselectables
        // if the course is unselectable, clicking will do nothing
        <div>
            <div className='product card m-1 p-2' onClick={() => 
                {unselectables.includes(id)
                ? null
                : (toggleSelected(id), toggleUnselectables(id))}}>
                <div className= {`card-body 
                                    ${selected.includes(id) ? 'selected' : ''} 
                                    ${unselectables.includes(id) ? 'unselectable' : ''}`}>
                    <h5 className="card-title">{ course.term } CS { course.number}</h5>
                    <h6 className="card-text">{ course.title }</h6>
                </div>
                <div className="card-footer">
                    <div className='footer-child1'>
                        { course.meets } 
                    </div>
                    <div className='footer-child2'>
                        {auth != null && (
                            <div>
                                <button className="btn btn-outline-secondary btn-block btn-sm" 
                                    onClick={(e) => {e.stopPropagation(); openEditModal()}}>Edit</button>
                            </div>)}
                    </div>
                </div>
            </div> 
            <div className={"product-list"}>
                <Modal open={openEdit} close={closeEditModal}> 
                    <Edit id={id} course={course} />
                </Modal>
            </div>
        </div>
    );
};

export default CourseCard;