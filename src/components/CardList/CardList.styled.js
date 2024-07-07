import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 320px;
  border-radius: 5px;
  box-shadow: 0 75px 97px rgba(0, 0, 0, .02275), 0 37.9688px 42.2859px rgba(0, 0, 0, .035), 0 15px 15.7625px rgba(0, 0, 0, .04725), 0 3.28125px 5.60781px rgba(0, 0, 0, .07), 0 75px 97px rgba(0, 0, 0, .02275), 0 37.9688px 42.2859px rgba(0, 0, 0, .035), 0 15px 15.7625px rgba(0, 0, 0, .04725), 0 3.28125px 5.60781px rgba(0, 0, 0, .07);
`;
