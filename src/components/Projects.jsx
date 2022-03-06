import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/Avatar2.png";
import AvatarImage2 from "../assets/Avatar3.png";
import {cardShadow, hoverEffect, themeColor} from "../utils";

function Projects() {
  return (
    <CurrentProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="Avatar 2" />
        </Avatar>
        <Detail>
          <Title>Hoshsplosh University Website Overhaul</Title>
          <SubTitle>Due in 10 days</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} alt="Avatar 3" />
        </Avatar>
        <Detail>
          <Title>Mellow Jello Branding and Merchandise</Title>
          <SubTitle>Due in 45 days</SubTitle>
        </Detail>
      </Project>
      <AllProjects>View all active projects</AllProjects>
    </CurrentProjects>
  );
}

const CurrentProjects = styled.div`
  height: 70%;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: ${cardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;
