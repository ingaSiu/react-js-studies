import styled from 'styled-components';

const ButtonStyle = styled.div`
  padding: 10px;
  background-color: red;
`;

const Text = styled.p`
  color: white;
`;

const StyledButton = () => {
  return (
    <ButtonStyle>
      <Text>Button</Text>
    </ButtonStyle>
  );
};

export default StyledButton;
