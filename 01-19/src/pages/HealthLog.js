import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { vetApiUrl } from '../consts/vetApiUrl';
import Navbar from '../components/Navbar';
import PageName from '../components/PageName';
import Button from '../components/Button';
import { Btndiv } from '../components/Button';
import { Container } from '../components/otherStyledComponents';

const HealthLog = () => {
  const [logsData, setLogsData] = useState(undefined);

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
          <Button text="Add prescription" />
          <Button text="Add log" color="#ff8040" backgroundColor="white" />
        </Btndiv>
      </PageName>
      <Container></Container>
    </div>
  );
};

export default HealthLog;
