import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { PurplePalette } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const conversionData = [
  {
    id: 0,
    percentage: 11,
  },
  {
    id: 1,
    percentage: 29,
  },
  {
    id: 2,
    percentage: 26,
  },
  {
    id: 3,
    percentage: 44,
  },
  {
    id: 4,
    percentage: 25,
  },
  {
    id: 5,
    percentage: 36,
  },
  {
    id: 6,
    percentage: 22,
  },
  {
    id: 7,
    percentage: 16,
  },
  {
    id: 8,
    percentage: 19,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <TooltipLabel>{`${payload[0].value}`} conversion percentage</TooltipLabel>
      </div>
    );
  }
  return null;
};

const ConversionsChart = () => {
  return (
    <ResponsiveContainer minHeight={340} width="100%">
      <PieChart
        margin={{
          top: -50,
          right: 2,
          left: 2,
          bottom: 2,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Pie
          data={conversionData}
          dataKey="percentage"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={8}
          fill="#fff"
        >
          {data.clients.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={PurplePalette[index % PurplePalette.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ConversionsChart;
