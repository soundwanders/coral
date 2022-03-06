import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import {cardShadow, hoverEffect, themeColor} from "../utils";
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>15%</Digit>
            <InfoContainer>
              <Title>Profit Margin</Title>
              <SubTitle>Total Sales, Lifetime</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>221</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>5 MTD</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="Website Overhaul" glow />
            <Badge content="Branding & Merchandise" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 15rem;
  padding: 1rem 1rem 2rem 1rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  color: #f9f9f9;
  box-shadow: ${cardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: rgba(185, 195, 245, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({justify}) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  font-size: 1.3rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: #11111;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Info;
