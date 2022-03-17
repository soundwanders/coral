import React from 'react';
import styled from 'styled-components';
import Badges from './Badges';
import AvatarImage from '../assets/Chase.png';
import {RiHomeLine, RiFileCopyLine} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {AiOutlinePieChart} from 'react-icons/ai';
import {DarkTheme, White} from '../utilities';

const Sidebar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Chase Wunderkatz</Name>
        <Badges content="Mastermind" />
      </ProfileContainer>

      <LinksContainer>
        <PageLinks>
          <Link>
            <RiHomeLine />
            <h2> Dashboard </h2>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h2> Projects </h2>
          </Link>
          <Link>
            <FaWallet />
            <h2> Invoices </h2>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h2> Reports </h2>
          </Link>
        </PageLinks>
        <ContactContainer>
          <Questions>Any Questions?</Questions>
          <a href="/">
            <ContactUs>Contact us!</ContactUs>
          </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100% !important;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 2rem;
  background-color: ${DarkTheme};
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
    justify-content: center;
    margin: 0;
    margin-bottom: 1.5rem;
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 3.25rem;
  border-radius: 6rem;
  margin-top: 20%;
  &:hover {
    transform: rotateZ(360deg);
    transition: 0.8s 0.3s;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 3.5rem;
  }
`;

const Name = styled.h1`
  color: ${White};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #1c2c5d;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  text-align: center;
`;

const PageLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  list-style-type: none;
  padding-top: 2rem;
`;

const Link = styled.div`
  display: flex;
  margin-left: 25%;
  margin-bottom: 2rem;
  gap: 1rem;
  color: ${White};
  cursor: pointer;
  h2 {
    font-weight: 400;
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
  background-color: ${DarkTheme};
  color: #dbdbdb;
  height: 15%;
  margin: auto;
  border-radius: 1.75rem;
  padding: 1rem;
  a {
    color: ${White};
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
