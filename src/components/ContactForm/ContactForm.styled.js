import styled from 'styled-components';
import { Form as StyledForm, Field as StyledField } from 'formik';

export const SectionInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 400px;
  border: 1px black solid;
  padding: 5px;
`;
export const Form = styled(StyledForm)`
  margin-top: 18px;
  margin-bottom: 36px;
`;
export const Field = styled(StyledField)`
  display: block;
  margin: 8px 0;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 18px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: #000;
  color: #fff;

  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;
