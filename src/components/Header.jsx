import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineEco } from 'react-icons/md';
import { SearchBarShadow } from '../utilities';

const Header = () => {
  return (
    <HeaderContainer>
      <Greeting>
        Welcome,
        <span>
          {' '}
          Chase! <MdOutlineEco />{' '}
        </span>
      </Greeting>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Browse projects" />
      </InputContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 0.3rem;
  }
`;

const Greeting = styled.h1`
  span {
    font-weight: 500;
    color: #393d68;
  }
  svg {
    transform: translateY(3px);
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-left: 1.25rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  box-shadow: ${SearchBarShadow};
  transform: translateX(2.5rem);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    overflow-x: hidden;
    margin-right: 1.4rem;
    flex-direction: row;
    flex: 1;
    flex-basis: 70%;
    transform: none;
    box-shadow: none;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    overflow-x: hidden;
  }
`;

export default Header;
