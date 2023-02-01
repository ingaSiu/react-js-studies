import './Product.css';
import ArrowButton from '../ArrowButton/ArrowButton';
const Product = ({ imageUrl, title, price, description, availability, category, children }) => {
  return (
    <div className="card-wrapper">
      cd ..cd
      <div className="img-wrapper">
        <img className="painting" src={imageUrl} alt="" />
      </div>
      <div className="info-wrapper">
        <div className="title-div">
          <p className="title">{title}</p>
          <ArrowButton />
        </div>

        <p style={{ fontWeight: 'bold' }}>{price} €‎</p>
        <p className="text">{description}</p>
        <p className="text" style={{ fontWeight: 'bold' }}>
          Availability: <span style={{ color: 'green' }}>{availability}</span>{' '}
        </p>
        {children}
        <hr className="line" />
        <p className="text"> Category: {category}</p>
      </div>
    </div>
  );
};
export default Product;
