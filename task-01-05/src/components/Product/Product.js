import PropTypes from 'prop-types';
import './Product.css';
import { useState } from 'react';

const Product = ({ category, name, price }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="product">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
      <div className="star-rating">
        {
          // create empty array of length 5 and map actual html buttons and render them
          [...Array(5)].map((star, index) => {
            //index is incremented by 1 so we would have indexes from 1 to 5
            index += 1;
            //return mapped button to outputed map array
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? 'on' : 'off'}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })
        }
      </div>
      <p className="price">{price}</p>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
