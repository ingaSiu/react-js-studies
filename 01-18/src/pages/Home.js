import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.div`
  border: 1px solid darkgreen;
  width: 250px;
  height: 150px;
  margin: 20px;
`;
const Text = styled.h1`
  font-size: 2rem;
  color: blueviolet;
  cursor: pointer;
  text-align: center;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>
        <Text onClick={() => navigate(`/task`)}>LOGIN TASK</Text>
      </Title>
      <Title>
        <Text onClick={() => navigate(`/examples`)}>EXAMPLES</Text>
      </Title>
    </>
  );
};

export default Home;
