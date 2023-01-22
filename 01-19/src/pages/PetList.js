import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Card from '../components/PetCard';
import { footerText } from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import styled from 'styled-components';
import { petsApiUrl } from '../consts/petsApiUrl';
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

const Btndiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const PetList = () => {
  const [petsData, setPetsData] = useState(undefined);

  useEffect(() => {
    fetch(`${petsApiUrl}/pets`)
      .then((response) => response.json())
      .then((response) => {
        setPetsData(response);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        {petsData &&
          petsData.map((petData) => {
            return (
              <Card
                key={petData.id}
                name={petData.name}
                dob={new Date(petData.dob).toDateString()}
                client_email={petData.client_email}
              >
                <Btndiv>
                  <Button text="View log"></Button>
                  <Button backgroundColor="white" color="orange" text="delete"></Button>
                </Btndiv>
              </Card>
            );
          })}
      </Container>

      <Footer>{footerText}</Footer>
    </div>
  );
};

export default PetList;
