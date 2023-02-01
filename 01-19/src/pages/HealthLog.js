import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { vetApiUrl } from '../consts/vetApiUrl';
import Navbar from '../components/Navbar';
import PageName from '../components/PageName';
import Button from '../components/Button';
import { Btndiv } from '../components/Button';
import { Container, FormContainer } from '../components/otherStyledComponents';
import AddLog from '../components/forms/LogForm';
import AddPrescription from '../components/forms/PrescriptionForm';

const HealthLog = () => {
  const [logsData, setLogsData] = useState(undefined);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible1, setIsFormVisible1] = useState(false);

  const getLogs = (id) => {
    fetch(`${vetApiUrl}/logs/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setLogsData(response);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getLogs();
  }, []);
  return (
    <div>
      <Navbar />
      <PageName title="Health records">
        <Btndiv>
          <Button text="Add prescription" onClickFnc={() => setIsFormVisible1(!isFormVisible1)} />
          <Button
            text="Add log"
            color="#ff8040"
            backgroundColor="white"
            onClickFnc={() => setIsFormVisible(!isFormVisible)}
          />
        </Btndiv>
      </PageName>
      {isFormVisible && (
        <FormContainer>
          <AddLog></AddLog>
        </FormContainer>
      )}
      {isFormVisible1 && (
        <FormContainer>
          <AddPrescription></AddPrescription>
        </FormContainer>
      )}
      <Container></Container>
    </div>
  );
};

export default HealthLog;
