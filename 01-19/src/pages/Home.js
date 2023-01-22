import { useState } from 'react';
import Footer from '../components/Footer';
import Card from '../components/PetCard';
import { footerText } from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import styled from 'styled-components';

const Btndiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
const Home = () => {
  const [petsData, setPetsData] = useState([
    {
      name: 'namae',
    },
  ]);
  return (
    <div>
      <Navbar />
      {petsData &&
        petsData.map((petData) => {
          return (
            <Card name={petData.name}>
              <Btndiv></Btndiv>
              <Button color="red" text="test"></Button>
            </Card>
          );
        })}

      <Footer>{footerText}</Footer>
    </div>
  );
};
export default Home;
