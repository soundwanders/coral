import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import data from '../db.json';
import Avatar from '../assets/Avatar2.png';
import {DarkTheme, White, CardShadow} from '../utilities';

const ClientList = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <ListWrapper>
          <Title>Coral Clients</Title>
          <Underline />
          <FlexContainer>
            <Grid>
              {data.clients.map(
                ({id, name, organization, email, phone, dateAcquired, totalSales}) => (
                  <ClientUl key={id}>
                    <Portrait src={Avatar} id="ClientPhoto" alt={name} draggable="false" />
                    <Label>NAME</Label> <ListItem>{name}</ListItem>
                    <Label>ORGANIZATION</Label> <ListItem>{organization}</ListItem>
                    <Label>EMAIL</Label> <ListItem>{email}</ListItem>
                    <Label>PHONE</Label> <ListItem>{phone}</ListItem>
                    <Label>ACQUIRED</Label> <ListItem>{dateAcquired}</ListItem>
                    <Label>SALES</Label> <ListItem>{totalSales}</ListItem>
                  </ClientUl>
                ),
              )}
            </Grid>
          </FlexContainer>
        </ListWrapper>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 97vh;
  background: transparent;
  border: 0px solid transparent;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
    background: transparent;
  }
`;

const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 97vh;
  left: 5%;
  padding: 0.25rem 0;
  overflow-y: auto;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem 0 0 0;
    padding: 0;
    height: max-content;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: #eaf5ff;
    overflow-x: hidden;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #464646;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    text-align: center;
  }
`;

const Underline = styled.span`
  display: inline-block;
  width: 90%;
  margin: 0 0 2rem 0;
  border-bottom: 1px solid #dcdcdc;
`;

const Portrait = styled.img`
  display: flex;
  width: 5rem;
  padding: 0.5rem 0;
  margin: 0 auto;
`;

const ClientUl = styled.ul`
  padding: 1rem 2rem;
  margin: 0;
  min-width: 260px;
  background: ${White};
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.2s ease-in-out;
  cursor: default;
  &:hover {
    opacity: 0.9;
  }
`;

const ListItem = styled.li`
  padding: 0.5rem;
  list-style-type: none;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border-bottom: 1px solid #d8e2e7;
  background: #fffcf1;
  color: ${DarkTheme};
  &:nth-child(3) {
    font-size: 1.6rem;
  }
`;

const Label = styled.span`
  display: flex;
  padding: 0.1rem 0;
  margin: 0.8rem 0 0.1rem 0.4rem;
  font-weight: bold;
  color: #a4a4a4;
`;

const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 6rem 10%;
  white-space: nowrap;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    grid-template-columns: 1fr;
    gap: 4rem 0;
    white-space: nowrap;
  }
`;

export default ClientList;
