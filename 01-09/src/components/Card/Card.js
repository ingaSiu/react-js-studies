import './Card.css';

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img className="img" src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
