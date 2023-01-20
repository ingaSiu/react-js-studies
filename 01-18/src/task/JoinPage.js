import styled, { keyframes } from 'styled-components';
import InputReg from './InputReg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { SiKatacoda } from 'react-icons/si';
const inputIconSize = 23;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 90vw;
  height: 80vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Greeting = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: ${(props) => props.color || 'black'};
`;
const DetailsTextBold = styled.p`
  color: grey;
  font-size: 0.75rem;
  font-weight: 700;
`;
const DetailsText = styled.span`
  color: lightslategray;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  border: 1px solid black;
  flex: 2;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
  content: url('https://img.freepik.com/free-photo/young-beautiful-woman-bright-sportwear-isolated-gradient-pink-blue-background-neon-light_155003-24205.jpg?w=1380&t=st=1674154377~exp=1674154977~hmac=109c8967844b4d9c1210b3865a1ebccdd6a8982885e5be718628355a499ea930');
`;
const ImageText = styled.div`
  width: 400px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
  to{
    opacity: 0.75;
  }
  to{
    opacity: 1;
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 5s ease-in-out;
`;

const JoinPage = () => {
  return (
    <Container>
      <TextContainer>
        <FadeIn>
          {' '}
          <SiKatacoda size={70} />
        </FadeIn>
        <Greeting>Welcome back</Greeting>
        <DetailsTextBold>Please enter your details</DetailsTextBold>
        <InputReg justifyContent="left">Enter your email</InputReg>
        <InputReg backgroundColor="black" inputColor="white" fontWeight="600">
          Continue
        </InputReg>

        <DetailsText>OR</DetailsText>

        <InputReg fontWeight="700">
          <FcGoogle size={inputIconSize} />
          Continue with Google
        </InputReg>
        <InputReg fontWeight="700">
          <FaFacebook size={inputIconSize} color="blue" />
          Continue with Facebook
        </InputReg>
        <InputReg fontWeight="700">
          <FaApple size={inputIconSize} color="black" />
          Continue with Apple
        </InputReg>
        <DetailsTextBold>
          <DetailsText>Don't have account?</DetailsText> Sign up
        </DetailsTextBold>
      </TextContainer>
      <ImageWrapper>
        <ImageText>
          <Greeting></Greeting>
        </ImageText>
      </ImageWrapper>
    </Container>
  );
};

export default JoinPage;
