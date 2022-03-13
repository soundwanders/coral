import React from "react";
import styled from "styled-components";
import Badges from "./Badges";
import AvatarImage from "../assets/Billowbear.png";
import { CardShadow, HoverEffect, White } from "../utilities";

function Pipeline() {
  return (
    <Project>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Bernie Billowbear</InfoName>
              <InfoUpdate>
                Proposal Accepted {new Date().getMonth()}/{new Date().getFullYear()}
              </InfoUpdate>
            </Info>
          </InfoContainer>
          <Badges content="Design" />
        </Detail>
        <Title>Billowbear Animal Shelter</Title>
        <ProjectInfo>
          Web design and development, integrate client's data into CMS, serverless hosting.
        </ProjectInfo>
        <QuoteContainer>
          <Quote>$12500</Quote>
          <Badges content="Full Stack" tech />
        </QuoteContainer>
      </CardContent>
    </Project>
  );
}

const Project = styled.div`
  width: 90%;
  height: 110%;
  margin-left: 1rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  background-color: ${White};
  transition: 0.3s ease-in-out;
  box-shadow: ${CardShadow};
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2.2rem 0;
    margin-left: 0rem;
    padding: 0.75rem;
  }
`;

const CardContent = styled.div`
  width: 100%; !important;
  margin: 0.3rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;

const Info = styled.div``;

const InfoName = styled.h3`
  font-weight: 500;
`;

const InfoUpdate = styled.h5`
  font-weight: 300;
`;

const Title = styled.h4`
  font-weight: 500;
`;

const ProjectInfo = styled.p`
  margin: 0;
  padding: 0.4rem;
  padding-left: 0;
  font-size: 1rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;

const QuoteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    flex: 1;
    gap: 0.4rem;
  }
  &div:nth-child(3) {
    margin: 10rem 0;
  }
`;

const Quote = styled.div`
  font-size: 1.3rem;
  padding: 0 1rem;
  margin: 0 1rem;
`;

export default Pipeline;
