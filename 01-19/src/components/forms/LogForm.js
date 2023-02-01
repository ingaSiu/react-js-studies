import { FormDiv, FormName, FormLabel, FormInput } from './styledFormElements';
import Button from '../Button';

const AddLog = ({ petId, description, logStatus }) => {
  return (
    <FormDiv>
      <FormName>Add pet log</FormName>
      <FormLabel>Add pet id</FormLabel>
      <FormInput value={petId} />
      <FormLabel>Description of problem</FormLabel>
      <FormInput value={description} />
      <FormLabel>Status</FormLabel>
      <FormInput value={logStatus} />
      <Button text="Add pet log" />
    </FormDiv>
  );
};

export default AddLog;
