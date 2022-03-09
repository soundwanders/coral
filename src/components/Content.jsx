import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Revenue from "./Revenue";
import Info from "./Info";
import Pipeline from "./Pipeline";
import Projects from "./Projects";
import Invoices from "./Invoice";

function Content() {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne>
            <Revenue />
            <Info />
          </ColumnOne>
          <ColumnTwo>
            <ProjectsTitle>Active Projects</ProjectsTitle>
            <Projects />
          </ColumnTwo>
        </SectionOne>
        <SectionTwo>
          <ColumnThree>
            <InvoiceContainer>
              <InvoiceTitle>Recent Invoices</InvoiceTitle>
              <Invoices />
            </InvoiceContainer>
          </ColumnThree>
          <ColumnFour>
            <PipelineTitle>Upcoming Projects</PipelineTitle>
            <Pipeline />
          </ColumnFour>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(to bottom right, #eaf5ff 55%, #ffe4ce 100%);
  border-radius: 0;
  margin: 0rem 8rem 0rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
    padding: 0.5rem 0.25rem;
    border-radius: 2rem;
    background: linear-gradient(to bottom, #eaf5ff 75%, #ffe4ce 100%);
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 85%;
  width: 100%;
  margin: 0.5rem 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
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

const ProjectsTitle = styled.h3`
  height: 20%;
  padding: 0 4px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
    margin-bottom: 1rem;
  }
`;

const InvoiceTitle = styled.h3`
  height: 20%;
  padding: 0 4px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
  }
`;

const PipelineTitle= styled.h3`
  height: 20%;
  margin-left: 1rem;
  padding: 0 4px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 0;
    margin-bottom: -0.9rem;
  }
`;

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

const ColumnFour = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Content;
