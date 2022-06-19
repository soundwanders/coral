import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import InvoiceFilter from '../components/InvoiceFilter';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White, CardShadow, HoverEffect, SearchBarShadow } from '../utilities';
import { GiAnglerFish } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';

const InvoiceList = () => {
  const [inputText, setInputText] = useState('');
  let handleInput = e => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <TitleWrapper>
          <Title>
            Recent Invoices <GiAnglerFish />{' '}
          </Title>
          <InputContainer>
            <Icon>
              <FiSearch />
            </Icon>
            <Input type="text" placeholder="Search..." onChange={handleInput} />
          </InputContainer>
        </TitleWrapper>
        <Underline />
        <FlexContainer>
          <Grid>
            <InvoiceFilter input={inputText} />
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: ${SearchBarShadow};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    box-shadow: none;
    padding: 2rem 0;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.7rem;
  width: 3rem;
  background-color: #f6f8ff;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  svg {
    color: #444444;
  }
`;

const Input = styled.input`
  border: 0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  background-color: #f6f8ff;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 85%;
  grid-template-columns: 1fr 1fr;
  gap: 6rem 5rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    grid-template-columns: 1fr;
    gap: 4.25rem 0;
    white-space: nowrap;
  }
`;

// white-space: normal prevents invoice description from overflowing container
export const CardContainer = styled.div`
  padding: 2rem 1rem 3rem 2rem;
  white-space: normal;
  background: ${White};
  background-image: linear-gradient(180deg, #172854 12%, ${White} 12%, ${White} 87%, #172854 87%);
  background-clip: padding-box;
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    box-shadow: ${HoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`;

export const CardContent = styled.div`
  width: 90%;
  flex: 0 0 55%;
  font-size: 1.125rem;
  font-weight: 500;
  transform: translateX(1rem);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.75rem;
  }
`;

// nth-child(5) to target the DETAILS text field
// nth-child(6) targets last row of card (AMOUNT, STATUS, and Badge)
export const Row = styled.div`
  display: flex;
  min-width: 0;
  padding: 0.2rem 0 0 0;

  &:nth-child(5) > div {
    flex: 0 0 90%;
    line-height: 1.5;
    font-size: 1rem;
    margin-bottom: -1rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 0.725rem;
    }
  }
  &:nth-child(6) > div {
    font-size: 1.1rem;
    padding: 4px 0;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 0.85rem;
    }
  }
  img {
    margin: 0 auto;
  }
`;

export const CardsBottomRow = styled.div`
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
export const Label = styled.span`
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

export const DollarSign = styled.span`
  svg {
    margin: 0 2% -2.5% 0;
    max-width: 1.125rem;
    color: ${White};
  }
`;

export default InvoiceList;
