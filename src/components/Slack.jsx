import React from "react";
import styled from "styled-components";
import {FaSlack} from "react-icons/fa";
import {DarkTheme, HoverEffect, ThemeColor} from "../utilities";
function Slack() {
  return (
    <Wrapper>
      <CardContent flex={true}>
        <SlackContainer>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHeader> Stop by and say hello!</SlackHeader>
          </SlackText>
        </SlackContainer>
        <Join>Join Our Slack</Join>
      </CardContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  top: 63%;
  align-items: center;
  height: 30%;
  border: 0px solid transparent;
  border-radius: 1rem;
  background-color: ${ThemeColor};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    top: 0;
    margin-top: 2.5rem;
    height: max-content;
    width: 80%;
  }
`;

const CardContent = styled.div`
  display: flex;
  margin: 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SlackContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #f9f9f9;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: #f9f9f9;
  align-content: center;
`;

const SlackHeader = styled.h2`
  margin: 1rem 0;
  font-weight: 600;
`;

const Join = styled.button`
  font-size: 1rem;
  font-weight: 700;
  border: none;
  outline: none;
  padding: 0.3rem 2rem;
  border-radius: 2rem;
  color: #f9f9f9;
  background-color: ${DarkTheme};
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 0.3rem;
  }
`;

export default Slack;
