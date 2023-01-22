import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 170px;
  text-align: center;
`;
const PetName = styled.p`
  font-size: 25px;
`;
const Text = styled.p`
  font-size: 15px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const Card = ({ name, dob, client_email, children }) => {
  return (
    <CardWrapper>
      <PetName>{name}</PetName>
      <Text>{dob}</Text>
      <Text>{client_email}</Text>

      {children}
    </CardWrapper>
  );
};

export default Card;
