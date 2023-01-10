import './CustomButton.css';

// receive 'variant' as prop
// handle 3 variants: 'text' | 'contained' | 'outlined'
// all text is uppercased
// get hex of blue color
// style every button to match design

const CustomButton = ({ variant, children }) => {
  if (variant === 'text') {
    return <button className="button text">{children}</button>;
  } else if (variant === 'contained') {
    return <button className="button contained">{children}</button>;
  } else {
    return <button className="button outlined">{children}</button>;
  }
};

export default CustomButton;
