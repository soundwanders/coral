import React from "react";
import styled from "styled-components";
import Badges from "./Badges";
import Percy from "../assets/Percy.png";
import Mary from "../assets/Mary.png";
import { CardShadow, HoverEffect, White } from "../utilities";

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={Percy} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Mary Mooglemash</Title>
              <SubTitle>Moogle Media</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badges content="Paid" paid />
            <Price>$2500</Price>
          </Container>
        </Invoice>

        <Invoice>
          <Info>
            <Avatar>
              <img src={Mary} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Percy Poppyseed</Title>
              <SubTitle>Custard Crew</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badges content="Late" late />
            <Price>$825</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 35rem;
  height: 140%;
  margin-top: 1rem;
  padding: 0.5rem 0 1rem 0;
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
  align-content: space-around;
  margin-top: 0.5rem;
  margin: 1rem 0 0 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem 0;
  }
`;

const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.2rem;
  padding: 0.5rem 0;
  &:nth-child(2) {
    padding-top: 1rem;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Info = styled.div`
  display: flex;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.2rem;
    width: 3.2rem;
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

const Container = styled.div`
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

const Price = styled.div`
  font-family: 'Arvo', serif;
`;

export default Invoices;
