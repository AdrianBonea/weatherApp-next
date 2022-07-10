import styled from 'styled-components';

export const StyledSearch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
  border: 1px solid #ccc;
  background-color: #adadad;
  &:focus {
    outline: none;
  }
`;
