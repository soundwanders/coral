import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/Avatar.png";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { DarkThemeColor } from "../utils";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Chase Wunderkat</Name>
        <Badge content="Founder" />
      </ProfileContainer>

      <LinksContainer>
        <PageLinks>
          <Link>
            <RiHomeLine />
            <h3> Dashboard </h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3> Projects </h3>
          </Link>
          <Link>
            <FaWallet />
            <h3> Invoices </h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3> Reports </h3>
          </Link>
        </PageLinks>
        <ContactContainer>
          <Questions>Any Questions?</Questions>
          <a href="/"><ContactUs>Contact us</ContactUs></a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #0e1e36;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
    justify-content: center;
    margin: 0 auto;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 3rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: #f9f9f9;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${DarkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
const PageLinks = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.div`
  display: flex;
  margin-left: 25%;
  margin-bottom: 2rem;
  gap: 1rem;
  color: #f5f5f5;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
  &:hover {
    filter: brightness(120%);
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  background-color: #0d1c32;
  color: #dbdbdb;
  height: 15%;
  margin: auto;
  border-radius: 1rem;
  padding: 1rem;
  a {
    color: #f9f9f9;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

const Questions = styled.span`
  padding-bottom: 0.5rem;
`;

const ContactUs = styled.h4`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default Sidebar;
