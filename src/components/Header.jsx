import React from "react";
import styled from "styled-components";
import {FiSearch} from "react-icons/fi";

function Header() {
  return (
    <HeaderContainer>
      <Greeting>
        Good morning,
        <span> Chase! </span>
      </Greeting>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Browse projects" />
      </InputContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 0.3rem;
  }
`;

const Greeting = styled.h1`
  span {
    font-weight: 500;
    color: #393d68;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-left: 1.25rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    overflow-x: hidden;
    flex-direction: row;
    flex: 1;
    flex-basis: 90%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: #f6f8ff;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #444444;
  }
`;

const Input = styled.input`
  border: none;
  background-color: #f6f8ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    overflow-x: hidden;
    margin-right: 1.25rem;
  }
`;

export default Header;
