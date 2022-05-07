import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Sidebar from '../components/Sidebar';
import ClientFilter from '../components/ClientFilter';
import { Container, Wrapper, FlexContainer, Title, Underline } from '../components/common';
import { White, CardShadow, HoverEffect, SearchBarShadow } from '../utilities';
import { FiSearch } from 'react-icons/fi';
import { GiSeaTurtle } from 'react-icons/gi';

const ClientList = () => {
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
            Coral Clients <GiSeaTurtle />{' '}
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
            <ClientFilter input={inputText} />
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
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 5rem 8%;
  white-space: nowrap;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 4.25rem 0;
    white-space: nowrap;
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

export const ClientUl = styled.ul`
  padding: 1rem 2.25rem 2rem 2.25rem;
  margin: 0;
  min-width: 265px;
  background: ${White};
  background-image: linear-gradient(to bottom, #172854 12%, ${White} 12%);
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  cursor: default;

  &:hover {
    opacity: 0.93;
    box-shadow: ${HoverEffect};
  }
  img {
    margin: 0 auto;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    min-width: 260px;
  }
`;

export const Portrait = styled.img`
  display: flex;
  width: 5rem;
  padding: 0.5rem 0;
`;

export const ListItem = styled.li`
  padding: 0.6rem;
  min-width: min-content;
  list-style-type: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.05) 0px 2px 6px -2px;
  background: #fffdfa;
  font-weight: 500;

  &:nth-child(3) {
    font-size: 1.3rem;
  }
`;

export const Label = styled.span`
  display: flex;
  padding: 0.1rem 0;
  margin: 0.8rem 0 0.1rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #a4a4a4;
`;

export default ClientList;
