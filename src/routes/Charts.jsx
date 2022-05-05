import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import GrowthChart from '../components/charts/Growth';
import SalesChart from '../components/charts/Sales';
import ProjectsChart from '../components/charts/Projects';
import OverviewChart from '../components/charts/Overview';
import { TotalClients, TotalProjects, TotalRevenue, White, HoverEffect, CardShadow } from '../utilities';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { GiJugglingSeal } from 'react-icons/gi';

const Charts = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Title>
          Coral Charts <GiJugglingSeal />{' '}
        </Title>
        <Underline />
        <FlexContainer>
          <Grid>
            <InfoCard>{TotalRevenue}</InfoCard> <span> Revenue </span>
            <InfoCard>{TotalProjects}</InfoCard> <span> Projects </span>
            <InfoCard>{TotalClients}</InfoCard> <span> Clients </span>

            <CardContainer>
              <GrowthChart />
            </CardContainer>
            <CardContainer>
              <SalesChart />
            </CardContainer>
            <CardContainer>
              <ProjectsChart />
            </CardContainer>
            <CardContainer>
              <OverviewChart />
            </CardContainer>
          </Grid>
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

const Grid = styled.div`
  display: grid;
  width: 80%;
  height: 5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 3rem 4rem;
  white-space: nowrap;
  justify-content: start;
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 3rem 0;
    white-space: nowrap;
    width; 90%
  }
`;

const InfoCard = styled.div`
  width: 80%;
  height: 6rem;
  padding: 0 2rem;
  margin: 0;
  border-radius: 1rem;
  background: ${White};
  box-shadow: ${CardShadow};
  transition: 0.2s ease-in-out;
  font-size: 3.5rem;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }
`;

const CardContainer = styled.div`
  height: 100%;
  padding: 0 2rem;
  border-radius: 1rem;
  background: ${White};
  box-shadow: ${CardShadow};
  transition: 0.2s ease-in-out;
  z-index: 0;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }
`;

export default Charts;
