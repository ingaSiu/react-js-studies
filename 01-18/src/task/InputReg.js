import styled from 'styled-components';

const InputReg = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.inputColor || 'grey'};
  font-size: 15px;
  font-weight: ${(props) => props.fontWeight || 500};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  gap: 5px;
  width: 270px;
  &:hover {
    background-color: lavender;
    color: black;
    cursor: pointer;
  }
`;

export default InputReg;
