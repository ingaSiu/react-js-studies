import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { vetApiUrl } from '../consts/vetApiUrl';
import { Container } from '../components/otherStyledComponents';
import Footer, { footerText } from '../components/Footer';
import PageName from '../components/PageName';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const MedCard = styled.div`
  border: 1px solid violet;
  display: flex;
  width: 15%;
  flex-direction: column;
`;
const MedText = styled.p`
  font-size: 1rem;
  padding: 10px;
  margin: 5px;
`;

const Meds = () => {
  const [medsData, setMedsData] = useState(undefined);

  useEffect(() => {
    fetch(`${vetApiUrl}/meds`)
      .then((response) => response.json())
      .then((response) => {
        setMedsData(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <PageName title="Medications list:">
        <Button text="Add medication" />
      </PageName>
      <Container>
        {medsData &&
          medsData
            .filter((medData) => medData.name)
            .map((medData) => {
              return (
                <MedCard key={medData.id}>
                  <MedText>Medication id: {medData.id}</MedText>
                  <MedText>Medication Name: {medData.name}</MedText>
                  <MedText>Description: {medData.description}</MedText>
                </MedCard>
              );
            })}
      </Container>
      <Footer>{footerText}</Footer>
    </div>
  );
};

export default Meds;
