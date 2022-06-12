 import { React } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import ProjectCards from '../components/ProjectCards';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White, DarkTheme } from '../utilities';
import { GiOctopus } from 'react-icons/gi';
import DesktopBanner from '../assets/OceanDesktop.svg';
import MobileBanner from '../assets/OceanMobile.svg';
import ReefBanner from '../assets/ReefBanner.png';

const Projects = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Title>
          Coral Projects <GiOctopus />{' '}
        </Title>
        <Underline />
        <FlexContainer>
          <ProjectGrid>
            <BannerSection />
            <div>2</div>
            <ProjectCards />
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

const ProjectGrid = styled.div`
  display: grid;
  width: 85%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  div {
    background-color: ${DarkTheme};
    color: ${White};
    padding: 0.3rem;
  }

  div:nth-child(1) {
    grid-column: span 2;
  }

  div:nth-child(2) {
    grid-row: span 4;
    background-color: ${DarkTheme};
  }

  div:nth-child(9) {
    grid-column: span 3;
    background-color: ${White};
    background-image: url(${ReefBanner});
    background-size: contain; 
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      min-height: 8vmax;
    }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    div:nth-child(1) {
      grid-column: auto;
    }

    div:nth-child(9) {
      grid-column: auto;
    }
    }
  }
`;

const BannerSection = styled.div`
  background-color: ${DarkTheme};
  background-image: url(${DesktopBanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    7background-image: url(${MobileBanner});
    background-size: cover;
    min-height: 8vmax;
  }
`;

export const GridSection = styled.div``;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex: 1;
  background-color: ${DarkTheme};

  &:nth-child(2) {
    flex-basis: 70%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: auto;
  align-content: start;
`;

export const CardText = styled.span`
  color: ${White};
  font-size: 0.725rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.725rem;
  }
`;

export const Photo = styled.img`
  width: 3rem;
`;

export default Projects;
