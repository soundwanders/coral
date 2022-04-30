import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import Badges from './common/Badges';
import AvatarImage from '../assets/Chase.png';
import { BiHomeSmile } from 'react-icons/bi';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { AiOutlinePieChart, AiOutlineFileSync } from 'react-icons/ai';
import { HiOutlineCash } from 'react-icons/hi';
import { DarkTheme, White } from '../utilities';

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
          <SidebarLinks>
            <BiHomeSmile />
            <Link to="/">
              {' '}
              <h2> Dashboard </h2>{' '}
            </Link>
          </SidebarLinks>

          <SidebarLinks>
            <AiOutlinePieChart />
            <Link to="/Analytics">
              {' '}
              <h2> Analytics </h2>{' '}
            </Link>
          </SidebarLinks>

          <SidebarLinks>
            <BsFileEarmarkPerson />
            <Link to="/ClientList">
              {' '}
              <h2> Clients </h2>{' '}
            </Link>
          </SidebarLinks>

          <SidebarLinks>
            <HiOutlineCash />
            <Link to="/InvoiceList">
              {' '}
              <h2> Invoices </h2>{' '}
            </Link>
          </SidebarLinks>

          <SidebarLinks>
            <AiOutlineFileSync />
            <Link to="/">
              {' '}
              <h2> Projects </h2>{' '}
            </Link>
          </SidebarLinks>
        </PageLinks>

        <ContactContainer>
          <Questions>Any Questions?</Questions>
          <ContactUs>Contact us!</ContactUs>
        </ContactContainer>
      </LinksContainer>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100% !important;
  gap: 3rem;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 2rem;
  background-color: ${DarkTheme};

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
  width: 3.5rem;
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.2'%3E%3Ccircle fill='%23162349' cx='50' cy='0' r='50'/%3E%3Cg fill='%2316234a' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%2316244b' cx='50' cy='100' r='50'/%3E%3Cg fill='%2317244c' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%2317254c' cx='50' cy='200' r='50'/%3E%3Cg fill='%2317254d' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%2317254e' cx='50' cy='300' r='50'/%3E%3Cg fill='%2318264f' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23182650' cx='50' cy='400' r='50'/%3E%3Cg fill='%23182751' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23182751' cx='50' cy='500' r='50'/%3E%3Cg fill='%23192752' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23192853' cx='50' cy='600' r='50'/%3E%3Cg fill='%23192854' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23192955' cx='50' cy='700' r='50'/%3E%3Cg fill='%231a2956' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%231a2957' cx='50' cy='800' r='50'/%3E%3Cg fill='%231a2a57' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%231a2a58' cx='50' cy='900' r='50'/%3E%3Cg fill='%231b2b59' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%231B2B5A' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const PageLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 63%;
  list-style-type: none;
  padding-top: 2rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    transform: translateX(20px);
  }
`;

const SidebarLinks = styled.div`
  display: flex;
  margin-left: 25%;
  margin-bottom: 2rem;
  gap: 1rem;
  color: ${White};
  cursor: pointer;
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 1%;
  }

  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
    color: #fff;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 15%;
  margin: 0.8rem auto 0 auto;
  border-radius: 1.75rem;
  padding: 0.8rem 1rem;
  background-color: ${DarkTheme};
  color: #dbdbdb;
  a {
    color: ${White};
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem auto 2rem auto;
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
