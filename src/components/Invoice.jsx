import React from 'react';
import styled from 'styled-components';
import Badges from './Badges';
import Percy from '../assets/Percy.png';
import Mary from '../assets/Mary.png';
import {CardShadow, HoverEffect, White} from '../utilities';

const Invoices = () => {
  return (
    <Container>
      <CardContent>
        <InvoiceContainer>
          <ClientInfo>
            <Avatar>
              <img src={Mary} id="Mooglemash" alt="" />
            </Avatar>
            <TextContainer>
              <Title>Mary Mooglemaker</Title>
              <SubTitle>Moogle Media</SubTitle>
            </TextContainer>
          </ClientInfo>
          <InvoiceDetails>
            <Badges content="Paid" paid />
            <Amount>$2500</Amount>
          </InvoiceDetails>
        </InvoiceContainer>

        <InvoiceContainer>
          <ClientInfo>
            <Avatar>
              <img src={Percy} id="Poppyseed" alt="" />
            </Avatar>
            <TextContainer>
              <Title>Percy Poppyseed</Title>
              <SubTitle>Custard Crew</SubTitle>
            </TextContainer>
          </ClientInfo>
          <InvoiceDetails>
            <Badges content="Late" late />
            <Amount>$825</Amount>
          </InvoiceDetails>
        </InvoiceContainer>
      </CardContent>
    </Container>
  );
};

const Container = styled.div`
  width: 35rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${White};
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
    overflow: initial;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem 0;
  }
`;

const InvoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  &:nth-child(2) {
    padding-top: 1rem;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const ClientInfo = styled.div`
  display: flex;
  align-content: space-between;
  width: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h4``;

const SubTitle = styled.h5`
  font-weight: 400;
`;

const InvoiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Amount = styled.div`
  font-family: 'Arvo', serif;
`;

export default Invoices;
