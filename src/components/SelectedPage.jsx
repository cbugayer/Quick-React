import { useState } from 'react';
import Modal from './Modal';
import Cart from './Cart';
import CourseCards from "./CourseCards";
import Unselectables from "./Unselectables";
import './SelectedPage.css';

const SelectedPage = ({courses}) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );
  console.log('Selected courses:', selected);

  return (
    <div>
      <button className="btn btn-primary mb-1 p-2" onClick={openModal}>
        <i className="bi bi-cart-fill"></i>
        Class Cart
      </button>
      <Modal open={open} close={closeModal}> 
        <Cart selected={courses.filter(x => selected.includes(x[0]))} />
      </Modal>
      <Unselectables 
        courses={courses} 
        selected={selected}
        toggleSelected={toggleSelected} 
      />
    </div>
    
  );
};

export default SelectedPage;