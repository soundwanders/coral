import React from 'react';
import styled from 'styled-components';
import Badges from '../Badges';
import AvatarImage from '../../assets/Billowbear.png';
import { CardShadow, HoverEffect, White } from '../../utilities';
import { MdOutlineLoyalty } from 'react-icons/md';

const Pipeline = () => {
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
          <Badges content="Website" />
        </Detail>
        <Title>Billowbear Animal Shelter</Title>
        <ProjectInfo>
          Web design and development, integrate client's database with our CMS, provide serverless
          hosting.
        </ProjectInfo>
        <QuoteContainer>
          <Quote>
            {' '}
            <MdOutlineLoyalty /> &nbsp; $12500
          </Quote>
          <Badges content="Full Stack" scope />
        </QuoteContainer>
      </CardContent>
    </Project>
  );
};

const Project = styled.div`
  height: 120%;
  width: 100%;
  max-width: 700px;
  margin: 0 1rem;
  padding: 0.75rem 1.5rem 2rem 1.5rem;
  background-color: ${White};
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    max-width: 80%;
    margin: 2.1rem 0 0 0;
    padding: 0.75rem;
    overflow: initial;
  }
`;

const CardContent = styled.div`
  width: 100%; !important;
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin: 0;
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
    height: 4.5rem;
    border-radius: 50%;
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
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.25);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    flex: 1;
    gap: 0.4rem;
  }
`;

const Quote = styled.div`
  font-family: 'Arvo', serif;
  font-size: 1rem;
  padding: 0 0.8rem;
  margin: 0.4rem;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0 auto;
  }
  svg {
    transform: translateY(4px);
  }
`;

export default Pipeline;
