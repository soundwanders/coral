import { React } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White } from '../utilities';
import { GiOctopus } from 'react-icons/gi';

const Projects = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <TitleWrapper>
          <Title>
            Coral Projects <GiOctopus />{' '}
          </Title>
        </TitleWrapper>
        <Underline />
        <FlexContainer>
          <ProjectGrid>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </ProjectGrid>
        </FlexContainer>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
`;

// const Grid = styled.div`
//   display: grid;
//   width: 80%;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-auto-rows: 1fr;
//   gap: 5rem 8%;
//   white-space: nowrap;
// 
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     grid-template-columns: 1fr;
//     gap: 4.25rem 0;
//     white-space: nowrap;
//   }
// `;


const ProjectGrid = styled.div`
  display: grid;
  width: 85%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  div {
    background-color: hotpink;
    color: ${White};
    font-size: 4vw;
    padding: 10px;
  }

  div:nth-child(1) {
    grid-column: span 2;
  }

  div:nth-child(2) {
    grid-row: span 4;
  }

  div:nth-child(9) {
    grid-column: span 3;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  padding: 0.6rem;
  min-width: min-content;
  list-style-type: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.05) 0px 2px 6px -2px;
  background: #fffdfa;
  font-weight: 500;

  &:nth-child(3) {
    font-size: 1.3rem;
  }
`;

export const Label = styled.span`
  display: flex;
  padding: 0.1rem 0;
  margin: 0.8rem 0 0.1rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #a4a4a4;
`;

export default Projects;
