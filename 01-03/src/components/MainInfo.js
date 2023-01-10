import { text } from './Text';

const MainInfo = ({ children }) => {
  return (
    <div className="main-info">
      <div className="info-wrap">
        <h1>Content</h1>
        <p>{text}</p>
        <h3>Sub Header</h3>
        <p> {text} </p>
      </div>

      {children}
    </div>
  );
};

export default MainInfo;
