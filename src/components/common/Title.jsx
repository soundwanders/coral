import styled from 'styled-components';
import { DarkTheme } from '../../utilities';

export const Title = styled.h1`
  font-size: 4rem;
  margin-left: 0.5rem;
  color: ${DarkTheme};

  svg {
    margin: 0 0 -0.2rem 0.1rem;
    font-size: 2.7rem;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    text-align: center;
    font-size: 3rem;

    svg {
      margin: 0 0 -0.1rem 0;
      font-size: 2rem;
    }
  }
`;
