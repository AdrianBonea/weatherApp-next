import styled from 'styled-components';

export const StyledCityList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 10px 0;
  background-color: #fafafa;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

export const StyledCityListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
