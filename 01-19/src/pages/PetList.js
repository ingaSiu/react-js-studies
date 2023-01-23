import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer, { footerText } from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/PetCard';
import Button, { Btndiv } from '../components/Button';
import PageName from '../components/PageName';
import { vetApiUrl } from '../consts/vetApiUrl';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  gap: 10px;
  margin: 20px;
`;

const PetList = () => {
  const [petsData, setPetsData] = useState(undefined);

  const getPets = () => {
    fetch(`${vetApiUrl}/pets`)
      .then((response) => response.json())
      .then((response) => {
        setPetsData(response);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPets();
  }, []);

  const deleteHandle = (id) => {
    fetch(`${vetApiUrl}/pets/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        getPets();
      } else {
        console.error('Could not delete pet');
      }
    });
  };
  return (
    <div>
      <Navbar />
      <PageName title="Pet list">
        <Button text="Add pet"></Button>
      </PageName>
      <Container>
        {petsData &&
          petsData.map((petData) => {
            return (
              <Card
                key={petData.id}
                name={petData.name}
                dob={new Date(petData.dob).toLocaleDateString('lt')}
                client_email={petData.client_email}
              >
                <Btndiv>
                  <Button text="View log"></Button>
                  <Button
                    backgroundColor="white"
                    color="orange"
                    text="delete"
                    onClickFnc={() => deleteHandle(petData.id)}
                  ></Button>
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
