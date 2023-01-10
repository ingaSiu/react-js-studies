import './Avatar.css';

const Avatar = ({ backgroundColor, color, children }) => {
  return (
    <div className="avatar" style={{ backgroundColor: backgroundColor, color: color }}>
      {children}
    </div>
  );
};

export default Avatar;
