import { FormDiv, FormName, FormLabel, FormInput } from './styledFormElements';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { vetApiUrl } from '../../consts/vetApiUrl';

const AddMeds = ({ name, description, onSubmitFunc }) => {
  const [medName, setMedName] = useState(name);
  const [medDescription, setMedDescription] = useState(description);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${vetApiUrl}/meds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: medName,
        description: medDescription,
      }),
    }).then((response) => {
      if (response.ok) {
        setMedName('');
        setMedDescription('');
      } else {
        console.error('Could not add medicine');
      }
    });
  };

  return (
    <FormDiv onSubmit={handleSubmit}>
      <FormName>Add Medications</FormName>

      <FormLabel>Medication name</FormLabel>
      <FormInput type="text" value={medName} onChange={(event) => setMedName(event.target.value)}></FormInput>
      <FormLabel>Medication description</FormLabel>
      <FormInput
        type="text"
        value={medDescription}
        onChange={(event) => setMedDescription(event.target.value)}
      ></FormInput>
      <Button text="Add new medicine"></Button>
    </FormDiv>
  );
};

AddMeds.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  onSubmitFunc: PropTypes.func,
};

AddMeds.defaultProps = {
  name: '',
  description: '',
};

export default AddMeds;
