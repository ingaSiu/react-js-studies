import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, backgroundColor, children }) => {
  // {backgroudColor: backgroundColor} = {backgroundColor}
  // jei parametras atitinka kintamojo value, nereikia rasyti dukart
  return (
    <button className="styled-button" onClick={onClick} style={{ backgroundColor }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  // optional reiskia, kad nera privaloma
  backgroundColor: PropTypes.string, // optional string
  onClick: PropTypes.func, // optional function
  children: PropTypes.node.isRequired,
  // children yra nenuspejamas gali buti panaudotas ivairiai => optional any react thing
  // kai buna isRequired => turi visalaika kazka paduoti, jei nepaduos turi mest error
};
export default Button;
