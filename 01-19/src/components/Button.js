import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid orange;
  border-radius: 5px;
  padding: 8px;
  color: ${(props) => props.color || 'white'};
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColor || 'orange'};
`;

const Button = ({ color, backgroundColor, text }) => {
  return (
    <>
      <ButtonStyle color={color} backgroundColor={backgroundColor}>
        {text}
      </ButtonStyle>
    </>
  );
};
export default Button;
