import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import { DarkTheme } from '../utilities';
import SalesChart from '../charts/Sales';
import ProjectsChart from '../charts/Projects';

const Analytics = () => {
  return (
    <Container>
      <Sidebar />
      <ListWrapper>
        <Title>Analytics</Title>
        <Underline />
        <FlexContainer>
          <SalesChart />
        </FlexContainer>
        <FlexContainer>
          <ProjectsChart />
        </FlexContainer>
      </ListWrapper>
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
  animation: 0.7s ease-out 0s 1 ${Fade};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const ListWrapper = styled.div`
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
  padding: 0.25rem 0 0.5rem 1rem;
  min-width: 0;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
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
