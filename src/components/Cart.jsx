import './Cart.css';

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <div>
          <h2>The course plan is empty</h2>
          <p>Please select some courses by clicking them</p>
        </div>
      : selected.map(course => (
          <div key={course}>
            {`CS ${course[1].number}:\n${course[1].title}\n${course[1].meets}`}
            {`\n-----------------------------`}
          </div>
        ))
    }
  </div>
);

export default Cart;