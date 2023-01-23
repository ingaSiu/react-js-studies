import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid #ff8040;
  border-radius: 5px;
  padding: 9px;
  font-weight: 600;
  color: ${(props) => props.color || 'white'};
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColor || '#ff8040'};
  &:hover {
    background-color: #e57339;
    color: black;
  }
`;

export const Btndiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const Button = ({ color, backgroundColor, text, onClickFnc }) => {
  return (
    <>
      <ButtonStyle color={color} backgroundColor={backgroundColor} onClick={onClickFnc}>
        {text}
      </ButtonStyle>
    </>
  );
};
export default Button;
