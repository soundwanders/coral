import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Percy from "../assets/Percy.png";
import Mary from "../assets/Mary.png";
import {CardShadow, HoverEffect} from "../utilities";

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
            <Badge content="Paid" paid />
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
            <Badge content="Late" late />
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
  padding: 0.25rem 0 1rem 0;
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: ${CardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;

const Invoice = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 0.2rem;
  padding: 0.5rem 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
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
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default Invoices;
