import { text } from './Text';
const InfoCards = () => {
  return (
    <div className="info-cards-wrapper">
      <div className="info-card">
        <h2>About</h2>
        <p> {text} </p>
      </div>

      <div className="info-card">
        <h2>Company</h2>
        <p> {text} </p>
      </div>
      <div className="info-card">
        <h2>Services</h2>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default InfoCards;
