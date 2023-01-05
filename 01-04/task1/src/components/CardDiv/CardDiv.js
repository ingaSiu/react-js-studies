import './CardDiv.css';
const CardDiv = ({ imageUrl, title }) => {
  return (
    <div className="card-div">
      <img src={imageUrl} alt="" className="card-img"></img>
      <p className="card-text">{title}</p>
    </div>
  );
};

export default CardDiv;
