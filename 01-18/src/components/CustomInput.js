import styled from 'styled-components';

const CustomInput = styled.input`
  padding: ${(props) => {
    if (props.size === 'sm') return '5px';
    if (props.size === 'lg') {
      return '10pxem';
    }
    return '20px';
  }};
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default CustomInput;
