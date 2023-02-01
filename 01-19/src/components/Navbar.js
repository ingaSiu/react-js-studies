import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  width: 100vw;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
`;
const IconText = styled.p`
  font-size: 30px;
  color: orange;
  font-weight: 800;
`;
const IconDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const NavLink = styled.div`
  color: orange;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  padding: 11px;
`;
const Navbar = () => {
  return (
    <NavbarDiv>
      <IconDiv>
        <Icon src="https://cdn-icons-png.flaticon.com/512/2930/2930655.png" />
        <IconText>vetbee</IconText>
      </IconDiv>
      <NavDiv>
        <NavLink as={Link} to="/pets">
          Pets
        </NavLink>
        <NavLink as={Link} to="/meds">
          Medication
        </NavLink>
        <NavLink as={Link} to="/logs">
          Health Logs
        </NavLink>
      </NavDiv>
    </NavbarDiv>
  );
};

export default Navbar;
