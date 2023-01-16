import './ItemCard.css';

const ItemCard = ({ imageUrl, title, price, children }) => {
  return (
    <div className="card">
      <div className="img-div">
        <img className="card-image" src={imageUrl} alt="" />
      </div>
      <div className="info-div">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        {children}
      </div>
    </div>
  );
};
export default ItemCard;
