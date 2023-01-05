import './Hero.css';
const Hero = ({ title, textOne, textTwo, children }) => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>{title}</h1>
        <h4>{textOne}</h4>
        <h4>{textTwo}</h4>
        {children}
      </div>
    </div>
  );
};
export default Hero;
