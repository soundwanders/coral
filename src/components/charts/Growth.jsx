import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { DeepBluePalette } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const fetchGrowth = data.clients.map(({ name, growth }) => ({ name, growth }));

const GrowthChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <TooltipLabel>{`${payload[0].name} - ${payload[0].value}`}% growth</TooltipLabel>
        </div>
      );
    }
    return null;
  };

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
          data={fetchGrowth}
          dataKey="growth"
          innerRadius={60}
          outerRadius={125}
          paddingAngle={8}
          fill="#6161ff"
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={DeepBluePalette[index % DeepBluePalette.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GrowthChart;
