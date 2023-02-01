import Topbar from '../components/Topbar';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const mainColor = '#ffffff';
export const mainDarkColor = 'black';

export const getMainColor = (darkMode) => {
  return darkMode ? mainDarkColor : mainColor;
};

const Wrapper = styled.div`
  height: 100vw;
  background-color: ${(props) => getMainColor(props.darkMode)};
`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <Topbar></Topbar>
      <Wrapper backgroundColor={getMainColor(darkMode)}></Wrapper>
    </div>
  );
};

export default Home;
