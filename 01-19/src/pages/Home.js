import { useState } from 'react';
import Footer from '../components/Footer';
import Card from '../components/PetCard';
import { footerText } from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import styled from 'styled-components';
import AddPet from '../components/PetForm';

const Btndiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
const Home = () => {
  return (
    <div>
      <Navbar />

      <AddPet></AddPet>
      <Footer>{footerText}</Footer>
    </div>
  );
};
export default Home;
