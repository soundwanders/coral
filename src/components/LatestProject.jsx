import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/Billowbear.png";
import { CardShadow, HoverEffect } from "../utils";

function LatestProject() {
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
              <InfoUpdate>Proposal Accepted {new Date().getMonth() }/{ new Date().getFullYear() }</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>Billowbear Animal Shelter</Title>
        <ProjectInfo>
          Redesign website, new CMS, create brand style guide. One year content release calendar 
          due with delivery.
        </ProjectInfo>
        <QuoteContainer>
          <Quote>$12500</Quote>
          <Badge content="Full Time" clean />
        </QuoteContainer>
      </CardContent>
    </Project>
  );
}

const Project = styled.div`
  width: 27.5vw;
  height: 120%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f9f9f9;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.3rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
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
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;

    gap: 0.4rem;
  }
`;

const Quote = styled.div``;

export default LatestProject;
