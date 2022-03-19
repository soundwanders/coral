import React from 'react';
import styled from 'styled-components';
import {ThemeColor, DarkTheme, White, PrimaryBadgeColor, PaidGreen, LateRed} from '../utilities';

const Badges = ({content, tech = false, scope = false, glowTags = false, paid = false, late = false}) => {
  return (
    <Div tech={tech} scope={scope} glowTags={glowTags} paid={paid} late={late}>
      {content}
    </Div>
  );
};

const Div = styled.span`
  padding: 0.3rem 1rem;
  margin: 0.25rem;
  border: 0px solid transparent;
  border-radius: 1rem;
  font-weight: 500;
  color: ${White};
  background-color: ${PrimaryBadgeColor};
  cursor: pointer;
}

  ${({tech}) =>
    tech &&
    `
      background-color: transparent;
      border: 0.05rem solid ${ThemeColor};
      color:${ThemeColor};
    `}

    ${({scope}) =>
    scope &&
    `
      background-color: ${White};
      border: 0.05rem solid ${ThemeColor};
      color:${ThemeColor};
      margin: 0 2rem 0 0;
      @media screen and (max-width: 960px) {
        margin: 0.2rem auto;
      }
    `}

  ${({glowTags}) =>
    glowTags &&
    `
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      margin-top: 0.8rem;
      font-weight: 500;
      background-color: #ffea94;
      color: ${DarkTheme};
    `}

  ${({paid}) =>
    paid &&
    `
      background-color: #70e00041;
      color: ${PaidGreen};
    `}

${({late}) =>
  late &&
  `
      background-color: #ff595e41;
      color: ${LateRed};
    `}
`;

export default Badges;
