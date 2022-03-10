import React from "react";
import styled from "styled-components";
import Badges from "./Badges";
import {CardShadow, HoverEffect, ThemeColor} from "../utilities";

function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Value>+ 15%</Value>
            <InfoContainer>
              <Title>Projection</Title>
              <SubTitle>Sales Growth</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Value>10</Value>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>2 currently active</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badges content="Design" glow />
            <Badges content="Branding" glow />
            <Badges content="CMS" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 15rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  color: #f9f9f9;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: rgba(185, 195, 245, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.4rem 1rem;
`;

const Row = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  margin-bottom: 0.5rem;
  ${({justify}) =>
    justify &&
    `
      justify-content: space-around;
      width: 100%;
  `}
`;
const Value = styled.div`
  background-color: ${ThemeColor};
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  font-size: 1.4rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.6rem;
`;
const Title = styled.h3`
  color: #0e1e36;
  margin-left: 0.7rem;
  margin-bottom: 4px;
  @media (max-width: 960px) {
    margin-left: 0.25rem;
  }
`;

const SubTitle = styled.h5`
  color: #222;
  font-weight: normal;
  margin-left: 0.7rem;
  @media (max-width: 960px) {
    margin-left: 0.25rem;
  }
`;

export default Info;
