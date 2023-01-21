import styled from 'styled-components';

// import StyledButton from './components/StyledButton';
// import CustomButton from './components/CustomButton';
// import CustomInput from './components/CustomInput';

import CustomButton from '../components/CustomButton';
import StyledButton from '../components/StyledButton';
import CustomInput from '../components/CustomInput';
const Container = styled.div`
  padding: 40px;
  display: flex;
`;

const TomatoButton = styled(CustomButton)`
  background-color: tomato;
  color: white;
`;

const Examples = () => {
  // size: 'sm' | 'lg' | 'xl'
  const props = { size: 'sm', inputColor: 'rebeccapurple' };

  return (
    <div>
      <Container>
        <StyledButton />
      </Container>

      <Container>
        <CustomButton>My Button</CustomButton>
        <TomatoButton as="a" href="https://google.com">
          My different button
        </TomatoButton>
      </Container>
      <Container>
        <CustomInput defaultValue="Inga" />
        <CustomInput defaultValue="Inga" inputColor="red" size="lg" />
        <CustomInput defaultValue="Inga" inputColor={props.inputColor} size={props.size} />
      </Container>
    </div>
  );
};

export default Examples;
