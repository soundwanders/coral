import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Badges from '../components/common/Badges';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White, CardShadow, HoverEffect } from '../utilities';
import { BiDollarCircle } from 'react-icons/bi';
import { GiAnglerFish } from 'react-icons/gi';
import data from '../db.json';

const InvoiceList = () => {
  const placeholder = 'Processed';
  const description = `
    Tellus elementum sagittis vitae et leo duis. Eget nunc lobortis 
    mattis aliquam faucibus purus. A erat nam at lectus urna duis
    convallis. Porttitor dolor morbi non arcu risus quis varius terna.
    Viverra mattis nunc sed blano.
  `;

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Title>
          Recent Invoices <GiAnglerFish />{' '}
        </Title>
        <Underline />
        <FlexContainer>
          <Grid>
            {data.clients.map(
              ({ id, img, name, organization, address, state, lastInvoice, phone, totalSales }) => (
                <CardContainer key={id}>
                  <Row>
                    <Portrait src={img} id="ClientPhoto" alt={name} draggable="false" />
                  </Row>

                  <Row>
                    <CardContent>
                      <Label>NAME</Label>
                      {name}
                    </CardContent>
                    <CardContent>
                      <Label>ORGANIZATION</Label>
                      {organization}
                    </CardContent>
                  </Row>

                  <Row>
                    <CardContent>
                      <Label>ADDRESS</Label>
                      {address}
                    </CardContent>
                    <CardContent>
                      <Label>STATE</Label>
                      {state}
                    </CardContent>
                  </Row>

                  <Row>
                    <CardContent>
                      <Label>DATE</Label>
                      {lastInvoice}
                    </CardContent>
                    <CardContent>
                      <Label>PHONE</Label>
                      {phone}
                    </CardContent>
                  </Row>

                  <Row>
                    <CardContent>
                      <Label>DETAILS</Label>
                      {description}
                    </CardContent>
                  </Row>

                  <Row>
                    <CardsBottomRow>
                      <Label>AMOUNT</Label>
                      <DollarSign>
                        <BiDollarCircle />
                      </DollarSign>
                      {totalSales}
                    </CardsBottomRow>
                    <CardsBottomRow>
                      <Label>STATUS</Label>
                      {placeholder}
                    </CardsBottomRow>
                    <CardsBottomRow>
                      <Label>
                        <Badges content="Paid" paid />
                      </Label>
                    </CardsBottomRow>
                  </Row>
                </CardContainer>
              ),
            )}
          </Grid>
        </FlexContainer>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.5rem 4.5rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    grid-template-columns: 1fr;
    gap: 4rem 0;
    white-space: nowrap;
  }
`;

// white-space: normal prevents invoice description from overflowing container
const CardContainer = styled.div`
  padding: 5% 7% 7% 7%;
  white-space: normal;
  background: ${White};
  background-image: linear-gradient(180deg, #172854 12%, ${White} 12%, ${White} 87%, #172854 87%);
  background-clip: padding-box;
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.2s ease-in-out;
  cursor: default;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }
`;

// nth-child(5) to target the DETAILS text field
// nth-child(6) targets last row of card (AMOUNT, STATUS, and Badge)
const Row = styled.div`
  display: flex;
  min-width: 0;
  padding: 0.2rem 0 0 0;

  &:nth-child(5) > div {
    flex: 0 0 95%;
    line-height: 1.5;
    font-size: 1rem !important;
    margin-bottom: -1rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 0.75rem;
    }
  }
  &:nth-child(6) > div {
    font-size: 1.1rem;
    padding: 4px 0;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 0.85rem;
    }
  }
`;

const Portrait = styled.img`
  width: 5rem;
  padding: 0 0 0.5rem 0;
  margin: 0 auto;
`;

const CardContent = styled.div`
  width: 90%;
  flex: 0 0 58%;
  font-size: 1.125rem;
  font-weight: 500;
  transform: translateX(1rem);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.75rem;
  }
`;

const CardsBottomRow = styled.div`
  width: 90%;
  border-radius: 0.5rem;
  padding-bottom: 1rem;
  flex: 0 0 35%;
  font-size: inherit;
  font-weight: 600;
  color: ${White};
  transform: translate(1rem, 2rem);
  span {
    color: #cecece;
  }
  &:nth-child(2) {
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      display: none;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.75rem;
    flex: 0 0 52%;
    padding-bottom: 0.5rem;
    transform: translate(1rem, 1rem);
  }
`;

// span:nth-child(1) targets Badge icon
const Label = styled.span`
  display: flex;
  padding: 0.1rem 0;
  margin: 1.3rem 0 0.125rem 0rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #a4a4a4;

  span:nth-child(1) {
    font-size: 1rem;
    background: #64e764;
    color: #0d530d;
    margin: 0.5rem 0 0 0.5rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 0.85rem;
    }
  }
`;

const DollarSign = styled.span`
  svg {
    margin: 0 2% -2.5% 0;
    max-width: 1.125rem;
    color: ${White};
  }
`;

export default InvoiceList;
