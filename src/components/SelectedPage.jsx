import { useState } from 'react';
import Modal from './Modal';
import Cart from './Cart';
import CourseCards from "./CourseCards";
import Unselectables from "./Unselectables";
import './SelectedPage.css';

const SelectedPage = ({courses}) => {
  const [selected, setSelected] = useState([]);
  const [openCart, setCartOpen] = useState(false);

  const openCartModal = () => setCartOpen(true);
  const closeCartModal = () => setCartOpen(false);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );
  // console.log('Selected courses:', selected);

  return (
    <div>
      <button className="btn btn-primary mb-1 p-2" onClick={openCartModal}>
        <i className="bi bi-cart-fill"></i>
        Class Cart
      </button>
      <Modal open={openCart} close={closeCartModal}> 
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