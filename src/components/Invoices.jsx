import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/Omar.png";
import Avatar2 from "../assets/Percy.png";
import {cardShadow, hoverEffect} from "../utils";

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Omar Mirrorman</Title>
              <SubTitle>Albatross Realty</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Paid" paid />
            <Price>$1599</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={Avatar2} alt="" />
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
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
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
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
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
