import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const ClientList = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <ClientContainer>
          <ClientInfo />
        </ClientContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
`;

const ClientContainer = styled.div`
  display: flex;
`;

const ClientInfo = styled.div``;

export default ClientList;
