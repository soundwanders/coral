import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Badges from '../components/common/Badges';
import Fish from '../components/common/Fish';
import Sidebar from '../components/Sidebar';
import ConversionsChart from '../components/charts/Conversions';
import GrowthChart from '../components/charts/Growth';
import OverviewChart from '../components/charts/Overview';
import ProjectsChart from '../components/charts/Projects';
import SalesChart from '../components/charts/Sales';

import {
  TotalClients,
  TotalProjects,
  TotalRevenue,
  White,
  HoverEffect,
  CardShadow,
} from '../utilities';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { GiJugglingSeal } from 'react-icons/gi';

const Analytics = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Title>
          Coral Analytics <GiJugglingSeal />{' '}
        </Title>
        <Underline />
        <FlexContainer>
          <Grid>
            <InfoCard>
              {TotalProjects} <Label>Projects</Label>{' '}
            </InfoCard>
            <InfoCard>
              0{TotalClients} <Label>Clients</Label>{' '}
            </InfoCard>
            <SalesCard>
              <Dollar>$</Dollar>
              {TotalRevenue} <Label>Sales</Label>{' '}
            </SalesCard>

            <CardContainer>
              <ConversionsChart />
              <ChartLabel>
                CONVERSIONS
                <Badges content="+ 21%" charts />
              </ChartLabel>
            </CardContainer>

            <OverviewWrapper>
              <OverviewChart />
            </OverviewWrapper>

            <CardContainer>
              <GrowthChart />
              <ChartLabel>
                ANNUAL GROWTH
                <Badges content="+ 8%" charts />
              </ChartLabel>
            </CardContainer>
            <CardContainer>
              <SalesChart />
              <ChartLabel>
                TOTAL REVENUE
                <Badges content="+ 15%" charts />
              </ChartLabel>
            </CardContainer>
            <CardContainer>
              <ProjectsChart />
              <ChartLabel>
                ACTIVE PROJECTS
                <Badges content="+ 6%" charts />
              </ChartLabel>
            </CardContainer>
          </Grid>
        </FlexContainer>

        <ProgressBar>
          <FishWrapper>
            <Fish />
          </FishWrapper>
        </ProgressBar>
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 3.5rem 4.5rem;
  margin-top: 0.125rem;
  white-space: nowrap;
  justify-content: start;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 2.5rem 0;
    white-space: nowrap;
    width: 90%;
  }
`;

const InfoCard = styled.div`
  width: 80%;
  height: 6rem;
  padding: 0.3rem 2rem;
  margin: 0;
  border-radius: 1rem;
  font-size: 3.5rem;
  font-weight: 600;
  text-align: left;
  color: ${White};
  background-color: #afbbff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%233E82E9'/%3E%3Cstop offset='1' stop-color='%23AFBBFF'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23779ff4'/%3E%3Cstop offset='1' stop-color='%23AFBBFF'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.3' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }
  &:nth-child(2) {
    background-color: #3e63ce;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23162349'/%3E%3Cstop offset='1' stop-color='%233E63CE'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%232a438c'/%3E%3Cstop offset='1' stop-color='%233E63CE'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform='translate(0 30)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.4' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    padding: 0.3rem 1rem;
  }
`;

const SalesCard = styled.div`
  width: 80%;
  height: 6rem;
  padding: 0.3rem 2rem;
  margin: 0;
  border-radius: 1rem;
  font-size: 3.5rem;
  font-weight: 600;
  text-align: left;
  color: ${White};
  background-color: #c1c3ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%234159CD'/%3E%3Cstop offset='1' stop-color='%23C1C3FF'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23818ee6'/%3E%3Cstop offset='1' stop-color='%23C1C3FF'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.33' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    padding: 0.3rem 1rem;
  }
`;

const Label = styled.span`
  display: block;
  font-size: 1.6rem;
  line-height: 0.5;
  text-align: right;
  color: ${White};
`;

const OverviewWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  margin: 0;
  border-radius: 1rem;
  background-color: #f9f9f9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -600 100 1000'%3E%3Cg %3E%3Ccircle fill='%23F9F9F9' cx='50' cy='0' r='50'/%3E%3Cg fill='%23f8f8f9' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f7f7fa' cx='50' cy='100' r='50'/%3E%3Cg fill='%23f5f6fa' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f4f4fa' cx='50' cy='200' r='50'/%3E%3Cg fill='%23f3f3fb' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f2f2fb' cx='50' cy='300' r='50'/%3E%3Cg fill='%23f1f1fb' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f0f0fb' cx='50' cy='400' r='50'/%3E%3Cg fill='%23eeeffc' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ededfc' cx='50' cy='500' r='50'/%3E%3Cg fill='%23ececfc' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ebebfd' cx='50' cy='600' r='50'/%3E%3Cg fill='%23eaeafd' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e8e9fd' cx='50' cy='700' r='50'/%3E%3Cg fill='%23e7e8fe' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e6e7fe' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e5e5fe' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e3e4fe' cx='50' cy='900' r='50'/%3E%3Cg fill='%23e2e3ff' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23E1E2FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  background-position: bottom;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: ${HoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-column-start: 1;
    grid-column-end: 1;
    width: 90%;
    padding: 0.5rem 1rem;
  }
`;

const CardContainer = styled.div`
  width: 80%;
  max-height: 25rem;
  padding: 0 2rem;
  margin: 0;
  border-radius: 1rem;
  background: ${White};
  background-image: linear-gradient(to top, #294085 15%, #fffef5 15%);
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: ${HoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    padding: 0.5rem 1rem;
  }
`;

const Dollar = styled.span`
  display: inline-block;
  font-size: 2.3rem;
  padding: 0;
  margin: 0 0 0 0.75rem;
`;

const ChartLabel = styled.div`
  height: 0;
  line-height: 0;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5rem;
  color: ${White};
  font-weight: 600;
  transform: translateY(-1.5rem);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.25rem;
    transform: translateY(-1.35rem);
  }
`;

const ProgressBar = styled.div`
  display: inline-block;
  width: 85%;
  height: 2.5rem;
  margin-left: 1rem;
  background-color: transparent;
  overflow: hidden;
`;

const FishWrapper = styled.span`
  display: block;
  color: ${White};
  line-height: 1.5;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    color: #255dd5;
  }
`;

export default Analytics;
