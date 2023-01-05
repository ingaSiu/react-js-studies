import './InfoDiv.css';

const InfoDiv = ({ title, description, children }) => {
  return (
    <div className="info-div">
      <div className="information">
        <h1>{title}</h1>
        <p>{description} </p>
      </div>
      <div className="children-div">{children}</div>
    </div>
  );
};

export default InfoDiv;
