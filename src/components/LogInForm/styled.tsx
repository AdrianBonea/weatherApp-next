import styled from 'styled-components';

export const StyledLogInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const StyledSubmit = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  background-color: #ccc;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`;

export const StyledError = styled.p`
  color: red;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
`;
