import React from "react";
import styled from "styled-components";
import AvatarImage2 from "../assets/Avatar2.png";
import AvatarImage3 from "../assets/Avatar3.png";
import {CardShadow, HoverEffect, PrimaryBadgeColor, White} from "../utilities";

function Projects() {
  return (
    <CurrentProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage2} alt="Avatar 2" />
        </Avatar>
        <Detail>
          <Title>Slimetime University Site Overhaul</Title>
          <SubTitle>Due in 19 days</SubTitle>
        </Detail>
      </Project>

      <Project>
        <Avatar>
          <img src={AvatarImage3} alt="Avatar 3" />
        </Avatar>
        <Detail>
          <Title>Bigclaw Branding &amp; Merchandising</Title>
          <SubTitle>Due in 35 days</SubTitle>
        </Detail>
      </Project>
      <AllProjects>View all active projects</AllProjects>
    </CurrentProjects>
  );
}

const CurrentProjects = styled.div`
  width: 90%;
  max-width: 740px;
  height: 80%;
  margin: 0 0 0.25rem 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${White};
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 70%;
    max-width: 70%;
    height: max-content;
    margin: 0.1rem 0 -1rem 0;
    padding: 1rem;
`;

const Project = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 0.4rem;
  &:nth-child(2) {
    padding-top: 2rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      padding-top: 2rem;
    }
  }
`;

const Avatar = styled.div`
  img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 4rem;
  }
`;

const Detail = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
  padding-bottom: 0.25rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h5`
  font-weight: 300;
`;

const AllProjects = styled.h5`
  text-align: end;
  color: ${PrimaryBadgeColor};
  cursor: pointer;
  margin-top: 0.75rem;
  &:hover {
    filter: brightness(110%);
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 0.3rem;
  }
`;

export default Projects;
