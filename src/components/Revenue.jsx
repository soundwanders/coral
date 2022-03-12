import React from "react";
import styled from "styled-components";
import {IoStatsChart} from "react-icons/io5";
import {ThemeColor, HoverEffect, White} from "../utilities";

function Revenue() {
  return (
    <RevenueCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <NetRevenue>Net Revenue</NetRevenue>
        <Earning>$492,021</Earning>
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
  color: ${White};
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
  margin: 2rem 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 1rem;
  }
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 6rem;
  }
`;

const NetRevenue = styled.h2`
  text-align: center;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem 0;
`;

const Earning = styled.h2`
  text-align: center;
  padding: 0.3rem 0 0.5rem 0;
  transform: translateY(-6px);
`;

const RevenueIncrease = styled.h4`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: #f5f5f5;
  color: ${ThemeColor};
`;

export default Revenue;
