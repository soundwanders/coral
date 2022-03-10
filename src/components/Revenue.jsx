import React from "react";
import styled from "styled-components";
import {IoStatsChart} from "react-icons/io5";
import {ThemeColor, HoverEffect} from "../utilities";

function Revenue() {
  return (
    <RevenueCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <RevenueText>Net Revenue</RevenueText>
        <Earning>$492,016</Earning>
        <RevenueIncrease>+ 10% YTD</RevenueIncrease>
      </CardContent>
    </RevenueCard>
  );
}

const RevenueCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${ThemeColor};
  padding: 1rem;
  margin-right: -1rem;
  border-radius: 1rem;
  color: #f9f9f9;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${HoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    margin-right: 0;
    margin-top: 0.3rem;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 6rem;
  }
`;

const RevenueText = styled.h3`
  text-align: center;
  font-weight: 600;
  margin: 0.5rem 0 0.7rem 0;
`;

const Earning = styled.h2`
  text-align: center;
  padding: 0.3rem 0 0.5rem 0;
`;

const RevenueIncrease = styled.h5`
  text-align: center;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default Revenue;
