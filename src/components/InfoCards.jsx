import React from 'react';
import styled from 'styled-components';
import Badges from './Badges';
import {CardShadow, HoverEffect, ThemeColor, White} from '../utilities';

const ContentCard = () => {
  return (
    <InfoCardContainer>
      <Card>
        <CardContent>
          <Row>
            <NumberValue>+ 15%</NumberValue>
            <InfoContainer>
              <Title>Projection</Title>
              <SubTitle>Annual Growth</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <NumberValue>9</NumberValue>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>2 currently active</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badges content="Design" glowTags />
            <Badges content="Branding" glowTags />
            <Badges content="CMS" glowTags />
          </Row>
        </CardContent>
      </Card>
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  height: 100%;
  width: 15rem;
  padding: 1rem 1.5rem;
  margin: 0 0.5rem 0 1rem;
  background-color: ${White};
  border-radius: 1rem;
  color: ${White};
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    padding: 1rem;
    margin: 0;
  }
`;

const Card = styled.div`
  height: 40%;
  border-radius: 1rem;
  margin: 0.5rem 0;
  background-color: rgba(185, 195, 245, 0.3);
  &:nth-child(1) {
    margin-top: 0.25rem;
  }
  &:nth-child(2) {
    height: 60%;
  }
`;

const CardContent = styled.div`
  padding: 0.5rem 1rem;
`;

const Row = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  margin: 0.25rem 0;
  ${({justify}) =>
    justify &&
    `
      justify-content: space-around;
      width: 100%;
  `}
`;
const NumberValue = styled.div`
  background-color: ${ThemeColor};
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  font-family: 'Arvo', serif;
  font-size: 1.1rem;
  @media (max-width: 1080px) {
    margin-left: 0.25rem;
    padding: 0.6rem 0.8rem;
  }
`;

const InfoContainer = styled.div`
  margin-left: 0.6rem;
`;
const Title = styled.h3`
  color: #0e1e36;
  margin-left: 0.7rem;
  margin-bottom: 4px;
  @media (max-width: 1080px) {
    margin-left: 0.25rem;
  }
`;

const SubTitle = styled.h5`
  color: #222;
  font-weight: normal;
  margin-left: 0.7rem;
  @media (max-width: 1080px) {
    margin-left: 0.25rem;
  }
`;

export default ContentCard;
