import React from 'react';
import {Outlet} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import {DarkTheme, White} from '../utilities'
import data from '../db.json';

const InvoiceList = () => {
  return (    
    <Container>
      <Sidebar />
          <ListWrapper>
          <Title>Your Invoices ...</Title>
          <Underline />
            <FlexContainer>
              <InvoiceTable>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Organization</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Amount</TableHeader>
                  <TableHeader>Status</TableHeader>
                </TableRow>

                {data.clients.map(({id, name, organization, email}) => (
                  <TableRow key={id}>
                    <Cell>{name}</Cell>
                    <Cell>{organization}</Cell>
                    <Cell>{email}</Cell>
                    <Cell>placeholder</Cell>
                    <Cell>paid/late badge here</Cell>
                  </TableRow>
                ))}
              </InvoiceTable>
            </FlexContainer>
        </ListWrapper>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 97vh;
  background: transparent;
  border: 0px solid TableRowansparent;
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
  padding: 0.25rem;
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

export const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
}
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${DarkTheme};
  animation: 1s ease-out 0s 1 ${Fade};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    text-align: center;
  }
`;

const Underline = styled.span`
  display: inline-block;
  width: 90%;
  margin: 0 0 2rem 0;
  border-bottom: 2px solid #dcdcdc;
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;

const InvoiceTable = styled.table`
  background: ${White};
`;

const TableRow = styled.tr``;

const TableHeader = styled.th``;

const Cell = styled.td``;


export default InvoiceList;
