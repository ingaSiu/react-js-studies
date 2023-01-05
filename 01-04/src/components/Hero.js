const Hero = ({ title, subtitle, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="hero">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Hero;
