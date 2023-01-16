import './Button.css';
import { useState } from 'react';
const Button = () => {
  const [count, setCount] = useState(1);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleSubstractCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="wrapper">
      <div className="count-wrapper">
        <div className="btn-setcount" onClick={handleSubstractCount}>
          -
        </div>
        <div className="set-number">{count}</div>
        <div className="btn-setcount" onClick={handleAddCount}>
          +
        </div>
      </div>

      <button className="btn-add">Add to Cart</button>
    </div>
  );
};
export default Button;
