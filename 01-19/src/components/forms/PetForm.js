import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { vetApiUrl } from '../../consts/vetApiUrl';
import { FormDiv, FormName, FormLabel, FormInput } from './styledFormElements';
import Button from '../Button';

const AddPet = ({ name, dob, client_email, onSubmitFunc }) => {
  const [petName, setPetName] = useState(name);
  const [petDob, setPetDob] = useState(dob);
  const [petClientEmail, setPetClientEmail] = useState(client_email);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${vetApiUrl}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: petName,
        dob: petDob,
        client_email: petClientEmail,
      }),
    }).then((response) => {
      if (response.ok) {
        setPetName('');
        setPetDob('');
        setPetClientEmail('');
        onSubmitFunc();
      } else {
        console.error('Could not add pet');
      }
    });
  };
  return (
    <FormDiv onSubmit={handleSubmit}>
      <FormName>Add Pet</FormName>
      <FormLabel>Pet name</FormLabel>
      <FormInput type="text" value={petName} onChange={(event) => setPetName(event.target.value)}></FormInput>
      <FormLabel>Date of birth</FormLabel>
      <FormInput type="text" value={petDob} onChange={(event) => setPetDob(event.target.value)}></FormInput>
      <FormLabel>Client email</FormLabel>
      <FormInput
        type="text"
        value={petClientEmail}
        onChange={(event) => setPetClientEmail(event.target.value)}
      ></FormInput>
      <Button text="Add new pet" />
    </FormDiv>
  );
};

AddPet.propTypes = {
  name: PropTypes.string,
  dob: PropTypes.string,
  client_email: PropTypes.string,
  onSubmitFunc: PropTypes.func,
};

AddPet.defaultProps = {
  name: '',
  dob: '',
  client_email: '',
};

export default AddPet;
