import styled from 'styled-components';

export const FormDiv = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  width: 250px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormLabel = styled.label`
  font-size: 20px;
  padding: 5px;
`;
export const FormName = styled.h2`
  text-align: center;
`;
export const FormInput = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;
