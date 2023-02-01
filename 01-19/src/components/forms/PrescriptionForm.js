import { FormDiv, FormName, FormLabel, FormInput } from './styledFormElements';
import Button from '../Button';

const AddPrescription = ({ medId, petId, comment }) => {
  return (
    <FormDiv>
      <FormName>Add prescription</FormName>
      <FormLabel>Add medication id</FormLabel>
      <FormInput value={medId} />
      <FormLabel>Add pet id</FormLabel>
      <FormInput value={petId} />
      <FormLabel>Add comment</FormLabel>
      <FormInput value={comment} />
      <Button text="Add prescription" />
    </FormDiv>
  );
};

export default AddPrescription;
