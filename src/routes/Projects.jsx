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
    background-color: inherit;
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

export const GridWrapper = styled.div`
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${DarkTheme};
`;

export const PhotoWrapper = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 1rem;

  @media (min-width: 1028px) {
    height: 100%;
    padding-left: 1.5rem;
    flex-basis: 20%;
  }
`;

export const Photo = styled.img`
  width: 2.675rem;
  height: auto;
  align-self: center;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0.5rem;
    width: 3.7rem;
    height: 3.7rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 0.9rem auto;
  grid-gap: 0;

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
`;

export const CardText = styled.p`
  color: ${White};
  font-size: 0.8rem;
  font-weight: 600;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-decoration: underline;
    text-decoration-color: #b3b3b3;
    text-underline-offset: 0.5rem;
  }
`;

export const BadgeContainer = styled.p``;

const ReefFooter = styled.div``;

export default Projects;
