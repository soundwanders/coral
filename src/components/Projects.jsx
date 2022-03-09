import React from "react";
import styled from "styled-components";
import AvatarImage2 from "../assets/Avatar2.png";
import AvatarImage3 from "../assets/Avatar3.png";
import {CardShadow, HoverEffect, ThemeColor} from "../utilities";

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
  max-width: 100%;
  height: 70%;
  margin: 0;
  padding: 1rem 1rem 1.5rem 1rem;
  border-radius: 1rem;
  background-color: #f9f9f9;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
  }
`;

const Project = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0.2rem;
  padding-top: 0.5rem;
`;

const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
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
  color: ${ThemeColor};
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

export default Projects;
