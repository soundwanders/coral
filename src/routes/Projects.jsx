import { React } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import ProjectCards from '../components/ProjectCards';
import ProjectsTimeline from '../components/Timeline';
import Fish from '../components/common/Fish';
import { FishWrapper } from '../components/common/FishWrapper';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White, CardShadow } from '../utilities';
import DesktopBanner from '../assets/OceanDesktop.svg';
import MobileBanner from '../assets/OceanMobile.svg';
import ReefBanner from '../assets/ReefBanner.png';
import { GiOctopus } from 'react-icons/gi';

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
            <TimelineSection>
              <ProjectsTimeline />
            </TimelineSection>
            <ProjectCards />
            <ReefFooter>
              <AnimationTrack>
                <FishWrapper>
                  <Fish />
                </FishWrapper>
              </AnimationTrack>
            </ReefFooter>
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

  div {
    align-content: space-around;
    padding: 0.5rem 0.25rem;
    border-radius: 0.675rem;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1028px) {
      height: 100%;
      padding: 0;
    }
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      background-color: #172854;
    }
  }

  div:nth-child(1) {
    grid-column: span 2;
    border: none;
  }

  div:nth-child(2) {
    grid-row: span 4;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      min-height: max-content;
      color: ${White};
    }
  }

  div:nth-child(9) {
    grid-column: span 3;
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
  flex: 1;
  flex-direction: column;
  align-content: center;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex: 0;
  padding-left: 1rem;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1028px) {
    padding-left: 1rem;
    flex-basis: 20%;
  }
`;

export const Photo = styled.img`
  width: 2.6rem;
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
  margin: 0.675rem auto;
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
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  background-color: #172854;
  color: ${White};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-decoration: underline;
    text-decoration-color: rgba(250, 250, 250, 0.2);
    text-underline-offset: 0.5rem;
  }
`;

export const CardText = styled.p`
  font-size: 0.825rem;
  font-weight: 600;
`;

export const BadgeContainer = styled.p`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0.5rem 0 0 0;
  }
`;

const ReefFooter = styled.div`
  background: transparent;
`;

const AnimationTrack = styled.div`
  display: inline-block;
  width: 85%;
  margin-left: 1rem;
  background-color: transparent !important;
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 8vmax;
  }
`;

const TimelineSection = styled.div`
  max-height: 540px;
  overflow-y: auto;
`;

export const TimelineWrapper = styled.div`
  height: max-content;
  overflow: auto;
  background-color: #172854;
  padding: 2rem 0;
`;

export default Projects;
