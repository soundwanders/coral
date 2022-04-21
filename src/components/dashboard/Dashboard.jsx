import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MdOutlineSavings, MdOutlineEditCalendar } from 'react-icons/md';
import { BiBuildings } from 'react-icons/bi';
import Header from './Header';
import Revenue from './Revenue';
import ContentCard from './InfoCards';
import Projects from './Projects';
import Invoices from './Invoice';
import SlackBar from './Slack';
import Pipeline from './Pipeline';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header />
      <ContentContainer>
        <SectionOne>
          <ColumnOne>
            <Revenue />
            <ContentCard />
          </ColumnOne>
          <ColumnTwo>
            <ActiveProjectsTitle>
              Active Projects &nbsp; <BiBuildings />{' '}
            </ActiveProjectsTitle>
            <Projects />
          </ColumnTwo>
        </SectionOne>
        <SectionTwo>
          <ColumnThree>
            <InvoiceContainer>
              <InvoiceTitle>
                Recent Invoices &nbsp; <MdOutlineSavings />{' '}
              </InvoiceTitle>
              <Invoices />
            </InvoiceContainer>
            <SlackBar />
          </ColumnThree>
          <ColumnFour>
            <PipelineTitle>
              Upcoming Projects &nbsp; <MdOutlineEditCalendar />{' '}
            </PipelineTitle>
            <Pipeline />
          </ColumnFour>
        </SectionTwo>
      </ContentContainer>
    </DashboardWrapper>
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

const DashboardWrapper = styled.div`
  width: 80%;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  margin: 0rem 5rem;
  animation: 1s ease-in-out 0s 1 ${Fade};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: linear-gradient(to bottom, #eaf5ff 75%, #ffe4ce 100%);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 85%;
  width: 99%;
  margin: 0.5rem 0;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

// Section One contains Revenue and Info components
const SectionOne = styled.div`
  display: flex;
  flex: 0 1 auto;
  min-width: 0;
  justify-content: space-between;
  height: 40%;
  width: 100%;
  gap: 2rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;

// Revenue
const ColumnOne = styled.div`
  display: flex;
  gap: 3rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

// Info
const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const ActiveProjectsTitle = styled.h3`
  height: 15%;
  min-width: 0;
  flex: 0 1 0;
  align-items: center;
  padding: 0 4px;
  margin-left: 1rem;
  font-size: 1.5rem;
  transform: translateY(-0.5rem);
  svg {
    transform: translateY(3px);
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    transform: translateY(0);
  }
`;

const InvoiceTitle = styled.h3`
  height: 20%;
  padding: 0 4px;
  font-size: 1.5rem;
  svg {
    transform: translateY(3px);
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
  }
`;

const PipelineTitle = styled.h3`
  height: 20%;
  margin: 0 0 2px 1rem;
  padding: 0 4px;
  font-size: 1.5rem;
  svg {
    transform: translateY(3px);
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 0;
    margin-bottom: -0.9rem;
  }
`;

// Section two contains Invoices and Pipeline components
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;

// Invoices
const ColumnThree = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

// Pipeline
const ColumnFour = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Dashboard;
