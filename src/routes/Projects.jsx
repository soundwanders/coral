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
            <ReefFooter></ReefFooter>
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
  grid-gap: 0.3rem;
  border-radius: 1rem;

  div {
    background-color: #172854;
    color: ${White};
    align-content: space-around;
    padding: 0.5rem 0.25rem;

    @media (min-width: 1028px) {
      height: 100%;
      padding: 0;
    }
  }

  div:nth-child(1) {
    grid-column: span 2;
  }

  div:nth-child(2) {
    grid-row: span 4;
    background-color: #172854;
  }

  div:nth-child(9) {
    grid-column: span 3;
    background-color: ${White};
    background-image: url(${ReefBanner});
    background-size: contain;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    div:nth-child(1) {
      grid-column: auto;
    }
    div:nth-child(9) {
      grid-column: auto;
      background-size: cover;
      min-height: 8vmax;
    }
  }
`;

const BannerSection = styled.div`
  background-color: #172854;
  background-image: url(${DesktopBanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    background-image: url(${MobileBanner});
    background-size: cover;
    min-height: 8vmax;
  }
`;

export const GridWrapper = styled.div``;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex: 1;
  background-color: ${DarkTheme};

  @media (min-width: 1080px) {
    flex-basis: 60%;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 1rem;

  @media (min-width: 1028px) {
    height: 100%;
    padding-left: 1.5rem;
    flex-basis: 18%;
  }
`;

export const Photo = styled.img`
  width: 3rem;
  height: 3rem;
  align-self: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0 auto;
    padding: 0.5rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 0.2rem;
  padding: 1rem 0.5rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    grid-row-gap: 0.9rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: auto;
  align-content: start;
`;

export const CardText = styled.p`
  color: ${White};
  font-size: 0.75rem;
  font-weight: 600;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.7rem;
  }
`;

const ReefFooter = styled.div``;

export default Projects;
