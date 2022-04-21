import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0.25rem 0 0.5rem 1rem;
  min-width: 0;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
