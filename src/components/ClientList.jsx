import React from 'react';
import {Outlet} from 'react-router-dom';
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
          <Title>Clients</Title>
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
  background: #fff2e9;
  border: 0px solid transparent;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #eaf5ff;
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
    background: linear-gradient(to bottom, #eaf5ff 75%, #ffe4ce 100%);
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

const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6rem 20%;
  white-space: nowrap;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    grid-template-columns: 1fr;
    gap: 4rem 0;
    white-space: nowrap;
  }
`;

const ClientUl = styled.ul``;

const Label = styled.span`
  display: flex;
  padding: 0.1rem 0;
  margin: 0.8rem 0 0.1rem 0.4rem;
  font-weight: bold;
  color: #9a9a9a;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  list-style-type: none;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border-bottom: 1px solid #d8e2e7;
  background: #fffcf0;
  &:nth-child(3) {
    font-size: 1.675rem;
  }
`;

const Portrait = styled.img`
  width: 5rem;
`;

export default ClientList;
