import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './Sidebar';
import data from '../db.json';
import Avatar from '../assets/Avatar.png';

const ClientList = () => {
  return (
    <>
    <Container>
      <Sidebar />
        <ListWrapper>
        <Title>Client List</Title>
          <FlexContainer>
            <ClientInfo>
              {data.clients.map(({ id, name, organization, email, phone, dateAcquired, totalSales }) => (
                <ClientUl key={id}>
                  <Portrait src={Avatar} id="ClientPhoto" alt={name} draggable="false" />
                  <ListItem>{name}</ListItem>
                  <ListItem>{organization}</ListItem>
                  <ListItem>{email}</ListItem>
                  <ListItem>{phone}</ListItem>
                  <ListItem>{dateAcquired}</ListItem>
                  <ListItem>{totalSales}</ListItem>
                </ClientUl>
              ))}
            </ClientInfo>
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
  height: 97.25vh;
  background: linear-gradient(to bottom right, #eaf5ff 60%, #ffe4ce 100%);
  border: 0px solid transparent;
  border-radius: 2rem;
  overflow: hidden;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    @media screen and (min-width: 320px) and (max-width 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 1rem 0 0 0;
      padding: 0.5rem 0.25rem;
      background: #eaf5ff;
    }
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  width: 80%;
  left: 25%;
  padding: 0.5rem 0;
  max-height: 97vh;
  overflow: scroll;
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Title = styled.h1`
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientUl = styled.ul`
  padding: 1rem 0;
  
`;

const ListItem = styled.li`
  padding: 2px 0;
  list-style-type: none;
`;

const Portrait = styled.img`
  width: 4rem
`;

export default ClientList;
