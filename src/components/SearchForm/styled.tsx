import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 70%;
  height: 2rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #fff;
`;

export const StyledError = styled.p`
  color: #f00;
  font-size: 0.75rem;
  margin-bottom: 0;
  text-align: center;
`;

export const StyledSubmit = styled.input`
  width: 70%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #fff;
  cursor: pointer;
`;

export const StyledUl = styled.ul`
  width: 70%;
  height: auto;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  list-style: none;
  background-color: #fff;
`;

export const StyledLi = styled.li`
  width: 95%;
  height: 2rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #fff;
`;

export const StyledLink = styled.a`
  width: 60%;
  height: 2rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #c56464;
  }
`;
