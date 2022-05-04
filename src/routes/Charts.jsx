import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import GrowthChart from '../components/charts/Growth';
import SalesChart from '../components/charts/Sales';
import ProjectsChart from '../components/charts/Projects';
import OverviewChart from '../components/charts/Overview';
import { TotalClients, TotalProjects, TotalRevenue } from '../utilities';
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
            <Card>{TotalRevenue}</Card>
            <Card>{TotalProjects}</Card>
            <Card>{TotalClients}</Card>

            <CardContainer>
              <GrowthChart />
            </CardContainer>
            <CardContainer>
              <ProjectsChart />
            </CardContainer>
            <Break />
            <CardContainer>
              <OverviewChart />
            </CardContainer>
            <CardContainer>
              <SalesChart />
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
  grid-auto-rows: 1fr;
  gap: 2rem 10%;
  white-space: nowrap;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    grid-template-columns: 1fr;
    gap: 4rem 0;
    white-space: nowrap;
  }
`;

const CardContainer = styled.div`
  width: 80%;
  height: 100%;
  background: lightgrey;
  padding: 0 2rem;
  margin: 0 1rem;
  border-radius: 2rem;
`;

const Card = styled.div`
  width: 100%;
  height: 6rem;
  background: lightgrey;
  padding: 0 2rem;
  margin: 0 1rem;
  border-radius: 2rem;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export default Charts;
