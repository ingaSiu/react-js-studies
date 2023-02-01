import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: green;
`;

const Topbar = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log(darkMode);

  return (
    <Container>
      <h2>My logo</h2>
      <nav style={{ display: 'flex', gap: 30 }}>
        <div onClick={() => navigate('/')}>Home</div>
        <div onClick={() => navigate('/contacts')}>Contacts</div>
        <div>{darkMode ? <FaSun onClick={toggleDarkMode} /> : <FaMoon onClick={toggleDarkMode} />} mode activated</div>
      </nav>
    </Container>
  );
};

export default Topbar;

