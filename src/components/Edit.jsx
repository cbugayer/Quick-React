import './Edit.css';

const Cart = ({id, course}) => (
  <div className="edit">
    {
        <div key={course}>
            {`CS ${course.number}:\n${course.title}\n${course.meets}`}
            {`\n-----------------------------`}
        </div>
    }
  </div>
);

export default Cart;