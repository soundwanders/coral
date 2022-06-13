import React from 'react';
import styled from 'styled-components';
import {
  ThemeColor,
  DarkTheme,
  White,
  PrimaryBadgeColor,
  PaidGreen,
  LateRed,
} from '../../utilities';

const BadgeTypes = ({
  content,
  tech = false,
  scope = false,
  glowTags = false,
  paid = false,
  late = false,
  charts = false,
  active = false,
  tasks = false,
}) => {
  return (
    <Badge
      tech={tech}
      scope={scope}
      glowTags={glowTags}
      paid={paid}
      late={late}
      charts={charts}
      active={active}
      tasks={tasks}
    >
      {content}
    </Badge>
  );
};

const Badge = styled.span`
  padding: 0.3rem 1rem;
  margin: 0.25rem;
  border: 0px solid transparent;
  border-radius: 1rem;
  font-weight: 500;
  color: ${White};
  background-color: ${PrimaryBadgeColor};
  cursor: pointer;

  ${({ tech }) =>
    tech &&
    `
      background-color: transparent;
      border: 0.05rem solid ${ThemeColor};
      color:${ThemeColor};
    `}

  ${({ scope }) =>
    scope &&
    `
      font-size: 0.85rem;
      background-color: ${White};
      border: 0.05rem solid ${ThemeColor};
      color:${ThemeColor};
      margin: 0 1.4rem 0 0;
      @media screen and (max-width: 1080px) {
        margin: 0.2rem auto;
      }
    `}

    ${({ glowTags }) =>
    glowTags &&
    `
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      margin-top: 0.8rem;
      font-weight: 500;
      background-color: #fffab1;
      color: ${DarkTheme};
    `}

    ${({ paid }) =>
    paid &&
    `
      background-color: #70e00041;
      color: ${PaidGreen};
    `}

    ${({ late }) =>
    late &&
    `
      background-color: #ff595e41;
      color: ${LateRed};
    `}

    ${({ charts }) =>
    charts &&
    `
      position: relative;
      bottom: 0.1rem;
      left: 1.125rem;
      background-color: ${White};
      color: ${DarkTheme};
      font-size: 0.825rem;
      font-weight: 600;
      padding: 0.175rem 0.525rem;
      margin: 0; 
      cursor: default;

     @media screen and (max-width: 1080px) {
        bottom: 0.1rem;
      }
    `}


    ${({ active }) =>
    active &&
    `
        background-color: #b8ffb8;
        color: ${DarkTheme};
        font-size: 0.65rem;
        font-weight: 600;
        padding: 0.2rem 0.4rem;
        margin: 0; 
        cursor: default;
        @media screen and (max-width: 1080px) {
          font-size: 0.65rem;
          padding: 6px 8px;
        }
      `}

    ${({ tasks }) =>
    tasks &&
    `
        background-color: #fffab1;
        color: ${DarkTheme};
        font-size: 0.65rem;
        font-weight: 600;
        padding: 0.2rem 0.4rem;
        margin: 0 0 0 1rem; 
        cursor: default;
        @media screen and (max-width: 1080px) {
          font-size: 0.65rem;
          padding: 6px 8px;
        }
      `}
`;

export default BadgeTypes;
