import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Revenue from "./Revenue";
import Info from "./Info";
import LatestProject from "./LatestProject";
import Projects from "./Projects";
import Invoices from "./Invoices";

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
            <TitleText>Active Projects</TitleText>
            <Projects />
          </ColumnTwo>
        </SectionOne>
        <SectionTwo>
          <ColumnThree>
            <InvoiceContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoiceContainer>
          </ColumnThree>
          <ColumnFour>
            <TitleText>Upcoming Projects</TitleText>
            <LatestProject />
          </ColumnFour>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(to bottom right, #f9f9f9 0%, #9dbfea 100%);
  border-radius: 1rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 80%;
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

const TitleText = styled.h3`
  height: 20%;
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
