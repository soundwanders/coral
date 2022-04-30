import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import { DarkTheme } from '../utilities';
import SalesChart from '../components/charts/Sales';
import ProjectsChart from '../components/charts/Projects';

const Analytics = () => {
  return (
    <Container>
      <Sidebar />
      <ChartWrapper>
        <Title>Analytics</Title>
        <Underline />
        <FlexContainer>
          <SalesChart />
          <ProjectsChart />
        </FlexContainer>

        <FlexContainer>
          <ProjectsChart />
          <SalesChart />
        </FlexContainer>
      </ChartWrapper>
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
}
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 97vh;
  background: transparent;
  border: 0px solid transparent;
  border-radius: 2rem;
  animation: 0.9s ease-in-out 0s 1 ${Fade};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 97vh;
  left: 3%;
  overflow-y: auto;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem 0 0 0;
    padding: 0;
    height: max-content;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: #eaf5ff;
    overflow-x: hidden;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  width: 90%;
  padding: 0.25rem 0;
  justify-content: left;
  transform: translateX(-10%);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 0.25rem 0.5rem;
    flex-direction: column;
    flex-wrap: wrap;
    transform: none;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-left: 0.5rem;
  color: ${DarkTheme};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    text-align: center;
  }
`;

const Underline = styled.span`
  display: inline-block;
  width: 85%;
  margin: 0 0 2rem 0.5rem;
  border-bottom: 2px solid #dcdcdc;
`;

export default Analytics;
